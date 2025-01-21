import { FC, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Item from "../../types/Item";
import useStyles from "./styles";
import useGlobalStyles from "../main-page/styles";
import { ItemsContext } from "../../context/ItemsProvider";
import { ItemImage } from "../../components/item-image/ItemImage";

const ItemList: FC = () => {
    const classes = useStyles();
    const globalClasses = useGlobalStyles();
    const navigate = useNavigate();

    const items: Item[] = useContext(ItemsContext);

    return <div className={classes.ulContainer}>
        <ul>
            {items &&
                items.map((item, index) =>
                (<li onClick={() => navigate(`${index}`, { replace: true })} key={index}>
                    <span className={classes.itemText}>
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                    </span>
                    <ItemImage item={item}></ItemImage>
                    <span className={globalClasses.metaData}>
                        <p>{item.metaData.publisher}</p>
                        <p>{item.metaData.date}</p>
                    </span>
                </li>
                ))
            }
        </ul>
    </div>
};

export { ItemList };
