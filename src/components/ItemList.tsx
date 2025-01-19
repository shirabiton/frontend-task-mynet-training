import { FC, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Item from "../types/Item";
import { ItemsContext } from "../App";

const ItemList: FC = () => {
    const navigate = useNavigate();
    const items: Item[] = useContext(ItemsContext);
    const screenWidth = window.screen.width;
    const connectionType = (navigator.connection as any)?.effectiveType || "4g";
    const isSlowConnection = ["2g", "3g", "slow-2g"].includes(connectionType);


    return <div>
        <h1>Item list</h1>
        <ul>
            {items && items.map((item, index) => {
                const imageQuality = isSlowConnection ? item.thumbnails.lowQuality : item.thumbnails.highQuality;
                return (
                    <li key={index} onClick={() => navigate(`${index}`)}>
                        <p>{item.title}</p>
                        <p>{item.description}</p>
                        <p>Publisher: {item.metaData.publisher}</p>
                        <p>Date: {item.metaData.date}</p>
                        <img src={screenWidth > 1024 ? imageQuality.highResolution : imageQuality.lowResolution} alt={item.title} title={item.title} style={{ width: '200px', height: 'auto' }} />
                    </li>)
            })}
        </ul>
    </div>
}
export { ItemList }