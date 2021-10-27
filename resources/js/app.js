import Quiz from './components/Quiz/Quiz';
import Results from './components/Results/Results';
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import ReactDOM from 'react-dom';

const App = () => {

    const [quizResults, setQuizResults] = useState({});
    const quizData = {
        "What does 'Tolle Lege' mean?": {
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
        "What does the 'Green' in Green Egg Media represent?": {
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
        },
    };

    useEffect(() => {
        const url = '/src/api/quiz_data.php'
        axios.get(url).then((response) => {
            console.log(response.data)
        })
    });

    const MainContent = () => {
        if (Object.keys(quizResults).length) {
            return <Results quizData={quizData} quizResults={quizResults} onSubmit={resetQuiz}/>;
        }
        return <Quiz quizData={quizData} onSubmit={submitQuiz}/>;
    }

    const submitQuiz = (results) => {
        if (Object.keys(results).length !== Object.keys(quizData).length) {
            alert("Please answer each question.");
        } else {
            setQuizResults(results);
            window.scrollTo(0, 0);
        }
    }

    const resetQuiz = () => {
        setQuizResults([]);
        window.scrollTo(0, 0);
    }

    return (
        <div style={{ marginLeft: '5%' }}>
            <div style={{ marginTop: '5%' }}>
                <h2>GEM Online Interview Quiz</h2>
            </div>
            <MainContent />
        </div>
    )
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));