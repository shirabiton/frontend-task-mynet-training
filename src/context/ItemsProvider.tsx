import { useState, useEffect, ReactNode, FC } from 'react';
import Item from '../types/Item';
import { ItemsContext } from './ItemsContext';

const ItemsProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    fetch('/items.mockup.json')
      .then((response) => response.json())
      .then((data) => setItems(data.items))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return <ItemsContext.Provider value={items}>
    {children}
  </ItemsContext.Provider>
}
export { ItemsProvider }