import { FC, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Item from "../types/Item";
import { ItemsContext } from "../App";
import useStyles from "./styles";

const ItemList: FC = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const items: Item[] = useContext(ItemsContext);
    const screenWidth = window.screen.width;
    const connectionType = (navigator.connection as any)?.effectiveType || "4g";
    const isSlowConnection = ["2g", "3g", "slow-2g"].includes(connectionType);


    return <>
        <ul>
            {items && items.map((item, index) => {
                const imageQuality = isSlowConnection ? item.thumbnails.lowQuality : item.thumbnails.highQuality;
                return (
                    <li key={index} onClick={() => navigate(`${index}`)}>
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                        <img src={screenWidth > 1024 ? imageQuality.highResolution : imageQuality.lowResolution} alt={item.title} title={item.title} style={{ width: '200px', height: 'auto' }} />
                        <span className={classes.metaData}>
                            <p>{item.metaData.publisher}</p>
                            <p>{item.metaData.date}</p>
                        </span>
                    </li>)
            })}
        </ul>
    </>
}
export { ItemList }