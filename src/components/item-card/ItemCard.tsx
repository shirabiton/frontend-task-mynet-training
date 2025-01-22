import { FC } from "react";
import Item from "../../types/Item";
import { ItemImage } from "../item-image/ItemImage";
import useGlobalStyles from "../../pages/main-page/styles";
import useStyles from "./styles";

const ItemCard: FC<{ item: Item }> = ({ item }) => {

    const classes = useStyles();
    const globalClasses = useGlobalStyles();

    return <span className={classes.card}>
        <span className={classes.itemText}>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
        </span>
        <ItemImage thumbnails={item.thumbnails} title={item.title}></ItemImage>
        <span className={globalClasses.metaData}>
            <p>{item.metaData.publisher}</p>
            <p>{item.metaData.date}</p>
        </span>
    </span>
}
export { ItemCard };