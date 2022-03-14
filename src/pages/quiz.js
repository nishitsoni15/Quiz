import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { Question } from "../components/index";
import { SpanQuiz,DivScore } from "../components/style";


const Quiz = ({name,score,questions,setQuestions,setScore}) => {
    const[options,setOptions] = useState();
    const[currQuestion,setCurrQuestion] = useState(0)

    useEffect(() =>{
        console.log(questions);

        setOptions( 
            questions && 
            handleShuffle([
                questions[currQuestion]?.correct_answer,
                ...questions[currQuestion]?.incorrect_answers,
            ])
        )

    },[questions,currQuestion])

    console.log(options)

    const handleShuffle = (optionss) => {
        return optionss.sort(() => Math.random() - 0.5)
    }

    return(
        <>
        <div>
            <SpanQuiz>Welcome, {name}</SpanQuiz>
            {questions ? (
                <>
                <DivScore>
                    <span>{questions[currQuestion].category}</span>
                    <span>Score : {score}</span>
                </DivScore>

                <Question 
                    currQuestion={currQuestion}
                    setCurrQuestion={setCurrQuestion}
                    questions={questions}
                    options={options}
                    correct={questions[currQuestion]?.correct_answer}
                    score={score}
                    setScore={setScore}
                    setQuestions={setQuestions}
                />
                </>
            ):(
                <CircularProgress 
                style={{margin:100}}
                color="inherit"
                size={150}
                thickness={1}
                />
            )}
        </div>
        </>
    )
}

export default Quiz;