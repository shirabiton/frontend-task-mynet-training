import Item from "./Item";

type ItemContext = {
    items: Item[];
    setItems: (items: Item[]) => void;
};
export default ItemContext;