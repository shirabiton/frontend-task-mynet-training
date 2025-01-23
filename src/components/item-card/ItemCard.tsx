import { FC } from "react";
import useGlobalStyles from "../../pages/main-page/styles";
import Item from "../../types/Item";
import { ItemImage } from "../item-image/ItemImage";
import useStyles from "./styles";

const ItemCard: FC<{ item: Item, index: string }> = ({ item, index }) => {

    const classes = useStyles();
    const globalClasses = useGlobalStyles();

    return <span className={classes.card}>
        <span className={classes.itemText}>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
        </span>
        <ItemImage image={item.thumbnails} title={item.title} index={index}></ItemImage>
        <span className={globalClasses.metaData}>
            <p>{item.metaData.publisher}</p>
            <p>{item.metaData.date}</p>
        </span>
    </span>
}
export { ItemCard };
