import { FC } from "react";
import { useNavigate } from "react-router-dom";
import useStyles from "./styles";

const NotFound: FC = () => {
    const navigate = useNavigate();
    const classes=useStyles();

    return <div className={classes.notFoundContainer}>
        <h1>404</h1>
        <p>אופס... הדף שחיפשת לא קיים :(</p>
        <button onClick={() => navigate('/items')}>לדף הבית</button>
    </div>
}
export { NotFound }