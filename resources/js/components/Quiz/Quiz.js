import appStyles from "../../app.module.css";
import Button from '@mui/material/Button';
import React, { useState } from 'react';

const Quiz = (props) => {

    const [quizResults, setQuizResults] = useState({});

    const handleChange = (event) => {
        let results = quizResults;
        results[event.target.name] = Number(event.target.value);
        setQuizResults(results);
    }

    return (
        <div className={ appStyles.flexContainer }>

            {Object.keys(props.quizData).map(question => (
                <div key={question}>
                    <p>{question}</p>
                    <div>
                        {props.quizData[question].answers.map((answer, idx) => (
                            <div key={question+idx}>
                                <input name={question} type="radio" id={question+idx} value={idx} onChange={handleChange}/>
                                <label htmlFor={question+idx} style={{ marginLeft: "1%" }}>{answer}</label><br/>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            <Button onClick={() => {props.onSubmit(quizResults)}} variant="contained" style={{ color: "white", backgroundColor: "#4CAF50", width: "10%" }}>Submit</Button>
        </div>
    );
}

export default Quiz;
