import Media from "./Media";
import MetaData from "./MetaData";

type Item = {
    thumbnails: Media;
    content: Media;
    title: string;
    description: string;
    metaData: MetaData;
}
export default Item;