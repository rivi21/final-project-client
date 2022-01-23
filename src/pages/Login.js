
import { useState, useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../components/LanguageSelect.css";
import "./Login.css"

export default function Login() {

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    let navigate = useNavigate();
    const handleClick = () => navigate(`/Dashboard`);

    const { texts, handleLanguage } = useContext(LanguageContext);

    /* const [isActive, setActive] = useState("false");
    const handleToggle = () => {
        setActive(!isActive);
    }; */

    return (
        <div className="wrapper">
            <div className="imagen"></div>
            <div className="datos">
                <div className="titulo-idioma">
                    <h2 className="title">Login</h2>
                    <div className="content-select">
                        {/*  <button onClick={handleToggle, handleLanguage} className={isActive ? "btn-language en" : "btn-language es"}
                            value={ }>
                            <span>{isActive ? "English" : "Español"}</span>
                        </button> */}
                        <label htmlFor="language-select">{/* {texts.select} */}Language</label>
                        <select name="language-selection" id="language-select">
                            <option onClick={handleLanguage} className="language-option" value="es">Español</option>
                            <option onClick={handleLanguage} className="language-option" value="en">English</option>
                        </select>
                    </div>
                </div>
                <form className="formulario" /* onSubmit={handleSubmit} */>
                    <div className="form-section">
                        <label className="section-part" >
                            <p>{texts.user}{/* Username */}</p>
                            <input className="section-part-2" type="text" placeholder="write your Username" name="username"
                                onChange={e => setUserName(e.target.value)} />
                        </label>
                    </div>
                    <div className="form-section">
                        <label className="section-part" >
                            <p>{texts.password}{/* Password */}</p>
                            <input className="section-part-2" type="password" placeholder="***********" name="password"
                                onChange={e => setPassword(e.target.value)} />
                        </label>
                    </div>
                    <div className="form-section">
                        <button onClick={handleClick} type="submit" className="inline login">
                            {/* <h3>Log in</h3> */}
                            <NavLink to="/dashboard"><h3>Log in</h3></NavLink>
                        </button>
                    </div>
                </form>
                <div className="links"></div>
            </div>
        </div>
    )
}




