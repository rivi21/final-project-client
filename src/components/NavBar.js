import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function NavBar() {
    return (
        <nav className="Navbar">
            <div className="Navbar-element-one">
                <div className="hamburguesa">hamburguesa</div>
                <div className="hamburguesa">Logo Empresa</div>
                <div className="hamburguesa">UserName</div>
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
