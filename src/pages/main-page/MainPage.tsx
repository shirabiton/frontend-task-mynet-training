import { FC, useEffect, useState } from "react"
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Header } from "../../components/header/Header";
import { ItemList } from "../item-list/ItemList";
import { NotFound } from "../not-found/NotFound";
import { ItemDetails } from "../item-details/ItemDetails";
import useGlobalStyles from "./styles";
import { handlePageTransitioning } from "./functions";

const MainPage: FC = () => {
    const location = useLocation();
    const classes = useGlobalStyles();
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => { const timeOut = handlePageTransitioning(setIsTransitioning); return () => clearTimeout(timeOut); }, [location]);

    return <div className={`${classes.transitionWrapper} ${isTransitioning ? "" : classes.transitionActive}`}>
        <Header />
        <Routes>
            <Route path="/" element={<Navigate to="/items" />} />
            <Route path="/items" element={<ItemList />} />
            <Route path='/items/:index' element={<ItemDetails />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    </div>
}
export { MainPage }