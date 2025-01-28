import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { ItemsProvider } from './contexts/ItemContext/ItemsProvider';
import MainPage from './pages/MainPage';

function App() {

  return <ItemsProvider>
    <BrowserRouter>
      <MainPage />
    </BrowserRouter>
  </ItemsProvider>
}

export default App