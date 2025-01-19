import { FC, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Item from "../types/Item";
import { ItemsContext } from "../App";

const ItemList: FC = () => {
    const navigate = useNavigate();
    const items: Item[] = useContext(ItemsContext);
    const SCREEN_WIDTH = window.screen.width;
    // const NETWORK_CONNECTION=navigator.connection.effectiveType;
    let connection = navigator.connection;
    

    return <div>
        <h1>Item list</h1>
        <ul>
            {items && items.map((item, index) => (
                <li key={index} onClick={() => navigate(`${index}`)}>
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                    <p>Publisher: {item.metaData.publisher}</p>
                    <p>Date: {item.metaData.date}</p>
                    <img src={SCREEN_WIDTH > 1024 ? item.thumbnails.lowQuality.highResolution : item.thumbnails.lowQuality.lowResolution} alt={item.title} title={item.title} style={{ width: '200px', height: 'auto' }} />
                    {/* slow-2g */}
                </li>))}
        </ul>
    </div>
}
export { ItemList }