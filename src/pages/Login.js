import { useNavigate } from "react-router-dom"
import "./Login.css"

export default function Login() {

    let navigate = useNavigate();
    const handleClick = () => navigate(`/Dashboard`);

    return (
        <div className="wrapper">
            <div className="imagen"></div>
            <div className="datos">
                <div className="titulo-idioma">
                    <h2 className="title">Login</h2>
                    <div class="content-select">
                        <select>
                            <option value="es-ES" data-content="<span className='esp-flag'></span> ">Español</option>
                            <option>English</option>
                        </select>
                        <i></i>
                    </div>


                </div>
                {/* FORMULARIO */}
                <form className="formulario">
                    {/* con action y la url, y metodo get al apretar login te llevaría a la web indicada (index.html) */}

                    <div className="form-section">
                        <label className="section-part" for="input email">User</label>
                        <input className="section-part-2" type="email" placeholder="Javi Rivas" name="dirección"
                            id="input email" />
                    </div>
                    <div className="form-section">
                        <label className="section-part" for="input password">Password</label>
                        <input className="section-part-2" type="password" placeholder="***********" name="contraseña"
                            id="input password" />
                    </div>
                    <div className="form-section">
                        <button onClick={handleClick} className="inline login"><h3>Log in</h3></button>
                    </div>
                </form>
                {/* <hr className="line" /> */}
                {/* links  */}
                <div className="links">
                    {/*  <button className="inline button">
                    <img src="https://cdn-icons-png.flaticon.com/16/2111/2111432.png" alt="" />
                    <span> Github</span>
                </button>
                <button className="inline button">
                    <img src="https://cdn-icons-png.flaticon.com/16/733/733635.png" alt="" />
                    <span> Twitter</span>
                </button> */}
                    {/* <a className="enlace" href="#">forgot your password?</a> */}
                </div>
            </div>

        </div>
    )
}
