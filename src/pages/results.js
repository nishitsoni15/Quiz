import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ResultDiv , ResultSpan, ResultWrongP,ResultRightP} from '../components/style';

const Result = ({name,score}) => {
const navigate = useNavigate()
const [result,setResult] = useState(false);
    useEffect(() => {
        if(!name){
            navigate('/')
        }
        resultScore()
    },[name])

    const resultScore = () => {
        if(score <= 5){
            setResult(true)
        }
    }


    return(
        <>
       <ResultDiv>
           <div>
            { result ?  <ResultWrongP>Low Score! You Failed</ResultWrongP> : <ResultRightP>Good Score: You Passed!</ResultRightP> }
           </div>
           <ResultSpan>Final Score : {score}</ResultSpan>

           <Button
              variant="contained"
              color="secondary"
              size="large"
              style={{alignSelf:"center",marginTop:20}}
              href = "/"
           >
               Go to HomePage
           </Button>
       </ResultDiv>
        </>
    )
}

export default Result;