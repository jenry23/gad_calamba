<?php

use App\Models\QuestionType;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateQuestionTypesTable extends Migration
{
    public const QUESTION_TYPES_LIST = [
        [
            'name' => 'Fill the gap',
            'display_name' => 'Fill the gap',
        ],
        [
            'name' => 'Multiple Choice',
            'display_name' => 'Multiple Choice',
        ],
        [
            'name' => 'Ordering',
            'display_name' => 'Ordering',
        ],
        [
            'name' => 'Drag and Drop',
            'display_name' => 'Drag and Drop',
        ],
        [
            'name' => 'Free Text',
            'display_name' => 'Free Text',
        ]
    ];

    public function up()
    {
        Schema::create('question_types', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('display_name');
            $table->string('name');
            $table->string('description')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });

        foreach (self::QUESTION_TYPES_LIST as $item) {
            QuestionType::create([
                'name' => $item['name'],
                'display_name' => $item['display_name'],
            ]);
        }
    }

    public function down()
    {
        Schema::dropIfExists('question_types');
    }
}
