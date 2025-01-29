import { FC } from "react";
import { Navigate, Route, Routes } from 'react-router-dom';
import Header from "../../components/Header";
import ItemDetails from "../ItemDetailsPage";
import ItemList from "../ItemsPage";
import NotFound from "../NotFoundPage";

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
