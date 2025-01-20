import { FC, useContext } from "react"
import { useParams } from "react-router-dom"
import { ItemsContext } from "../../App";
import useStyles from "./styles";
import useGlobalStyles from "../main-page/styles";

const ItemDetails: FC = () => {
    const { index } = useParams();
    const classes = useStyles();
    const globalClasses = useGlobalStyles();
    const items = useContext(ItemsContext);
    const currentItem = items[Number(index)];
    const screenWidth = window.innerWidth;
    const connectionType = (navigator.connection && 'effectiveType' in navigator.connection && typeof navigator.connection.effectiveType === 'string') ? navigator.connection.effectiveType : "4g";
    const isSlowConnection = ["2g", "3g", "slow-2g"].includes(connectionType);
    const imageQuality = currentItem ? isSlowConnection ? currentItem.thumbnails.lowQuality : currentItem.thumbnails.highQuality : '';

    return <div className={classes.singleItemContainer}>
        {currentItem && imageQuality &&
            <div className={classes.singleItem}>
                <h1>{currentItem.title}</h1>
                <img src={screenWidth > 1024 ? imageQuality.highResolution : imageQuality.lowResolution} alt={currentItem.title} title={currentItem.title} className={classes.singleItemImg} />
                <span className={globalClasses.metaData}>
                    <p>{currentItem.metaData.publisher}</p>
                    <p>{currentItem.metaData.date}</p>
                </span>
            </div>}
    </div>
}

export { ItemDetails }