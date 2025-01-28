import { FC } from "react";
import { Navigate, Route, Routes } from 'react-router-dom';
import Header from "../../components/header";
import ItemDetails from "../ItemDetails";
import ItemList from "../ItemList";
import NotFound from "../NotFound";

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
export default MainPage;
