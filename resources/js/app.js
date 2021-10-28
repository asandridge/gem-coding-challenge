import Quiz from './components/Quiz/Quiz';
import Results from './components/Results/Results';
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import ReactDOM from 'react-dom';

const App = () => {

    const [quizResults, setQuizResults] = useState({});
    const [quizData, setQuizData] = useState({});

    useEffect(() => {
        axios.get('/quiz').then(response => {
            setQuizData(response.data)
        })
    }, []);

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