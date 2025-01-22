import { FC, useContext } from "react"
import { useParams } from "react-router-dom"
import useStyles from "./styles";
import useGlobalStyles from "../main-page/styles";
import { ItemsContext } from "../../context/ItemsProvider";
import { ItemImage } from "../../components/item-image/ItemImage";

const ItemDetails: FC = () => {
    const { index } = useParams();
    const classes = useStyles();
    const globalClasses = useGlobalStyles();
    const items = useContext(ItemsContext);
    const currentItem = items[Number(index)];

    return <div className={classes.singleItemContainer}>
        {currentItem
            ?
            (<div className={classes.singleItem}>
                <h1>{currentItem.title}</h1>
                <ItemImage thumbnails={currentItem.thumbnails} title={currentItem.title}></ItemImage>
                <span className={globalClasses.metaData}>
                    <p>{currentItem.metaData.publisher}</p>
                    <p>{currentItem.metaData.date}</p>
                </span>
            </div>) : (<p>פריט לא קיים</p>)}
    </div>
}

export { ItemDetails }