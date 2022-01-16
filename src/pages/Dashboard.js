import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css"

export default function Dashboard() {

    const { texts } = useContext(LanguageContext);

    let navigate = useNavigate();

    const handleClickCurrentMonth = () => navigate(`/CurrentMonth`);
    const handleClickCurrentYear = () => navigate(`/CurrentYear`);
    const handleClickHistorical = () => navigate(`/Historical`);

    const handleClickShoppingCart = () => navigate(`/ShoppingCart`);

    const handleClickInvoices = () => navigate(`/Invoices`);
    const handleClickSalesOffers = () => navigate(`/Offers`);
    const handleClickPendingOrders = () => navigate(`/PendingOrders`);
    const handleClickPreparingOrders = () => navigate(`/PreparingOrders`);
    const handleClickPreparedOrders = () => navigate(`/PreparedOrders`);
    const handleClickPayments = () => navigate(`/Payments`);

    const handleClickTotalBalance = () => navigate(`/TotalBalance`);
    const handleClickDueBalance = () => navigate(`/DueBalance`);

    return (
        <>
            <div>
                <h2>{texts.comissions[0]}</h2>
                <div className="dashboard-section">
                    <div className="block-section" onClick={handleClickCurrentMonth}>{texts.comissions[1]}</div>
                    <div className="block-section" onClick={handleClickCurrentYear}>{texts.comissions[2]}</div>
                    <div className="block-section" onClick={handleClickHistorical}>{texts.comissions[3]}</div>
                </div>
            </div>
            <div>
                <h2>{texts.shoppingcart}</h2>
                <div className="dashboard-section">
                    <div className="block-section" onClick={handleClickShoppingCart}>{texts.shoppingcart}: </div>
                </div>
            </div>
            <div>
                <h2>{texts.sales[0]}</h2>
                <div className="dashboard-section">
                    <div className="block-section" onClick={handleClickSalesOffers}>{texts.sales[1]}: </div>
                    <div className="block-section" onClick={handleClickPendingOrders}>{texts.sales[2]}: </div>
                    <div className="block-section" onClick={handleClickPreparingOrders}>{texts.sales[3]}: </div>
                    <div className="block-section" onClick={handleClickPreparedOrders}>{texts.sales[4]}: </div>
                    <div className="block-section" onClick={handleClickInvoices}>{texts.sales[5]}: </div>
                    <div className="block-section" onClick={handleClickPayments}>{texts.sales[6]}: </div>
                </div>
            </div>
            <div>
                <h2>{texts.balance[0]}</h2>
                <div className="dashboard-section">
                    <div className="block-section" onClick={handleClickTotalBalance}>{texts.balance[1]}</div>
                    <div className="block-section" onClick={handleClickDueBalance}>{texts.balance[2]}</div>
                </div>
            </div>
        </>
    )
}
