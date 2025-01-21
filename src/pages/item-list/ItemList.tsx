import { FC, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Item from "../../types/Item";
import useStyles from "./styles";
import useGlobalStyles from "../main-page/styles";
import { ItemsContext } from "../../context/ItemsProvider";

const ItemList: FC = () => {
    const classes = useStyles();
    const globalClasses = useGlobalStyles();
    const navigate = useNavigate();

    const items: Item[] = useContext(ItemsContext);
    const screenWidth = window.screen.width;
    const connectionType =
        navigator.connection &&
            "effectiveType" in navigator.connection &&
            typeof navigator.connection.effectiveType === "string" ? navigator.connection.effectiveType : "4g";
    const isSlowConnection = ["2g", "3g", "slow-2g"].includes(connectionType);

    return <div className={classes.ulContainer}>
        <ul>
            {items &&
                items.map((item, index) => {
                    const imageQuality = isSlowConnection
                        ? item.thumbnails.lowQuality
                        : item.thumbnails.highQuality;
                    return (
                        <li onClick={() => navigate(`${index}`, { replace: true })} key={index}>
                            <span className={classes.itemText}>
                                <h1>{item.title}</h1>
                                <p>{item.description}</p>
                            </span>
                            <img
                                src={
                                    screenWidth > 1024
                                        ? imageQuality.highResolution
                                        : imageQuality.lowResolution
                                }
                                alt={item.title}
                                title={item.title}
                            />
                            <span className={globalClasses.metaData}>
                                <p>{item.metaData.publisher}</p>
                                <p>{item.metaData.date}</p>
                            </span>
                        </li>
                    );
                })}
        </ul>
    </div>
};

export { ItemList };
