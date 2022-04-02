import { useState, useEffect, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "../../context/DataContext";
import { URL_GET_CUSTOMERS } from "../../Settings";
import "../FormPages.css";

export const CustomerContext = createContext();

export default function NewBasket() {

    const { userEmail } = useContext(DataContext);

    let navigate = useNavigate();
    const handleClick = (e, customerId) => {
        navigate(`/${e.target.id}/${customerId}`)
    };

    const [agentCustomers, setAgentCustomers] = useState([])

    function setDataAgent(data) {
        let agentData = [];
        data.forEach(element => {
            if (userEmail == element.agentEmail) {
                agentData.push(element);
            }
        });
        setAgentCustomers(agentData);
    }
    useEffect(() => {
        fetch(URL_GET_CUSTOMERS)
            .then(response => response.json())
            .then(data => setDataAgent(data))
    }, []);

    return (
        <div className="container-page">
            <div className="page-title">
                <h2>New Basket</h2>
            </div>
            <div className="page-table">
                <table className="table">
                    <thead>
                        <tr>
                            <th>{"Seleccione Cliente"}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {agentCustomers.map(data => {
                            return (
                                <tr key={data.id}>
                                    <td>
                                        <div className="new-customer-row">
                                            <span>{data.name}</span>
                                            <button id="Basket" onClick={(e) => handleClick(e, data.id)}>{"Crear cesta"}</button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div >
    )
}
