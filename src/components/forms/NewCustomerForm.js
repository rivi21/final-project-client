import LanguageContext from '../../context/LanguageContext';
import { useState, useContext } from 'react';
import { URL_POST_CUSTOMER } from "../../Settings";
import "./Forms.css";

export default function NewCustomerForm() {

    const { texts } = useContext(LanguageContext);

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
            <p>* ({texts.newCustomer[0]})</p>
            <h2>{texts.newCustomer[1]}</h2>
            <div className="components-forms">
                <label>{texts.newCustomer[2]}</label>
                <input name="agentName" type="text" onChange={e => setAgentName(e.target.value)} />
            </div>
            <div className="components-forms">
                <label>{texts.newCustomer[3]} *</label>
                <input name="name" type="text" onChange={e => setName(e.target.value)} />
            </div>
            <div className="components-forms">
                <label>Web</label>
                <input name="web" type="text" onChange={e => setWeb(e.target.value)} />
            </div>
            <div className="components-forms">
                <label>{texts.newCustomer[4]} *</label>
                <input name="address" type="text" placeholder="Dirección" onChange={e => setAddress(e.target.value)} />
                <input name="country" type="text" placeholder="País" onChange={e => setCountry(e.target.value)} />
            </div>
            <div className="components-forms">
                <label>{texts.newCustomer[5]} *</label>
                <input name="email" type="text" placeholder="E-mail" onChange={e => setEmail(e.target.value)} />
                <input name="phoneNumber" type="text" placeholder="Teléfono" onChange={e => setPhoneNumber(e.target.value)} />
            </div>
            <div className="buttons-container">
                <button className="button-form back" type="reset">{texts.newCustomer[6]}</button>
                <button className="button-form go" type="submit">{texts.newCustomer[7]}</button>
            </div>

        </form>
    )
}
