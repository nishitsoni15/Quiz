import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home , Quiz, Result} from "./pages/index";
import { Header,Footer } from "./components/index";
import { useState } from "react";

const Router = () => {
    const[name,setName] = useState("");
    const[questions,setQuestions] = useState("");
    const[score,setScore] = useState(0); 

    const getQuestions = async(category = '',difficulty = '') => {
      await fetch(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`)
        // .then(resp =>{
        //     console.log(resp.results)
        // })
        // .catch(error => {
        //     console.log(error)
        // })
       .then((res) => res.json())
       .then((json) => {
           setQuestions(json.results)
       })
      }
    return(
        <>
         
        <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" exact element={<Home name={name} setName={setName} getQuestions={getQuestions}/>}/>
            <Route path="/quiz" exact element={<Quiz 
                name={name}
                questions={questions}
                setQuestions={setQuestions} 
                score={score}
                setScore={setScore}
            />}/>
            <Route path="/result" exact element={<Result 
                name={name}
                score={score}
            />}/>
        </Routes>
        </BrowserRouter>
        <Footer />
        
        </>
    )
}

export default Router;