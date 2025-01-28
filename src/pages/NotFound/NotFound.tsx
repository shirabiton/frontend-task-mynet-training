import { FC } from "react";
import { useNavigate } from "react-router-dom";
import useGlobalStyles from "../MainPage/styles";
import useStyles from "./styles";

const NotFound: FC = () => {
    const navigate = useNavigate();
    const classes = useStyles();
    useGlobalStyles();

    return <div className={classes.notFoundContainer}>
        <h1>404</h1>
        <p>אופס... הדף שחיפשת לא קיים :(</p>
        <button onClick={() => navigate('/items')}>לדף הבית</button>
    </div>
}
export default NotFound;