import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { ItemsProvider } from './context/ItemsProvider';
import { MainPage } from './pages/main-page/MainPage';

function App() {

  return <ItemsProvider>
    <BrowserRouter>
      <MainPage />
    </BrowserRouter>
  </ItemsProvider>
}

export default App