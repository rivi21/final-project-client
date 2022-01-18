import { useState, useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import { NavLink } from "react-router-dom";
import SideMenu from "./SideMenu";
import "./Navbar.css";

export default function NavBar() {

    const context = useContext(LanguageContext);

    const [active, setActive] = useState("false");

    function handleToggle() {
        setActive(!active);
    }
    const toggleSidebar= `${active ? "visible" : "hidden"}`

    return (
        <nav className="navbar">
             <SideMenu toggleSidebar={toggleSidebar} />
            <div className={`menu_on ${active ? "visible_menu" : ""}`} onClick={handleToggle}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="element two">Logo</div>
            <div className="element three">UserName</div>
           
            {/*   <div>
                <select name="shopping-cart" id="shopping-cart-select">
                    <option className="language-option" value="es">Español</option>
                    <option className="language-option" value="en">Ingles</option>
                </select>
            </div> */}
            <NavLink exact to="/" className="" /* activeClassName="active" */>Log In</NavLink>
            <NavLink to="/dashboard" className="" /* activeClassName="active" */>Dashboard</NavLink>
        </nav>
    )
}
