import { useState, useEffect, useContext } from "react";
import { URL_GET_SALES } from "../../Settings";
import LanguageContext from "../../context/LanguageContext";
import DataContext from "../../context/DataContext";
import BalanceForm from "../../components/forms/BalanceForm";
import "../FormPages.css";

export default function DueBalance() {
    const { texts } = useContext(LanguageContext);
    const { daysLate } = useContext(DataContext);
    const [dueBalance, setDueBalance] = useState([]);

    useEffect(() => {
        fetch(URL_GET_SALES)
            .then(response => response.json())
            .then(data => setDueBalance(data))
    }, []);

    return (
        <div className="container-page">
            <div className="page-title">
                <h2>{texts.balance[1]}</h2>
            </div>
            <BalanceForm />
            <div className="page-table">
                <table className="table">
                    <thead>
                        <tr>
                            <th>{texts.table[3]}</th>
                            <th>{texts.table[1]}</th>
                            <th>{texts.table[16]}</th>
                            <th>{texts.table[17]}</th>
                            <th>{texts.table[14]}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dueBalance.map((data) => {
                            if (daysLate(data.dueDate) > 0) {
                                return (
                                    <tr key={data.orderId}>
                                        <td>{data.invoiceId}</td>
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
