<?php

declare(strict_types=1);

namespace App\Utils;

use Meneses\LaravelMpdf\Facades\LaravelMpdf as PDF;

class PDFUtil
{
    private const PDF_CONFIG = [
        'margin_left' => 15,
        'margin_right' => 15,
        'margin_top' => 40,
        'margin_bottom' => 18,
        'margin_header' => 15,
        'margin_footer' => 15,
        'setAutoTopMargin' => 'stretch',
        'setAutoBottomMargin' => 'stretch',
    ];

    public static function generateFromString(string $html, string $pdf_file_name): void
    {
        $pdf = PDF::loadHTML($html, self::PDF_CONFIG);
        $pdf->stream($pdf_file_name);
    }

    public static function loadView(
        string $view_path,
        array $data,
        string $pdf_file_name,
        array $config = self::PDF_CONFIG
    ): void {
        $pdf = PDF::loadView($view_path, $data, [], $config);
        $pdf->stream($pdf_file_name);
    }
}
