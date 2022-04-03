import { useState, useContext } from "react";
import { useFetch } from "../../hooks/useFetch";
import { URL_GET_OFFERS, URL_ORDER } from "../../Settings";
import SalesForm from "../../components/forms/SalesForm";
import LanguageContext from "../../context/LanguageContext";
import DataContext from "../../context/DataContext";
import "../FormPages.css";


export default function Offers() {

    const { texts } = useContext(LanguageContext);
    const { userEmail } = useContext(DataContext);

    const [offersList, setOffersList] = useState([]);

    function setDataAgent(data) {
        let agentData = [];
        data.forEach(element => {
            if (userEmail == element.agentEmail) {
                agentData.push(element);
            }
        });
        setOffersList(agentData);
    }
    useFetch(URL_GET_OFFERS, setDataAgent);

    const confirmOffer = (id)=> {
        fetch(`${URL_ORDER}/${id}`)
            .then(response => response.json())
            .then(data => setDataAgent(data))
    }
    /* let dummyDay = new Date(); */

    /*     function dummyDate() {
            return `${dummyDay.getDate()} - ${dummyDay.getMonth() + 1} - ${dummyDay.getFullYear()}`;
        };
        function dummyDeliveryDate() {
            dummyDay.setDate(dummyDay.getDate() + 31);
            return `${dummyDay.getDate()} - ${dummyDay.getMonth() + 2} - ${dummyDay.getFullYear()}`;
        }
    
        let randomPrice = () => Math.floor(Math.random() * 10000); */

    return (
        <div className="container-page">
            <div className="page-title">
                <h2>Ofertas</h2>
            </div>
            <SalesForm />
            <div className="page-table">
                <table className="table">
                    <thead>
                        <tr>
                            <th>{texts.table[9]}</th>
                            <th>{texts.table[4]}</th>
                            <th>{texts.table[1]}</th>
                            <th>Término de pago</th>
                            <th>Forma de pago</th>
                            <th>{texts.table[13]}</th>
                            <th>PDF</th>
                        </tr>
                    </thead>
                    <tbody>
                        {offersList.map((data) => {
                            if (data.shippingDate == null) {
                                return (
                                    <tr key={data.orderId}>
                                        <td>{data.orderId}</td>
                                        <td>{data.customerId}</td>
                                        <td>{data.customerName}</td>
                                        <td><p>30% Deposit</p>
                                            <p>70% Before Loading</p></td>
                                        <td>Payment in advance</td>
                                        <td>{data.totalPrice}</td>
                                        <td><button onClick = {()=>confirmOffer(data.orderId)}>Confirm</button></td>
                                    </tr>
                                );
                            }
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
