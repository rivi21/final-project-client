import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import "./SideMenu.css"

export default function SideMenu(props) {



    const { texts } = useContext(LanguageContext);

    return (
        <div className={`side-nav ${props.toggleSidebar}`}  >
            <div>Nombre Agente{/* desharcodear con el Login */}
                <ul>
                    <li>{texts.comissions[0]}
                        <ul>
                            <li>{texts.comissions[1]}</li>
                            <li>{texts.comissions[2]}</li>
                            <li>{texts.comissions[3]}</li>
                        </ul>
                    </li>
                    <li>{texts.sales[0]}
                        <ul>
                            <li>{texts.sales[1]}</li>
                            <li>{texts.sales[2]}</li>
                            <li>{texts.sales[3]}</li>
                            <li>{texts.sales[4]}</li>
                            <li>{texts.sales[5]}</li>
                            <li>{texts.sales[6]}</li>
                        </ul>
                    </li>
                    <li>{texts.balance[0]}
                        <ul>{texts.balance[1]}</ul>
                        <ul>{texts.balance[2]}</ul>
                    </li>
                </ul>
            </div>
            <div>{texts.products[0]}</div>
            <div>{texts.customers[0]}</div>
            <div>{texts.customers[1]}</div>
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

