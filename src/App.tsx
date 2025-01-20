import './App.css'
import { createContext, useEffect, useState } from 'react';
import Item from './types/Item';
import { MainPage } from './pages/main-page/MainPage';

export const ItemsContext = createContext<Item[]>([]);

function App() {
  const [items, setItems] = useState<Item[]>([]);

  // להעביר לפונקציה חיצונית
  useEffect(() => {
    fetch('/items.mockup.json')
      .then((response) => response.json())
      .then((data) => setItems(data.items))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <ItemsContext.Provider value={items}>
        <MainPage />
      </ItemsContext.Provider>
    </>
  )
}

export default App
