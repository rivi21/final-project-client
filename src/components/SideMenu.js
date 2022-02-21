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
            <div>Nombre Agente{/* desharcodear con el Login */}
                <ul>
                    <li>{texts.comissions[0]}
                        <ul>
                            <li id="CurrentMonth" onClick={(e) => handleClick(e)}>{texts.comissions[1]}</li>
                            <li id="CurrentYear" onClick={(e) => handleClick(e)}>{texts.comissions[2]}</li>
                            <li id="Historical" onClick={(e) => handleClick(e)}>{texts.comissions[3]}</li>
                        </ul>
                    </li>
                    <li>{texts.sales[0]}
                        <ul>
                            <li id="Offers" onClick={(e) => handleClick(e)}>{texts.sales[1]}: </li>
                            <li id="PendingOrders" onClick={(e) => handleClick(e)}>{texts.sales[2]}: </li>
                            <li id="PreparingOrders" onClick={(e) => handleClick(e)}>{texts.sales[3]}: </li>
                            <li id="PreparedOrders" onClick={(e) => handleClick(e)}>{texts.sales[4]}: </li>
                            <li id="Invoices" onClick={(e) => handleClick(e)}>{texts.sales[5]}: </li>
                            <li id="Payments" onClick={(e) => handleClick(e)}>{texts.sales[6]}: </li>
                        </ul>
                    </li>
                    <li>{texts.balance[0]}
                        <ul id="TotalBalance" onClick={(e) => handleClick(e)}>{texts.balance[1]}</ul>
                        <ul id="DueBalance" onClick={(e) => handleClick(e)}>{texts.balance[2]}</ul>
                    </li>
                </ul>
            </div>
            <div id="Products" onClick={(e) => handleClick(e)} >{texts.products}</div>
            <div id="Customers" onClick={(e) => handleClick(e)}>{texts.customers[0]}</div>
            <div id="NewCustomer" onClick={(e) => handleClick(e)}>{texts.customers[1]}</div>
            <div>{texts.settings[0]}
                <ul>
                    <li>{texts.settings[1]}</li>
                    <li>{texts.settings[2]}</li>
                </ul>
            </div>
            <button>Log Out</button>
        </div>
    )
}

