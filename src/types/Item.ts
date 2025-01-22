import LQIPMedia from "./LQIPMedia";
import MetaData from "./MetaData";

type Item = {
    thumbnails: LQIPMedia;
    content: LQIPMedia;
    title: string;
    description: string;
    metaData: MetaData;
}
export default Item;