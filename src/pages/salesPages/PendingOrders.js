import { useState, useEffect, useContext } from "react";
import { URL_DUMMY } from "../../Settings";
import DataContext from "../../context/DataContext";
import SalesForm from "../../components/forms/SalesForm";
import "../FormPages.css";

export default function PendingOrders() {

    const { ordersInfo } = useContext(DataContext);
    /* const [pendingOrders, setPendingOrders] = useState([]) */
    
    /* useEffect(() => {
        fetch(URL_DUMMY)
            .then(response => response.json()
                .then(json => setPendingOrders(json)))
    }, []); */

    /* let dummyDay = new Date();

    function dummyDate() {
        return `${dummyDay.getDate()} - ${dummyDay.getMonth() + 1} - ${dummyDay.getFullYear()}`;
    };
    function dummyDeliveryDate() {
        dummyDay.setDate(dummyDay.getDate() + 31);
        return `${dummyDay.getDate()} - ${dummyDay.getMonth() + 2} - ${dummyDay.getFullYear()}`;
    };

    let randomPrice = () => Math.floor(Math.random() * 10000); */

    return (
        <div className="container-page">
            <div className="page-title">
                <h2>Pedidos pendientes</h2>
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
                        {ordersInfo.map((data) => {
                            return (
                                <tr key={data.invoiceNumber}>
                                    <td>{data.orderId}</td>
                                    <td>{data.customerId}</td>
                                    <td>{data.customerName}</td>
                                    <td>{data.date}</td>
                                    <td>{data.deliveryDate}</td>
                                    <td>FCA</td>
                                    <td>{data.totalPrice}</td>
                                    <td>{Math.floor(data.totalPrice * 0.7)}</td>
                                    <td><button>PDF</button></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
