import { FC } from "react";
import Media from "../../types/Media";

const ItemImage: FC<{ thumbnails: Media, title: string }> = ({ thumbnails, title }) => {
    const screenWidth = window.screen.width;
    const connectionType =
        navigator.connection &&
            "effectiveType" in navigator.connection &&
            typeof navigator.connection.effectiveType === "string" ? navigator.connection.effectiveType : "4g";
    const isSlowConnection = ["2g", "3g", "slow-2g"].includes(connectionType);
    const imageQuality = isSlowConnection
        ? thumbnails.lowQuality
        : thumbnails.highQuality;

    return <img
        src={
            screenWidth > 1024
                ? imageQuality.highResolution
                : imageQuality.lowResolution
        }
        alt={title}
        title={title}
    />
}
export { ItemImage };