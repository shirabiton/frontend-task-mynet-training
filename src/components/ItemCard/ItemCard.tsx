import { FC } from "react";
import useGlobalStyles from "../../pages/MainPage/styles";
import Item from "../../types/item.type";
import { ItemImage } from "../ItemImage/ItemImage";
import useStyles from "./styles";

const ItemCard: FC<{ item: Item, index: string }> = ({ item, index }) => {

    const classes = useStyles();
    useGlobalStyles();

    return <span className={classes.cardContainer}>
        <span className={classes.cardContent}>
        <span className={classes.itemText}>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
        </span>
        <span>
            <span className={classes.imgContainer}>
                <ItemImage image={item.thumbnails} title={item.title} index={index}></ItemImage>
            </span>
        </span>
    </span>
        <span className={classes.metaData}>
            <p>{item.metaData.publisher}</p>
            <p>{item.metaData.date}</p>
        </span>
    </span>
}
export { ItemCard };
