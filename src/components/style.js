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
export const Hr = styled.hr`
    margin:10px;
    width:100%;
    background-color:grey;
`
export const FooterText = styled.div`
    text-align:center;
    margin-top:400px;
    margin-bottom:10px;
    font-size:10px;
`
export const ImgDiv = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top:30px;
`
export const ImgBanner = styled.img`
    width:700px;
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