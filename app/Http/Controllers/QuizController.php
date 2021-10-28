<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class QuizController extends Controller
{
    public function index()
    {
        $quiz_data = '{
            "What does \'Tolle Lege\' mean?": {
                "answers": [
                    "Take and Read",
                    "Think and Learn",
                    "Read and Write",
                    "Pray and Love"
                ],
                "correctAnswer": 0
            },
            "What is the best programming language?": {
                "answers": [
                    "Javascript",
                    "PHP",
                    "Python",
                    "Groovy"
                ],
                "correctAnswer": 2
            },
            "What does the \'Green\' in Green Egg Media represent?": {
                "answers": [
                    "Ordinary Time",
                    "The Holy Spirit",
                    "The Green Bay Packers",
                    "Grass"
                ],
                "correctAnswer": 1
            },
            "When was GEM founded?": {
                "answers": [
                    "2006",
                    "2006",
                    "2006",
                    "2008"
                ],
                "correctAnswer": 3
            }
        }';
        return json_decode($quiz_data);
    }
}
