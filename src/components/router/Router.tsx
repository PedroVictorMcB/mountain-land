import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Register from "../../pages/Register";
import RecoverLogin from "../../pages/RecoverLogin";

const Router: React.FC = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="register" element={<Register />} />
            <Route path="recover-password" element={<RecoverLogin />} />
        </Routes>
    </BrowserRouter>
);

export default Router;
