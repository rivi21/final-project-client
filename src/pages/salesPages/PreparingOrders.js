import { useState, useEffect } from "react";
import { URL_DUMMY } from "../../Settings";
import SalesForm from "../../components/forms/SalesForm";
import "../FormPages.css";

export default function PreparingOrders() {

    const [preparingList, setPreparingList] = useState([]);

    useEffect(() => {
        fetch(URL_DUMMY)
            .then(response => response.json()
                .then(json => setPreparingList(json)))
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
                <h2>Pedidos en preparación</h2>
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
                            <th>Condiciones de envío</th>
                            <th>Importe</th>
                            <th>Importe pendiente</th>
                            <th>PDF</th>
                        </tr>
                    </thead>
                    <tbody>
                        {preparingList.map((data) => {
                            return (
                                <tr key={data.id}>
                                    <td>{data.address.zipcode}</td>
                                    <td>{data.id}</td>
                                    <td>{data.company.name}</td>
                                    <td>{dummyDate()}</td>
                                    <td>{dummyDeliveryDate()}</td>
                                    <td>FCA</td>
                                    <td>{randomPrice()}</td>
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
