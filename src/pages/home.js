import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { HomeDiv, ImgDiv , ImgBanner , DivBox, H1First ,} from "../components/style";
import axios from 'axios';
import { useState ,useEffect} from 'react';
import { MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';

 
const Home = ({name,setName,getQuestions}) => {
  const navigate = useNavigate();
  const [newData,setNewData] = useState([]);
  const[category,setCategory] = useState("");
  const[difficulty,setDifficulty]= useState("");
  const[error,setError] = useState(false);
 

  useEffect(()=>{
    getApi();
  },[])

  const getApi = () => {
    axios.get('http://localhost:3001/Categories')
    .then(resp => {
      setNewData(resp.data)
    })
    .catch(error => {
      setNewData(error)
    })
  }

  const handleSubmit = () => {
    if(!difficulty || !name || !category ){
      setError(true)
    }else{
      setError(false)
      getQuestions(category,difficulty);
      navigate('/quiz');
    }
  }
    return(
        <>
        <HomeDiv>
        <ImgDiv>
            <ImgBanner src="./undraw_online_test_gba7.svg"  alt="home-banner"/>
        </ImgDiv>
        {/* <button onClick={props.passingData}>Click Me</button> */}
        <DivBox>
        <H1First>Quiz Settings</H1First>
        {error && <p>Please fill all the fields</p>}
        <Box
      component="form"
      sx={{
        '& > :not(style)': {m:3,mt:5, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Name" variant="outlined" onChange={(e) => setName(e.target.value)} value={name}/>
    </Box>
    <Box
      component="form"
      sx={{
        '& > :not(style)': {m:3, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField select id="outlined-basic" label="Category" variant="outlined" onChange={(e) => setCategory(e.target.value)} value={category}>

     {newData.map((cat)=> (
       <MenuItem key={cat.category} value={cat.value}>
         {cat.category}
       </MenuItem>
     ))}
        </TextField>
    </Box>
    <Box
      component="form"
      sx={{
        '& > :not(style)': {m:3, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField select id="outlined-basic" label="Level" variant="outlined" onChange={(e) => setDifficulty(e.target.value)} value={difficulty}>
      <MenuItem key="Easy" value="easy">
        Easy
      </MenuItem>
      <MenuItem key="Medium" value="medium">
        Medium
      </MenuItem>
      <MenuItem key="Hard" value="hard">
        Hard
      </MenuItem>
        </TextField>
    </Box>

    <Stack direction="row">
      <Button onClick={handleSubmit} variant="contained" sx={{width:'28ch',height:'8ch',m:3}}>Submit</Button>
    </Stack>
        </DivBox>

        </HomeDiv>
       
      
        </>
    )
}

export default Home;