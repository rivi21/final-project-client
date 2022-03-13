import { useState, useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import { URL_POST_LOGIN } from "../Settings";
/* import { useNavigate } from "react-router-dom"; */
/* import { NavLink } from "react-router-dom"; */
/* import "../components/LanguageSelect.css"; */
import "./Login.css"


export default function Login({ setToken, userEmail, setUserEmail }) {
    const { texts } = useContext(LanguageContext);

    /* const [email, setEmail] = useState(""); */
    const [password, setPassword] = useState("");

    const fetchData = async (e) => {
        e.preventDefault();
        const loginResponse = await fetch(URL_POST_LOGIN, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: userEmail,
                password: password
            })
        });
        const token = await loginResponse.json();
        console.log(token);
        localStorage.setItem('token', JSON.stringify(token));
        setToken(token.token);
    }

    return (
        <div className="wrapper">
            <div className="imagen"></div>
            <div className="datos">
                <div className="titulo-idioma">
                    <h2 className="title">Login</h2>
                    <div className="content-select">
                    </div>
                </div>
                <form className="formulario" onSubmit={fetchData}>
                    <div className="form-section">
                        <label className="section-part" >
                            <p>{texts.user}</p>
                            <input className="section-part-2" type="" placeholder="write your email" name="email"
                                onChange={e => setUserEmail(e.target.value)} />
                        </label>
                    </div>
                    <div className="form-section">
                        <label className="section-part" >
                            <p>{texts.password}</p>
                            <input className="section-part-2" type="password" placeholder="***********" name="password"
                                onChange={e => setPassword(e.target.value)} />
                        </label>
                    </div>
                    <div className="form-section">
                        <button type="submit" className="inline login"><h3>Log In</h3></button>
                    </div>
                </form>
                <div className="links"></div>
            </div>
        </div>
    )
}





