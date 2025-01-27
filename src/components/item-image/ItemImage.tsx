import { FC } from "react";
import LQIPMedia from "../../types/lqip-media.type";
import { isSlowConnection } from "./functions";
import useStyles from "./styles";

const ItemImage: FC<{ image: LQIPMedia, title: string, index: string }> = ({ image, title, index }) => {
    const connectionType = navigator.connection && "effectiveType" in navigator.connection && typeof navigator.connection.effectiveType === "string"
        ? navigator.connection.effectiveType : "4g";
    const isSlow = isSlowConnection(connectionType);
    const baseUrl = isSlow ? image.lowQuality : image.highQuality;
    const classes=useStyles();
    
    return <span className={classes.imgContainer}>
        <img
            src={baseUrl.lowResolution} // default url
            srcSet={`${baseUrl.lowResolution} 400w, ${baseUrl.highResolution} 800w`}
            alt={title}
            title={title}
        />
    </span>
}
export { ItemImage };
