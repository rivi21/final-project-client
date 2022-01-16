import { /* useState, */ useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import { useNavigate } from "react-router-dom";
import "../components/LanguageSelect.css";
import "./Login.css"

export default function Login() {

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
                        <label for="language-select">{texts.select}</label>
                        <select name="language-selection" id="language-select"> 
                                                    
                            <option onClick={handleLanguage} className="language-option" value="es">Español</option>
                            <option onClick={handleLanguage} className="language-option" value="en">English</option>
                        </select>
                    </div>
                </div>
                <form className="formulario">
                    <div className="form-section">
                        <label className="section-part" for="input name">{texts.user}</label>
                        <input className="section-part-2" type="name" placeholder="write your Username" name="dirección"
                            id="input name" />
                    </div>
                    <div className="form-section">
                        <label className="section-part" for="input password">{texts.password}</label>
                        <input className="section-part-2" type="password" placeholder="***********" name="contraseña"
                            id="input password" />
                    </div>
                    <div className="form-section">
                        <button onClick={handleClick} className="inline login"><h3>Log in</h3></button>
                    </div>
                </form>
                <div className="links"></div>
            </div>
        </div>
    )
}
