import { FC, useContext } from "react";
import { useParams } from "react-router-dom";
import { ItemImage } from "../../components/ItemImage/ItemImage";
import { ItemsContext } from "../../contexts/ItemContext/ItemsContext";
import useGlobalStyles from "../MainPage/styles";
import useStyles from "./styles";

const ItemDetails: FC = () => {
    const { index } = useParams();
    const classes = useStyles();
    const items = useContext(ItemsContext);
    const currentItem = items[Number(index)];
    useGlobalStyles();

    return <div className={classes.singleItemContainer}>
        {currentItem ?
            (<div className={classes.singleItem}>
                <h1>{currentItem.title}</h1>
                <ItemImage image={currentItem.content} title={currentItem.title}></ItemImage>
                <span className={classes.metaData}>
                    <p>{currentItem.metaData.publisher}</p>
                    <p>{currentItem.metaData.date}</p>
                </span>
            </div>) : (<p>פריט לא קיים</p>)}
    </div>
}

export { ItemDetails };

