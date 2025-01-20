import { FC } from "react"
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { Header } from "../../components/header/Header";
import { ItemList } from "../item-list/ItemList";
import { NotFound } from "../not-found/NotFound";
import { ItemDetails } from "../item-details/ItemDetails";
import useGlobalStyles from "./styles";

const MainPage: FC = () => {
    useGlobalStyles();

    return <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Navigate to="/items" />} />
            <Route path="/items" element={<ItemList />} />
            <Route path='/items/:index' element={<ItemDetails />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    </BrowserRouter>
}
export { MainPage }