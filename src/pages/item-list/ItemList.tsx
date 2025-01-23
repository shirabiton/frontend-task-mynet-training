import { motion } from "framer-motion";
import { FC, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ItemCard } from "../../components/item-card/ItemCard";
import { ItemsContext } from "../../context/itemsContext";
import Item from "../../types/item.type";
import useStyles from "./styles";

const ItemList: FC = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const items: Item[] = useContext(ItemsContext);

    return <div className={classes.ulContainer}>
        <ul>
            {items && items.map((item, index) =>
            (
                <li onClick={() => navigate(`${index}`, { replace: true })}>
                    <motion.div key={index} layoutId={`item-${index}`}>
                        <ItemCard item={item} index={String(index)}></ItemCard>
                    </motion.div>
                </li>))
            }
        </ul>
    </div>
};

export { ItemList };
