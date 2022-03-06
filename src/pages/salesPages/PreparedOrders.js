import { useState, useEffect /* useContext */ } from "react";
import { URL_GET_SALES } from "../../Settings";
/* import DataContext from "../../context/DataContext"; */
import SalesForm from "../../components/forms/SalesForm";
import "../FormPages.css";

export default function PreparedOrders() {
    /* const { ordersInfo, daysLate } = useContext(DataContext); */
    const [preparedOrders, setPreparedOrders] = useState([])

    useEffect(() => {
        fetch(URL_GET_SALES)
            .then(response => response.json())
            .then(json => setPreparedOrders(json))
    }, [])

    function daysLate(date) {
        const date1 = Date.now();
        const date2 = new Date(`${date}`).getTime();
        const day_as_milliseconds = 86400000;
        const diff_in_milliseconds = date1 - date2;
        if (diff_in_milliseconds > 0) {
            const diff_in_days = diff_in_milliseconds / day_as_milliseconds;
            return Math.floor(diff_in_days);
        } else {
            return "";
        }

    }

    return (
        <div className="container-page">
            <div className="page-title">
                <h2>Pedidos preparados</h2>
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
                            <th>Dias preparado</th>
                            <th>Importe</th>
                            <th>Importe pendiente</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {preparedOrders.map((data) => {
                            if (data.isPrepared) {
                                return (
                                    <tr key={data.invoiceNumber}>
                                        <td>{data.orderId}</td>
                                        <td>{data.customerId}</td>
                                        <td>{data.customerName}</td>
                                        <td>{data.date}</td>
                                        <td>{data.deliveryDate}</td>
                                        <td>EXW</td>
                                        <td id="dayslate-column">{daysLate(data.dueDate)}</td>
                                        <td>{data.totalPrice}</td>
                                        <td>{Math.floor(data.totalPrice * 0.7)}</td>
                                        <td><button>PDF</button></td>
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


