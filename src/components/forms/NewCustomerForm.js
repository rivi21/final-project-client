import { resetWarningCache } from 'prop-types/checkPropTypes';
import { useState } from 'react';
import { URL_POST_CUSTOMER } from "../../Settings";
import "./Forms.css";

export default function NewCustomerForm() {
    const [agentName, setAgentName] = useState("");
    const [name, setName] = useState("");
    const [web, setWeb] = useState("");
    const [country, setCountry] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const fetchDNewCustomer = async (e) => {
        e.preventDefault();
        const response = await fetch(URL_POST_CUSTOMER, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                agentName: agentName,
                name: name,
                web: web,
                country: country,
                address: address,
                email: email,
                phoneNumber: phoneNumber 
            })
        });
        document.getElementById("new-customer-form").reset();
    }
    return (
        <form id="new-customer-form" className="container-form" onSubmit={fetchDNewCustomer}>
            <p>* (Información obligatoria)</p>
            <h2>New Customer</h2>
            <div className="components-forms">
                <label>Agente</label>
                <input name="agentName" type="text" onChange={e => setAgentName(e.target.value)} />
            </div>
            <div className="components-forms">
                <label>Nombre *</label>
                <input name="name" type="text" onChange={e => setName(e.target.value)} />
            </div>
            <div className="components-forms">
                <label>Web</label>
                <input name="web" type="text" onChange={e => setWeb(e.target.value)} />
            </div>
            <div className="components-forms">
                <label>Dirección *</label>
                <input name="address" type="text" placeholder="Dirección" onChange={e => setAddress(e.target.value)} />
                <input name="country" type="text" placeholder="País" onChange={e => setCountry(e.target.value)} />               
            </div>
            <div className="components-forms">
                <label>Contacto *</label>
                <input name="email" type="text" placeholder="E-mail" onChange={e => setEmail(e.target.value)} />
                <input name="phoneNumber" type="text" placeholder="Teléfono" onChange={e => setPhoneNumber(e.target.value)} />
            </div>
            <div className="buttons-container">
                <button className="button-form back" type="reset">Borrar</button>
                <button className="button-form go" type="submit">Aceptar</button>
            </div>

        </form>
    )
}
