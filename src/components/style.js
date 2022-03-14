import { style } from "@mui/system";
import styled , {css ,StyledComponent} from "styled-components";

export const HeaderDiv = styled.div`
    display:flex;
    flex-direction:column;
    align-items:left;
    text-transform:uppercase;
    cursor:pointer;
    font-family:"Montserrat", sans-serif;
    font-size:3vw;
    margin-left:10px;
    position:sticky;
    top:0;
`
export const FooterText = styled.div`
    position:fixed;
    top:650px;
    font-size:10px;
    padding-left:600px;
`

export const HomeDiv = styled.div`
    display:flex;
    justify-content:space-around;
`

export const ImgDiv = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top:130px;
`
export const ImgBanner = styled.img`
    width:600px;
    @media (max-width:1440px){
        width:500px;
    }
`

export const DivBox = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`
export const H1First = styled.h1`
    margin-top:30px;
    color:Blue;
`
export const MainDiv = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
`

export const SpanQuiz = styled.span`
    text-align:center;
    border:1px solid black;
    box-shadow:2px 2px 2px 2px grey;
    padding:5px;
    margin-left:575px;
`
export const DivScore = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    margin:0 100px 0 100px;
`
export const SingleQuestion = styled.div`
    width:95%;
    min-height:350px;
    border:5px solid grey;
    padding:20px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-around;
    margin-top:10px;
`
export const Options = styled.div`
    width: 100%;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;
    align-items:center;
    flex:1;
`
export const OptionsBtn = styled.button`
    width:46%;
    height:50px;
    padding:15px 20px;
    margin:10px;
    box-shadow:0 0 2px black;
`
export const Select = styled.div`
    background-color:rgb(7,207,0);
    color:white;
    box-shadow:0 0 1px black;
`
export const Wrong = styled.div`
    background-color:rgb(233,0,0);
    color:white;
    box-shadow:0 0 1px black;
`

export const ControlDiv = styled.div`
    width:100%;
    display:flex;
    justify-content:space-around;
`
export const ResultDiv = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top:150px;
    `
export const QuestionErrP = styled.p`
    color:red;
    font-style:italic;
`
export const ResultSpan = styled.span`
    font-size:30px;
    color:purple;
    font-style:bold;
`
export const ResultWrongP = styled.p`
    font-size:50px;
    color:red;
`
export const ResultRightP = styled.p`
    font-size:50px;
    color:green;
`