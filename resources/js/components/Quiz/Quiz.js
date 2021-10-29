import styles from "../../app.module.css";
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
        <div className={ styles.flexContainer }>

            {Object.keys(props.quizData).map(question => (
                <div key={question} style={{ marginTop: "1%" }}>
                    <p>{props.quizData[question].question}</p>
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

            <Button onClick={() => {props.onSubmit(quizResults)}} variant="contained" className={ styles.quizButton } style={{ backgroundColor: "#4CAF50", marginTop: "2%", marginBottom: "2%" }}>Submit</Button>
        </div>
    );
}

export default Quiz;
