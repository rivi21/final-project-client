import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-elements">
                <div className="element one">menú desplegable</div>
                <div className="element two">Logo Empresa</div>
                <div className="element three">UserName</div>
            </div>
            <select name="shopping-cart" id="shopping-cart-select">
                <option value="Nueva Cesta">Nueva Cesta</option>
                <option value="Cesta 1">Cesta 1</option>
            </select>
            <div>
                <NavLink exact to="/" className="" activeClassName="active">Log In</NavLink>
                <NavLink to="/dashboard" className="" activeClassName="active">Dashboard</NavLink>
            </div>
        </nav>
    )
}
