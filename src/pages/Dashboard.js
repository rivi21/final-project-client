import { useContext, useEffect } from "react";
import LanguageContext from "../context/LanguageContext";
import DataContext from '../context/DataContext';
import { useNavigate } from "react-router-dom";
import "./Dashboard.css"

export default function Dashboard({ userEmail }) {

    const { texts } = useContext(LanguageContext);
    const { comissionsThisMonth, comissionsThisYear, offers,
        pending, preparing, prepared, invoices, due, total } = useContext(DataContext);

    let navigate = useNavigate();

    const handleClick = (e) => navigate(`/${e.currentTarget.id}`);

    useEffect(() => {
        console.log(localStorage);
    }, [])
    /* const tokenDash = localStorage.getItem('token');
    console.log(tokenDash); */

    return (
        <>
            <div>
                <h1 className="section-title">{texts.titles[0]}</h1>
                <div className="dashboard-section">
                    <div className="block-section" id="CurrentMonth" onClick={(e) => handleClick(e)}>
                        <p>{texts.comissions[0]}</p>
                        <hr />
                        <p className="block-info">{texts.dashboard[0]}: {comissionsThisMonth[0]}</p>
                        <p className="block-info">{texts.dashboard[1]}: {comissionsThisMonth[1]} €</p>
                    </div>
                    <div className="block-section" id="CurrentYear" onClick={(e) => handleClick(e)}>
                        <p>{texts.comissions[1]}</p>
                        <hr />
                        <p className="block-info">{texts.dashboard[0]}: {comissionsThisYear[0]}</p>
                        <p className="block-info">{texts.dashboard[1]}: {comissionsThisYear[1]} €</p>
                    </div>
                </div>
            </div>
            {/*  <div>
                <h1 className="section-title">{texts.shoppingcart[0]}</h1>
                <div className="dashboard-section">
                    <div className="block-section" id="ShoppingCart" onClick={(e) => handleClick(e)}>
                        <p>{texts.shoppingcart}:</p>
                        <hr />
                        <p className="block-info">unidades</p>
                        <p className="block-info">sumatorios</p>
                    </div>
                </div>
            </div> */}
            <div>
                <h1 className="section-title">{texts.titles[1]}</h1>
                <div className="dashboard-section sales">
                    <div className="block-section" id="Offers" onClick={(e) => handleClick(e)}>
                        <p>{texts.sales[4]}:</p>
                        <hr />
                        <p className="block-info">{texts.dashboard[0]}: {offers[0]}</p>
                        {<p className="block-info">{texts.dashboard[1]}: {offers[1]}</p>}
                    </div>
                    <div className="block-section" id="PendingOrders" onClick={(e) => handleClick(e)}>
                        <p>{texts.sales[0]}:</p>
                        <hr />
                        <p className="block-info">{texts.dashboard[0]}: {pending[0]}</p>
                        <p className="block-info">{texts.dashboard[1]}: {pending[1]}</p>
                    </div>
                    <div className="block-section" id="PreparingOrders" onClick={(e) => handleClick(e)}>
                        <p>{texts.sales[1]}:</p>
                        <hr />
                        <p className="block-info">{texts.dashboard[0]}: {preparing[0]}</p>
                        <p className="block-info">{texts.dashboard[1]}: {preparing[1]}</p>
                    </div>
                </div>
                <div className="dashboard-section sales">
                    <div className="block-section" id="PreparedOrders" onClick={(e) => handleClick(e)}>
                        <p>{texts.sales[2]}:</p>
                        <hr />
                        <p className="block-info">{texts.dashboard[0]}: {prepared[0]}</p>
                        <p className="block-info">{texts.dashboard[1]}: {prepared[1]}</p>
                    </div>
                    <div className="block-section" id="Invoices" onClick={(e) => handleClick(e)}>
                        <p>{texts.sales[3]}:</p>
                        <hr />
                        <p className="block-info">{texts.dashboard[0]}: {invoices[0]}</p>
                        <p className="block-info">{texts.dashboard[1]}: {invoices[1]} €</p>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="section-title">{texts.titles[2]}</h1>
                <div className="dashboard-section">
                    <div className="block-section" id="TotalBalance" onClick={(e) => handleClick(e)}>
                        <p>{texts.balance[0]}</p>
                        <hr />
                        <p className="block-info">{/* {texts.dashboard[2]} : {total[0]} */}</p>
                        <p className="block-info">{texts.dashboard[1]}: {total} €</p>
                    </div>
                    <div className="block-section" id="DueBalance" onClick={(e) => handleClick(e)}>
                        <p>{texts.balance[1]}</p>
                        <hr />
                        <p className="block-info">{texts.dashboard[2]}: {due[0]}</p>
                        <p className="block-info">{texts.dashboard[1]}: {due[1]} €</p>
                    </div>
                </div>
            </div>
        </>
    )
}
