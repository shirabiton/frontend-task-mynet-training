import { FC } from "react";
import { useNavigate } from "react-router-dom";
import useStyles from "./styles";
import { navigateToHome } from "../../utils/globalFunctions";

const Header: FC = () => {

    const navigate = useNavigate();
    useStyles();

    return <header>
        <p onClick={() => navigateToHome(navigate)} title="לדף הבית">Shopping</p>
    </header>
}
export default Header;

