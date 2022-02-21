import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import LanguageContext from "../context/LanguageContext";
import { NavLink } from "react-router-dom";
import SideMenu from "./SideMenu";
import "./Navbar.css";

export default function NavBar() {

    let navigate = useNavigate();

    const handleClick = (e) => navigate(`/${e.target.id}`);

    const context = useContext(LanguageContext);

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
            <div className="element three">UserName</div>           
            <div className="element">
                {/* <NavLink to="/" className="four">Log In</NavLink> */}
                <NavLink to="/" className="four" >Dashboard</NavLink>
            </div>
            <div className="element shopping-cart" id="ShoppingCart" onClick={(e) => handleClick(e)}>
                Nueva Cesta
            </div>
        </nav>
    )
}
