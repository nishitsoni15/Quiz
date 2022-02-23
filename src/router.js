import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home , Question, Result} from "./pages/index";
import { Header,Footer } from "./components/index";

const Router = (props) => {
    return(
        <>
        <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" exact element={<Home passingData={props.fetchQuestion}/>}/>
            <Route path="/question" exact element={<Question passingQuestions={props.questions}
                passingScore={props.score}
                passingsetScore={props.setScore}
                passingsetQuestions={props.setQuestions}
            />}/>
            <Route path="/result" exact element={<Result />}/>
        </Routes>
        <Footer />
        </BrowserRouter>
        
        </>
    )
}

export default Router;