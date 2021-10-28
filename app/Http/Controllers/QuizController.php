<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Quiz;

class QuizController extends Controller
{
    public function get()
    {
        $quiz_data = Quiz::all();
        return json_decode($quiz_data);
    }

    public function set()
    {
        Quiz::truncate();

        $question = new Quiz;
        $question->question = "What does 'Tolle Lege' mean?";
        $question->answers = ["Take and Read", "Think and Learn", "Read and Write", "Pray and Love"];
        $question->correctAnswer = 0;
        $question->save();

        $question = new Quiz;
        $question->question = "What is the best programming language?";
        $question->answers = ["Javascript", "PHP", "Python", "Groovy"];
        $question->correctAnswer = 2;
        $question->save();

        $question = new Quiz;
        $question->question = "What does the \'Green\' in Green Egg Media represent?";
        $question->answers = ["Ordinary Time", "The Holy Spirit", "The Green Bay Packers", "Grass"];
        $question->correctAnswer = 1;
        $question->save();

        $question = new Quiz;
        $question->question = "When was GEM founded?";
        $question->answers = ["2006", "2006", "2006", "2008"];
        $question->correctAnswer = 3;
        $question->save();

        return response()->json(["result" => "ok"], 201);
    }
}
