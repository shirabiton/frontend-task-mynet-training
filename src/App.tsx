import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import './App.css'
import { Header } from './components/Header';
import { ItemList } from './components/ItemList';
import { ItemDetails } from './components/ItemDetails';
import { NotFound } from './components/NotFound';
import { createContext, useEffect, useState } from 'react';
import Item from './types/Item';

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
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/items" />} />
            <Route path="/items" element={<ItemList />} />
            <Route path='/items/:index' element={<ItemDetails />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ItemsContext.Provider>
    </>
  )
}

export default App
