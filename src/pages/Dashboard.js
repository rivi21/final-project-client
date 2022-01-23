import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import { useNavigate } from "react-router-dom";
/* import NavBar from "../components/NavBar"; */
import "./Dashboard.css"

export default function Dashboard() {

    const { texts } = useContext(LanguageContext);

    let navigate = useNavigate();

    const handleClick = (e) => navigate(`/${e.target.id}`);

    return (
        <>
            <div>
                <h2>{texts.comissions[0]}</h2>
                <div className="dashboard-section">
                    <div className="block-section" id="CurrentMonth" onClick={(e) => handleClick(e)}>{texts.comissions[1]}</div>
                    <div className="block-section" id="CurrentYear" onClick={(e) => handleClick(e)}>{texts.comissions[2]}</div>
                    <div className="block-section" id="Historical" onClick={(e) => handleClick(e)}>{texts.comissions[3]}</div>
                </div>
            </div>
            <div>
                <h2>{texts.shoppingcart}</h2>
                <div className="dashboard-section">
                    <div className="block-section" id="ShoppingCart" onClick={(e) => handleClick(e)}>{texts.shoppingcart}: </div>
                </div>
            </div>
            <div>
                <h2>{texts.sales[0]}</h2>
                <div className="dashboard-section">
                    <div className="block-section" id="Offers" onClick={(e) => handleClick(e)}>{texts.sales[1]}: </div>
                    <div className="block-section" id="PendingOrders" onClick={(e) => handleClick(e)}>{texts.sales[2]}: </div>
                    <div className="block-section" id="PreparingOrders" onClick={(e) => handleClick(e)}>{texts.sales[3]}: </div>
                    <div className="block-section" id="PreparedOrders" onClick={(e) => handleClick(e)}>{texts.sales[4]}: </div>
                    <div className="block-section" id="Invoices" onClick={(e) => handleClick(e)}>{texts.sales[5]}: </div>
                    <div className="block-section" id="Payments" onClick={(e) => handleClick(e)}>{texts.sales[6]}: </div>
                </div>
            </div>
            <div>
                <h2>{texts.balance[0]}</h2>
                <div className="dashboard-section">
                    <div className="block-section" id="TotalBalance" onClick={(e) => handleClick(e)}>{texts.balance[1]}</div>
                    <div className="block-section" id="DueBalance" onClick={(e) => handleClick(e)}>{texts.balance[2]}</div>
                </div>
            </div>
        </>
    )
}
