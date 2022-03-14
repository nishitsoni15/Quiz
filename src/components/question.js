import { Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { MainDiv, Options, SingleQuestion,OptionsBtn,ControlDiv,QuestionErrP} from "./style";
const useStyle = makeStyles({
    select:{
        backgroundColor:'rgb(7,207,0)',
        color:'white',
        boxShadow:'0 0 1px black'
    },
    wrong:{
        backgroundColor:'rgb(233,0,0)',
        color:'white',
        boxShadow:'0 0 1px black'
    }
})


const Question = ({
    currQuestion,
    setCurrQuestion,
    questions,
    options,
    correct,
    score,
    setScore,
}) => {
    const navigate = useNavigate();
    const[selected,setSelected] = useState()
    const[err,setErr] = useState(false)
    const classes = useStyle();
 
    const handleSelect = (i) => {
        if(selected === i && selected === correct){
            return classes.select;
        }else if(selected === i && selected !== correct){
            return classes.wrong;
        }else if(i === correct){
            return classes.select;
        }
    }

    const handleCheck = (i) => {
        setSelected(i)
        if(i === correct)setScore(score + 1)
             setErr(false)
    }

    const handleNext = () => {
        if(currQuestion > 8){
            navigate('/result')
        }else if(selected){
            setCurrQuestion(currQuestion + 1);
            setSelected();
        }
        else{
            setErr(true)
        }
        
    }

    return(
        <>
        <MainDiv>
            <h1>Question {currQuestion + 1}</h1>

            <SingleQuestion>
                <h2>{questions[currQuestion].question}</h2>
                {err && <QuestionErrP>Please select an option first!</QuestionErrP>}
                <Options className="option">
                        {options && options.map((i) => <OptionsBtn
                        onClick={() => handleCheck(i)}
                        className={`${selected && handleSelect(i)}`}
                        >{i}</OptionsBtn>)}
                </Options>

                <ControlDiv>
                     <Button
                     variant="contained"
                     color="secondary"
                     size="large"
                     style={{width : 185}}
                     href="/"
                     >
                         Quit
                     </Button>
                     <Button
                         variant="contained"
                         color="primary"
                         size="large"
                         style={{width : 185}}
                         onClick={handleNext}
                     >
                         Next Question
                     </Button>
                </ControlDiv>  
            </SingleQuestion>

        </MainDiv>
        </>
    )
}

export default Question;