import './App.css'
import { MainPage } from './pages/main-page/MainPage';
import { BrowserRouter } from 'react-router-dom';
import { ItemsProvider } from './context/ItemsProvider';

function App() {

  return <ItemsProvider>
    <BrowserRouter>
      <MainPage />
    </BrowserRouter>
  </ItemsProvider>
}

export default App