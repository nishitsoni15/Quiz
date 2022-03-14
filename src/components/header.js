import { Link } from "react-router-dom";
import { HeaderDiv} from '../components/style';

const Header = () => {
    return(
        <>
        <HeaderDiv>
        <Link to="/">Quiz</Link>
        </HeaderDiv>
        </>
    )
}

export default Header;