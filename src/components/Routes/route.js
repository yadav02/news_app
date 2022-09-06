import Home from "../Home";
import DetailsPage from "../Details/DetailsPage";
import { Routes, Route } from "react-router-dom";

const RoutePage = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/newsdetails/:newsId" element={<DetailsPage />} />
        </Routes>

    )
}

export default RoutePage