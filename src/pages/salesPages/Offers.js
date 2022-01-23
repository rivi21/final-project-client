import { useState, useEffect } from "react";
import { URL_DUMMY } from "../../Settings";
import SalesForm from "../../components/forms/SalesForm";
import "../FormPages.css";

export default function Offers() {

    const [offersList, setOffersList] = useState([]);

    useEffect(() => {
        fetch(URL_DUMMY)
            .then(response => response.json()
                .then(json => setOffersList(json)))
    }, []);

    let dummyDay = new Date();

    function dummyDate() {
        return `${dummyDay.getDate()} - ${dummyDay.getMonth() + 1} - ${dummyDay.getFullYear()}`;
    };
    function dummyDeliveryDate() {
        dummyDay.setDate(dummyDay.getDate() + 31);
        return `${dummyDay.getDate()} - ${dummyDay.getMonth() + 2} - ${dummyDay.getFullYear()}`;
    }

    let randomPrice = () => Math.floor(Math.random() * 10000);

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
                            <th>Número</th>
                            <th>iD_Cliente</th>
                            <th>Nombre</th>
                            <th>Fecha</th>
                            <th>Fecha Entrega</th>
                            <th>Término de pago</th>
                            <th>Forma de pago</th>
                            <th>Importe</th>
                            <th>PDF</th>
                        </tr>
                    </thead>
                    <tbody>
                        {offersList.map((data) => {
                            return (
                                <tr key={data.id}>
                                    <td>{data.address.zipcode}</td>
                                    <td>{data.id}</td>
                                    <td>{data.company.name}</td>
                                    <td>{dummyDate()}</td>
                                    <td>{dummyDeliveryDate()}</td>
                                    <td><p>30% Deposit</p>
                                        <p>70% Before Loading</p>
                                    </td>
                                    <td>Payment in advance</td>
                                    <td>{randomPrice()}</td>
                                    <button>PDF</button>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
