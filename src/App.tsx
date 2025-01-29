import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { ItemsProvider } from './contexts/ItemContext/ItemsProvider';
import Routes from "./Routes";

function App() {

  return <ItemsProvider>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </ItemsProvider>
}

export default App;