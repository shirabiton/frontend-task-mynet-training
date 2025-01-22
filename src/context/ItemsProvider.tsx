import { useState, useEffect, ReactNode, FC } from 'react';
import Item from '../types/Item';
import { ItemsContext } from './itemsContext';
import { fetchItems } from './functions';

const ItemsProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    fetchItems(setItems);
  }, []);

  return <ItemsContext.Provider value={items}>
    {children}
  </ItemsContext.Provider>
}
export { ItemsProvider }