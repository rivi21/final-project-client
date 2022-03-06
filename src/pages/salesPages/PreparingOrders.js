import { useState, useEffect, /* useContext */ } from "react";
import { URL_GET_CUSTOMERS_ORDERS_INVOICES } from "../../Settings";
/* import DataContext from "../../context/DataContext"; */
import SalesForm from "../../components/forms/SalesForm";
import "../FormPages.css";

export default function PreparingOrders() {

    /* const { ordersInfo } = useContext(DataContext); */
    const [preparingList, setPreparingList] = useState([]);

    useEffect(() => {
        fetch(URL_GET_CUSTOMERS_ORDERS_INVOICES)
            .then(response => response.json()
                .then(json => setPreparingList(json)))
    }, []);

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
