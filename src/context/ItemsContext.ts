import { createContext } from "react";
import Item from "../types/Item";

export const ItemsContext = createContext<Item[]>([]);