import React, { useState } from "react";
import axios from "axios";
import  Router  from "../src/router";

function App() {
const[questions,setQuestions] = useState("");
const[score,setScore] = useState(0); 

const getQuestions = async() => {
  const { data } =await axios.get(`https://opentdb.com/api.php?amount=10`);
setQuestions(data.results)       
}

  return (
      <div className="App">
          <Router fetchQuestions={getQuestions}
           questions={questions}
           score={score}
           setScore={setScore}
           setQuestions={setQuestions}
           />
      </div>
  );
}

export default App;
