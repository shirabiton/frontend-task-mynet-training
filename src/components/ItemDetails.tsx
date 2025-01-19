import { FC, useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemsContext } from "../App";
import Item from "../types/Item";

const ItemDetails: FC = () => {
    const { index } = useParams();
    const items = useContext(ItemsContext);
    const [currentItem, setCurrentItem] = useState<Item | null>(null);
    const screenWidth = window.screen.width;
    const connectionType = (navigator.connection as any)?.effectiveType || "4g";
    const isSlowConnection = ["2g", "3g", "slow-2g"].includes(connectionType);
    const imageQuality = currentItem ? isSlowConnection ? currentItem.thumbnails.lowQuality : currentItem.thumbnails.highQuality : '';

    useEffect(() => {
        if (index)
            setCurrentItem(items[parseInt(index)]);
    }, [index, items])


    return <div>
        {currentItem && imageQuality &&
            <div>
                <p>{currentItem.title}</p>
                <p>{currentItem.metaData.publisher}</p>
                <p>{currentItem.metaData.date}</p>
                <img src={screenWidth > 1024 ? imageQuality.highResolution : imageQuality.lowResolution} alt={currentItem.title} title={currentItem.title} style={{ width: '200px', height: 'auto' }} />
            </div>}
    </div>
}

export { ItemDetails }