import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Register from "../../pages/Register";

const Router: React.FC = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="register" element={<Register />} />
        </Routes>
    </BrowserRouter>
);

export default Router;
