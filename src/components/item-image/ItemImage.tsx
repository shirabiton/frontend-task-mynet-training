import { FC } from "react";
import LQIPMedia from "../../types/LQIPMedia";
import { isSlowConnection } from "./functions";

const ItemImage: FC<{ image: LQIPMedia, title: string }> = ({ image, title }) => {
    const connectionType = navigator.connection && "effectiveType" in navigator.connection && typeof navigator.connection.effectiveType === "string"
        ? navigator.connection.effectiveType : "4g";
    const isSlow = isSlowConnection(connectionType);
    const baseUrl = isSlow ? image.lowQuality : image.highQuality;

    return <img
        src={baseUrl.lowResolution} // default url
        srcSet={`${baseUrl.lowResolution} 400w, ${baseUrl.highResolution} 800w`}
        alt={title}
        title={title}
    />
}
export { ItemImage };