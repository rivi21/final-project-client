import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import { useNavigate } from "react-router-dom";
import "./SideMenu.css"

export default function SideMenu(props) {

    const { texts } = useContext(LanguageContext);

    let navigate = useNavigate();

    const handleClick = (e) => navigate(`/${e.target.id}`);

    return (
        <div className={`side-nav ${props.toggleSidebar}`}  >
            <div>
                <div id="agent-name">Nombre Agente{/* desharcodear con el Login */}</div>
                <ul>
                    <li>{texts.comissions[0]}
                        <ul>
                            <li className="section" id="CurrentMonth" onClick={(e) => handleClick(e)}>{texts.comissions[1]}</li>
                            <li className="section" id="CurrentYear" onClick={(e) => handleClick(e)}>{texts.comissions[2]}</li>
                            <li className="section" id="Historical" onClick={(e) => handleClick(e)}>{texts.comissions[3]}</li>
                        </ul>
                    </li>
                    <li>{texts.sales[0]}
                        <ul>
                            <li className="section" id="Offers" onClick={(e) => handleClick(e)}>{texts.sales[1]}: </li>
                            <li className="section" id="PendingOrders" onClick={(e) => handleClick(e)}>{texts.sales[2]}: </li>
                            <li className="section" id="PreparingOrders" onClick={(e) => handleClick(e)}>{texts.sales[3]}: </li>
                            <li className="section" id="PreparedOrders" onClick={(e) => handleClick(e)}>{texts.sales[4]}: </li>
                            <li className="section" id="Invoices" onClick={(e) => handleClick(e)}>{texts.sales[5]}: </li>
                            <li className="section" id="Payments" onClick={(e) => handleClick(e)}>{texts.sales[6]}: </li>
                        </ul>
                    </li>
                    <li>{texts.balance[0]}
                        <ul className="section" id="TotalBalance" onClick={(e) => handleClick(e)}>{texts.balance[1]}</ul>
                        <ul className="section" id="DueBalance" onClick={(e) => handleClick(e)}>{texts.balance[2]}</ul>
                    </li>
                </ul>
            </div>
            <div className="section" id="Products" onClick={(e) => handleClick(e)} >{texts.products}</div>
            <div className="section" id="Customers" onClick={(e) => handleClick(e)}>{texts.customers[0]}</div>
            <div className="section" id="NewCustomer" onClick={(e) => handleClick(e)}>{texts.customers[1]}</div>
            <div>{texts.settings[0]}
                <ul>
                    <li className="section">{texts.settings[1]}</li>
                    <li className="section">{texts.settings[2]}</li>
                </ul>
            </div>
            <button className="section button">Log Out</button>
        </div>
    )
}

