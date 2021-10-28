import styles from "../../app.module.css";
import Button from '@mui/material/Button';

const Results = (props) => {

    const getColor = (question, answer) => {
        if (props.quizResults[question] === answer) {
            if (props.quizData[question].correctAnswer === answer) {
                return "green";
            } else {
                return "red";
            }
        } else {
            return "black";
        }
    }

    const getScore = () => {
        let score = 0;
        for (let question in props.quizResults) {
            if (props.quizResults[question] === props.quizData[question].correctAnswer) {
                score += 1;
            }
        }
        return score;
    }

    return (
        <div className={ styles.flexContainer }>

            <h4 style={{ marginTop: '2%', fontWeight: 'bold' }}>Your Score: {getScore()}/{Object.keys(props.quizResults).length}</h4>

            {Object.keys(props.quizData).map(question => (
                <div key={question} style={{ marginTop: '2%' }}>
                    <p>{question}</p>
                    <div>
                        {props.quizData[question].answers.map((answer, idx) => (
                            <div key={question+idx}>
                                <p style={{ marginLeft: '2%', color: getColor(question, idx), fontWeight: props.quizData[question].correctAnswer === idx ? "bold" : "normal" }}>{answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            <Button onClick={() => {props.onSubmit()}} variant="contained" className={ styles.quizButton } style={{ marginTop: "2%", marginBottom: "2%" }}>Try Again</Button>
        </div>
    );
}

export default Results;
