import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { ImgDiv , ImgBanner , DivBox, H1First} from "../components/style";
import axios from 'axios';
import { useState ,useEffect} from 'react';
import { MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';

 
const Home = (props) => {
  const navigate = useNavigate();
  const [newData,setNewData] = useState([]);
  const[name,setName] = useState("");
  const[category,setCategory] = useState("");
  const[level,setLevel]= useState("");
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
    if(!name||!category||!level){
      setError(true)
    }else{
      setError(false)
      props.fetchQuestions(category,level);
      navigate('/question');
    }
  }
    return(
        <>
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
        '& > :not(style)': {m:4,mt:5, width: '70ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Name" variant="outlined" onChange={(e) => setName(e.target.value)} value={name}/>
    </Box>
    <Box
      component="form"
      sx={{
        '& > :not(style)': {m:4, width: '70ch' },
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
        '& > :not(style)': {m:4, width: '70ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField select id="outlined-basic" label="Level" variant="outlined" onChange={(e) => setLevel(e.target.value)} value={level}>
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

    <Stack spacing={2} direction="row">
      <Button onClick={handleSubmit} variant="contained" sx={{width:'82ch',height:'8ch'}}>Contained</Button>
    </Stack>
        </DivBox>
      
        </>
    )
}

export default Home;