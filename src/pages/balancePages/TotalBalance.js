import { useState, useEffect, useContext } from "react";
import { URL_DUMMY } from "../../Settings";
import DataContext from "../../context/DataContext";
import BalanceForm from "../../components/forms/BalanceForm";
import "../FormPages.css";

export default function TotalBalance() {
    const { ordersInfo, daysLate } = useContext(DataContext);
    /*     const [totalBalance, setTotalBalance] = useState([]);
    
        useEffect(() => {
            fetch(URL_DUMMY)
                .then(response => response.json()
                    .then(json => setTotalBalance(json)))
        }, []);
    
        let dummyDay = new Date();
    
        function dummyDate() {
            return `${dummyDay.getDate()} - ${dummyDay.getMonth() + 1} - ${dummyDay.getFullYear()}`;
        };
    
        let randomPrice = () => Math.floor(Math.random() * 10000); */
    return (
        <div className="container-page">
            <div className="page-title">
                <h2>Saldo Acumulado</h2>
            </div>
            <BalanceForm />
            <div className="page-table">
                <table className="table">
                    <thead>
                        <tr>
                            <th>iD_Cliente</th>
                            <th>Nombre</th>
                            <th>Vencimiento</th>
                            <th>Importe</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ordersInfo.map((data) => {
                            return (
                                <tr key={data.orderId}>
                                    <td>{data.customerId}</td>
                                    <td>{data.customerName}</td>
                                    <td>{data.dueDate}</td>
                                    <td>{data.totalPrice}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
