import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="navbar">
            <NavLink exact to="/" className="" activeClassName="active">Log In</NavLink>
            <NavLink to="/dashboard" className="" activeClassName="active">Dashboard</NavLink>
        </nav>
    )
}
