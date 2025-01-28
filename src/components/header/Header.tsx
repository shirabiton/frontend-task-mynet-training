import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { navigateToHome } from "../../pages/MainPage/functions";
import useStyles from "./styles";

const Header: FC = () => {

    const navigate = useNavigate();
    useStyles();

    return <header>
        <p onClick={() => navigateToHome(navigate)} title="לדף הבית">Shopping</p>
    </header>
}
export default Header;

