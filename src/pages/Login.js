import { useState } from "react";
import { URL_POST_LOGIN } from "../Settings";
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

export default function Login({ setToken, email, setEmail }) {

    const [password, setPassword] = useState("");

    const handleSubmit = async e => {
        e.preventDefault();
        const response = await loginUser({
            username: email,
            password: password
        });
        if (!response.token) {
            return alert("Invalid credentials");
        } else {
            setToken(response);
        }
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
                <form className="formulario" onSubmit={handleSubmit}>
                    <div className="form-section">
                        <label className="section-part" >
                            <p>Usuario</p>
                            <input className="section-part-2" type="" placeholder="write your email" name="email"
                                onChange={e => setEmail(e.target.value)} />
                        </label>
                    </div>
                    <div className="form-section">
                        <label className="section-part" >
                            <p>Contraseña</p>
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





