import { FC } from "react";
import Item from "../../types/Item";

const ItemImage: FC<{ item: Item }> = ({ item }) => {
    const screenWidth = window.screen.width;
    const connectionType =
        navigator.connection &&
            "effectiveType" in navigator.connection &&
            typeof navigator.connection.effectiveType === "string" ? navigator.connection.effectiveType : "4g";
    const isSlowConnection = ["2g", "3g", "slow-2g"].includes(connectionType);
    const imageQuality = isSlowConnection
        ? item.thumbnails.lowQuality
        : item.thumbnails.highQuality;

    return <img
        src={
            screenWidth > 1024
                ? imageQuality.highResolution
                : imageQuality.lowResolution
        }
        alt={item.title}
        title={item.title}
    />
}
export { ItemImage };