import { FC } from "react"
import useStyles from "./styles";

const Header: FC = () => {
    const classes = useStyles();

    return <div className={classes.header}>header</div>
}
export { Header }