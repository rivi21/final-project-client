import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import DataContext from "../context/DataContext";
import { useNavigate } from "react-router-dom";
import "./SideMenu.css"

export default function SideMenu(props) {

    const { texts } = useContext(LanguageContext);
    const { userName } = useContext(DataContext);

    let navigate = useNavigate();

    const handleClick = (e) => navigate(`/${e.target.id}`);

    return (
        <div className={`side-nav ${props.toggleSidebar}`}  >
            <div>
                <div id="agent-name">{`${userName[0]} ${userName[1]}`}</div>
                <ul>
                    <li>{texts.titles[0]}
                        <ul>
                            <li className="section" id="CurrentMonth" onClick={(e) => handleClick(e)}>{texts.comissions[0]}</li>
                            <li className="section" id="CurrentYear" onClick={(e) => handleClick(e)}>{texts.comissions[1]}</li>
                            <li className="section" id="Historical" onClick={(e) => handleClick(e)}>{texts.comissions[2]}</li>
                        </ul>
                    </li>
                    <li>{texts.titles[1]}
                        <ul>
                            {/*  <li className="section" id="Offers" onClick={(e) => handleClick(e)}>{texts.sales[1]}: </li> */}
                            <li className="section" id="PendingOrders" onClick={(e) => handleClick(e)}>{texts.sales[0]}: </li>
                            <li className="section" id="PreparingOrders" onClick={(e) => handleClick(e)}>{texts.sales[1]}: </li>
                            <li className="section" id="PreparedOrders" onClick={(e) => handleClick(e)}>{texts.sales[2]}: </li>
                            <li className="section" id="Invoices" onClick={(e) => handleClick(e)}>{texts.sales[3]}: </li>
                            <li className="section" id="Payments" onClick={(e) => handleClick(e)}>{texts.sales[4]}: </li>
                        </ul>
                    </li>
                    <li>{texts.titles[2]}
                        <ul className="section" id="TotalBalance" onClick={(e) => handleClick(e)}>{texts.balance[0]}</ul>
                        <ul className="section" id="DueBalance" onClick={(e) => handleClick(e)}>{texts.balance[1]}</ul>
                    </li>
                </ul>
            </div>
            <div className="section" id="Products" onClick={(e) => handleClick(e)} >{texts.products[0]}</div>
            <div className="section" id="Customers" onClick={(e) => handleClick(e)}>{texts.customers[0]}</div>
            <div className="section" id="NewCustomer" onClick={(e) => handleClick(e)}>{texts.customers[1]}</div>
            <div>{texts.settings[0]}
                <ul>
                    <li className="section">{texts.settings[1]}</li>
                    <li className="section">{texts.settings[2]}</li>
                </ul>
            </div>
            <button className="section button" onClick={localStorage.clear()}>Log Out</button>
        </div>
    )
}

