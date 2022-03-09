import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "../context/DataContext";
import LanguageContext from "../context/LanguageContext";
import { NavLink } from "react-router-dom";
import SideMenu from "./SideMenu";
import "./Navbar.css";

export default function NavBar() {

    let navigate = useNavigate();

    const handleClick = (e) => navigate(`/${e.target.id}`);

    const { userName } = useContext(DataContext)
    const { texts, handleLanguage } = useContext(LanguageContext);

    const [active, setActive] = useState(false);

    const toggleSidebar = `${active ? "visible" : "hidden"}`

    return (
        <nav className="navbar">
            <SideMenu toggleSidebar={toggleSidebar} />
            <div className={`menu_on ${active ? "visible_menu" : ""}`} onClick={() => setActive(!active)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="element two">Logo</div>
            <div className="element three">{userName[0]} {userName[1]}</div>
            <div className="element">
                <NavLink to="/" className="four" >{texts.titles[3]}</NavLink>
            </div>
            <div className="element">
                <label htmlFor="language-select">{texts.select}</label>
                <select name="language-selection" id="language-select">
                    <option onClick={handleLanguage} className="language-option" value="es">Español</option>
                    <option onClick={handleLanguage} className="language-option" value="en">English</option>
                </select>
            </div>
            <div className="element shopping-cart" id="ShoppingCart" onClick={(e) => handleClick(e)}>
               {texts.shoppingcart[1]}
            </div>
        </nav>
    )
}
