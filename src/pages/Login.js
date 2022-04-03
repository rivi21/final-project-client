import { useState, useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import { URL_POST_LOGIN } from "../Settings";
/* import { useNavigate } from "react-router-dom"; */
/* import { NavLink } from "react-router-dom"; */
/* import "../components/LanguageSelect.css"; */
import "./Login.css"

async function loginUser(credentials) {
    return fetch(URL_POST_LOGIN, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

export default function Login({ setToken, setUserEmail }) {
    const { texts } = useContext(LanguageContext);

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username: email,
            password: password
        });
        console.log(token);
        setToken(token);
        setUserEmail(email);
    }

    /*  const loginUser = async (e) => {
         e.preventDefault();
         const loginResponse = await fetch(URL_POST_LOGIN, {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json',
             },
             body: JSON.stringify({
                 username: email,
                 password: password
             })
         });
         setUserEmail(email);
         const token = await loginResponse.json();
         if (!token.token) {
             return alert("Invalid credentials");
         }else {
         const storedToken = localStorage.setItem('token', JSON.stringify(token.token));
         console.log(localStorage);
         setToken(JSON.parse(localStorage.getItem('token')));
         }
         
     } */

    return (
        <div className="wrapper">
            <div className="imagen"></div>
            <div className="datos">
                <div className="titulo-idioma">
                    <h2 className="title">Login</h2>
                    <div className="content-select">
                    </div>
                </div>
                <form className="formulario" onSubmit={handleSubmit}>
                    <div className="form-section">
                        <label className="section-part" >
                            <p>{texts.user}</p>
                            <input className="section-part-2" type="" placeholder="write your email" name="email"
                                onChange={e => setEmail(e.target.value)} />
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





