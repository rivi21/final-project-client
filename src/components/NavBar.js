import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function NavBar() {

    const context = useContext(LanguageContext);

    return (
        <nav className="navbar">
            <div className="navbar-elements">
                <div className="element one">menú desplegable</div>
                <div className="element two">Logo Empresa</div>
                <div className="element three">UserName</div>
            </div>
            <div>
                <select name="shopping-cart" id="shopping-cart-select">
                    <option className="language-option" value="es">Español</option>
                    <option className="language-option" value="en">Ingles</option>
                </select>
            </div>
            <div>
                <NavLink exact to="/" className="" /* activeClassName="active" */>Log In</NavLink>
                <NavLink to="/dashboard" className="" /* activeClassName="active" */>Dashboard</NavLink>
            </div>
        </nav>
    )
}
