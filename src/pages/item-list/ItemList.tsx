import { FC, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Item from "../../types/Item";
import useStyles from "./styles";
import { ItemCard } from "../../components/item-card/ItemCard";
import { ItemsContext } from "../../context/itemsContext";

const ItemList: FC = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const items: Item[] = useContext(ItemsContext);

    return <div className={classes.ulContainer}>
        <ul>
            {items && items.map((item, index) =>
            (<li onClick={() => navigate(`${index}`, { replace: true })} key={index}>
                <ItemCard item={item}></ItemCard>
            </li>
            ))
            }
        </ul>
    </div>
};

export { ItemList };
