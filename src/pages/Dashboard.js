import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import { useNavigate } from "react-router-dom";
/* import NavBar from "../components/NavBar"; */
import "./Dashboard.css"

export default function Dashboard() {

    const { texts } = useContext(LanguageContext);

    let navigate = useNavigate();

    const handleClick = (e) => navigate(`/${e.currentTarget.id}`);

    return (
        <>
            <div>
                <h1 className="section-title">{texts.comissions[0]}</h1>
                <div className="dashboard-section">
                    <div className="block-section" id="CurrentMonth" onClick={(e) => handleClick(e)}>
                        <p>{texts.comissions[1]}</p>
                        <hr/>
                        <p className="block-info">unidades</p>
                        <p className="block-info">sumatorios</p>
                    </div>
                    <div className="block-section" id="CurrentYear" onClick={(e) => handleClick(e)}>
                        <p>{texts.comissions[2]}</p>
                        <hr/>
                        <p className="block-info">unidades</p>
                        <p className="block-info">sumatorios</p>

                    </div>
                    <div className="block-section" id="Historical" onClick={(e) => handleClick(e)}>
                        <p>{texts.comissions[3]}</p>
                        <hr/>
                        <p className="block-info">unidades</p>
                        <p className="block-info">sumatorios</p>

                    </div>
                </div>
            </div>
            <div>
                <h1 className="section-title">{texts.shoppingcart}</h1>
                <div className="dashboard-section">
                    <div className="block-section" id="ShoppingCart" onClick={(e) => handleClick(e)}>
                        <p>{texts.shoppingcart}:</p>
                        <hr/>
                        <p className="block-info">unidades</p>
                        <p className="block-info">sumatorios</p>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="section-title">{texts.sales[0]}</h1>
                <div className="dashboard-section sales">
                    <div className="block-section" id="Offers" onClick={(e) => handleClick(e)}>
                        <p>{texts.sales[1]}:</p>
                        <hr/>
                        <p className="block-info">unidades</p>
                        <p className="block-info">sumatorios</p>
                    </div>
                    <div className="block-section" id="PendingOrders" onClick={(e) => handleClick(e)}>
                        <p>{texts.sales[2]}:</p>
                        <hr/>
                        <p className="block-info">unidades</p>
                        <p className="block-info">sumatorios</p>
                    </div>
                    <div className="block-section" id="PreparingOrders" onClick={(e) => handleClick(e)}>
                        <p>{texts.sales[3]}:</p>
                        <hr/>
                        <p className="block-info">unidades</p>
                        <p className="block-info">sumatorios</p>
                    </div>
                </div>
                <div className="dashboard-section sales">
                    <div className="block-section" id="PreparedOrders" onClick={(e) => handleClick(e)}>
                        <p>{texts.sales[4]}:</p>
                        <hr/>
                        <p className="block-info">unidades</p>
                        <p className="block-info">sumatorios</p>
                    </div>
                    <div className="block-section" id="Invoices" onClick={(e) => handleClick(e)}>
                        <p>{texts.sales[5]}:</p>
                        <hr/>
                        <p className="block-info">unidades</p>
                        <p className="block-info">sumatorios</p>
                    </div>
                    {/*  <div className="block-section" id="Payments" onClick={(e) => handleClick(e)}>
                        <p>{texts.sales[6]}: 
                         </div> */}
                </div>
            </div>
            <div>
                <h1 className="section-title">{texts.balance[0]}</h1>
                <div className="dashboard-section">
                    <div className="block-section" id="TotalBalance" onClick={(e) => handleClick(e)}>
                        <p>{texts.balance[1]}</p>
                        <hr/>
                        <p className="block-info">unidades</p>
                        <p className="block-info">sumatorios</p>
                    </div>
                    <div className="block-section" id="DueBalance" onClick={(e) => handleClick(e)}>
                        <p>{texts.balance[2]}</p>
                        <hr/>
                        <p className="block-info">unidades</p>
                        <p className="block-info">sumatorios</p>
                    </div>
                </div>
            </div>
        </>
    )
}
