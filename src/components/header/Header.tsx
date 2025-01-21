import { FC } from "react"
import { useNavigate } from "react-router-dom"
import useStyles from "./styles";

const Header: FC = () => {

    const navigate = useNavigate();
    useStyles();

    return <header>
        <p onClick={() => navigate('/items', { replace: true })} title="לדף הבית">Shopping</p>
    </header>
}
export { Header }