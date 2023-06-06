<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Maatwebsite\Excel\Facades\Excel;
use App\Imports\ImportGads;
use App\Models\UploadProcessor;
use App\Models\Gad;
use Exception;

class GadImportJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $processor_id;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($processor_id)
    {
        $this->processor_id = $processor_id;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        ini_set('memory_limit', '5G');

        try {
            $processor = UploadProcessor::findOrFail($this->processor_id);
            $imports = new ImportGads($this->processor_id);

            Excel::import($imports, $processor->path);

            $total_row = $imports->getRowCount();

            UploadProcessor
                ::findOrFail($this->processor_id)
                ->update([
                    'upload_output' => "Imported $total_row rows",
                    'status' => 'Success'
                ]);

            Gad::all()->groupBy('household_no')->map(function ($gads) {
                $spouse_gad = $gads->filter(function ($spouse) {
                    return $spouse->household_id == 2;
                })->first();

                $household_gad = $gads->filter(function ($spouse) {
                    return $spouse->household_id == 1;
                })->first();

                if (isset($spouse_gad)) {
                    $data = [
                        'spouse_first_name' => $spouse_gad->first_name ? $spouse_gad->first_name : '',
                        'spouse_last_name' => $spouse_gad->last_name ?  $spouse_gad->last_name : '',
                        'spouse_middle_name' => $spouse_gad->middle_name ? $spouse_gad->middle_name : '',
                        'spouse_extension_name' => $spouse_gad->extension_name ? $spouse_gad->extension_name : '',
                    ];
                    $main = $gads->filter(function ($spouse) {
                        return $spouse->household_id == 1;
                    })->first();

                    if (isset($main)) {
                        $main->update($data);
                    }
                }

                if (isset($household_gad)) {
                    $data = [
                        'spouse_first_name' => $household_gad->first_name ? $household_gad->first_name : '',
                        'spouse_last_name' => $household_gad->last_name ?  $household_gad->last_name : '',
                        'spouse_middle_name' => $household_gad->middle_name ? $household_gad->middle_name : '',
                        'spouse_extension_name' => $household_gad->extension_name ? $household_gad->extension_name : '',
                    ];
                    $main = $gads->filter(function ($spouse) {
                        return $spouse->household_id == 2;
                    })->first();

                    if (isset($main)) {
                        $main->update($data);
                    }
                }
            });
        } catch (Exception $e) {
            $this->updateProcessor($e);
        }
    }

    private function updateProcessor($exception): void
    {
        UploadProcessor
            ::findOrFail($this->processor_id)
            ->update([
                'upload_output' => json_encode(['error' => $exception->getMessage()]),
                'status' => 'Failed'
            ]);
    }
}
