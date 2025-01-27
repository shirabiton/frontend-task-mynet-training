import { FC } from "react"
import { Routes, Route, Navigate } from 'react-router-dom';
import { Header } from "../../components/Header/Header";
import { ItemList } from "../ItemList/ItemList";
import { NotFound } from "../NotFound/NotFound";
import { ItemDetails } from "../ItemDetails/ItemDetails";


const MainPage: FC = () => {
    return <>
        <Header />
        <Routes>
            <Route path="/" element={<Navigate to="/items" />} />
            <Route path="/items" element={<ItemList />} />
            <Route path='/items/:index' element={<ItemDetails />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    </>
}
export { MainPage }