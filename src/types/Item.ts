import Media from "./Media";

type Item = {
    thumbnails: Media;
    content: Media;
    title: string;
    description: string;
    metaData: { publisher: string, date: string }
}

export default Item;