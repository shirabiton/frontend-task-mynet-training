import { FC, useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemsContext } from "../App";
import Item from "../types/Item";

const ItemDetails: FC = () => {
    const { index } = useParams();
    const items = useContext(ItemsContext);
    const [currentItem, setCurrentItem] = useState<Item | null>(null);

    useEffect(() => {
        if (index)
            setCurrentItem(items[parseInt(index)]);
    }, [index, items])

    return <div>
        {currentItem &&
            <div>
                <p>{currentItem.title}</p>
                <p>{currentItem.metaData.publisher}</p>
                <p>{currentItem.metaData.date}</p>
            </div>}
    </div>
}

export { ItemDetails }