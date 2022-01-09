import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import Error from "./pages/Error";
import Invoices from "./pages/Invoices";

export default function Router() {

    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/invoices" element={<Invoices />} />

                    <Route path="*" element={<Error />} />
                </Routes>
            </BrowserRouter>

        </div>
    );
};
