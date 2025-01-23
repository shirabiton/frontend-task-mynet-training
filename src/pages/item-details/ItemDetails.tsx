import { motion } from "framer-motion";
import { FC, useContext } from "react";
import { useParams } from "react-router-dom";
import { ItemImage } from "../../components/item-image/ItemImage";
import { ItemsContext } from "../../context/itemsContext";
import useGlobalStyles from "../main-page/styles";
import useStyles from "./styles";

const ItemDetails: FC = () => {
    const { index } = useParams();
    const classes = useStyles();
    const globalClasses = useGlobalStyles();
    const items = useContext(ItemsContext);
    const currentItem = items[Number(index)];

    return <motion.div
        className={classes.singleItemContainer}
        layoutId={`item-${index}`}>
        {currentItem ?
            (<div className={classes.singleItem}>
                <h1>{currentItem.title}</h1>
                <ItemImage image={currentItem.content} title={currentItem.title} index={String(index)}></ItemImage>
                <span className={globalClasses.metaData}>
                    <p>{currentItem.metaData.publisher}</p>
                    <p>{currentItem.metaData.date}</p>
                </span>
            </div>) : (<p>פריט לא קיים</p>)}
    </motion.div>
}

export { ItemDetails };
