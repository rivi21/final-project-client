import { useState, useEffect } from "react";
import { URL_DUMMY } from "../../Settings";
import BalanceForm from "../../components/forms/BalanceForm";
import "../FormPages.css";

export default function DueBalance() {

    const [dueBalance, setDueBalance] = useState([]);

    useEffect(() => {
        fetch(URL_DUMMY)
            .then(response => response.json())
            .then(json => setDueBalance(json))
    }, []);

    let dummyDay = new Date();

    function dummyDate() {
        return `${dummyDay.getDate()} - ${dummyDay.getMonth() + 1} - ${dummyDay.getFullYear()}`;
    };

    let randomPrice = () => Math.floor(Math.random() * 10000);

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
                        {dueBalance.map((data) => {
                            return (
                                <tr key={data.id}>
                                    <td>{data.id}</td>
                                    <td>{data.company.name}</td>
                                    <td>{dummyDate()}</td>
                                    <td>--calcular--</td>
                                    <td>{randomPrice()}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
