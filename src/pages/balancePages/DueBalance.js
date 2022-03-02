import { useState, useEffect, useContext } from "react";
import { URL_GET_DUEBALANCES } from "../../Settings";
import DataContext from "../../context/DataContext";
import BalanceForm from "../../components/forms/BalanceForm";
import "../FormPages.css";

export default function DueBalance() {

    const { ordersInfo, daysLate } = useContext(DataContext);
    /*     const [dueBalance, setDueBalance] = useState([]);
    
        useEffect(() => {
            fetch( URL_GET_DUEBALANCES)
                .then(response => response.json())
                .then(json => setDueBalance(json))
        }, []);
    
        let dummyDay = new Date();
    
        function dummyDate() {
            return `${dummyDay.getDate()} - ${dummyDay.getMonth() + 1} - ${dummyDay.getFullYear()}`;
        };
    
        let randomPrice = () => Math.floor(Math.random() * 10000); */

    return (
        <div className="container-page">
            <div className="page-title">
                <h2>Saldo Vencido</h2>
            </div>
            <BalanceForm />
            <div className="page-table">
                <table className="table">
                    <thead>
                        <tr>
                            <th>iD_Cliente</th>
                            <th>Nombre</th>
                            <th>Vencimiento</th>
                            <th>Días de retraso</th>
                            <th>Importe pendiente</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ordersInfo.map((data) => {
                            if (daysLate(data.dueDate) > 0) {
                                return (
                                    <tr key={data.orderId}>
                                        <td>{data.customerId}</td>
                                        <td>{data.customerName}</td>
                                        <td>{data.dueDate}</td>
                                        <td>{daysLate(data.dueDate)}</td>
                                        <td>{Math.floor(data.totalPrice * 0.7)}</td>
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
