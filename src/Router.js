import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer";

import CurrentMonth from "./pages/comissionsPages/CurrentMonth";
import CurrentYear from "./pages/comissionsPages/CurrentYear";
import Historical from "./pages/comissionsPages/Historical";

import Customers from "./pages/Customers"
import NewCustomer from "./pages/NewCustomer"
import Products from "./pages/Products"
import ShoppingCart from "./pages/ShoppingCart";

import Offers from "./pages/salesPages/Offers";
import PendingOrders from "./pages/salesPages/PendingOrders";
import PreparingOrders from "./pages/salesPages/PreparingOrders";
import PreparedOrders from "./pages/salesPages/PreparedOrders";
import Invoices from "./pages/salesPages/Invoices";
import Payments from "./pages/salesPages/Payments";

import TotalBalance from "./pages/balancePages/TotalBalance";
import DueBalance from "./pages/balancePages/DueBalance";

import Error from "./pages/Error";

export default function Router() {
    
    return (
        <div>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    {/* <Route path="/" element={<Login />} /> */}
                    <Route path="/" element={<Dashboard />} />

                    <Route path="/CurrentMonth" element={<CurrentMonth />} />
                    <Route path="/CurrentYear" element={<CurrentYear />} />
                    <Route path="/Historical" element={<Historical />} />

                    <Route path="/Customers" element={<Customers />} />
                    <Route path="/NewCustomer" element={<NewCustomer />} />
                    <Route path="/Products" element={<Products />} />
                    <Route path="/ShoppingCart" element={<ShoppingCart />} />

                    <Route path="/Offers" element={<Offers />} />
                    <Route path="/PendingOrders" element={<PendingOrders />} />
                    <Route path="/PreparingOrders" element={<PreparingOrders />} />
                    <Route path="/PreparedOrders" element={<PreparedOrders />} />
                    <Route path="/invoices" element={<Invoices />} />
                    <Route path="/Payments" element={<Payments />} />

                    <Route path="/TotalBalance" element={<TotalBalance />} />
                    <Route path="/DueBalance" element={<DueBalance />} />

                    <Route path="*" element={<Error />} />

                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
};
