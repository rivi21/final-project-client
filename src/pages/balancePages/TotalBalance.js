import { useState, useEffect, useContext } from "react";
import { URL_GET_SALES } from "../../Settings";
import LanguageContext from "../../context/LanguageContext";
import DataContext from "../../context/DataContext";
import BalanceForm from "../../components/forms/BalanceForm";
import "../FormPages.css";

export default function TotalBalance() {
    const { texts } = useContext(LanguageContext);
    const { daysLate } = useContext(DataContext);
    const [totalBalance, setTotalBalance] = useState([]);

    useEffect(() => {
        fetch(URL_GET_SALES)
            .then(response => response.json())
            .then(json => setTotalBalance(json))
    }, []);

    return (
        <div className="container-page">
            <div className="page-title">
                <h2>{texts.balance[0]}</h2>
            </div>
            <BalanceForm />
            <div className="page-table">
                <table className="table">
                    <thead>
                        <tr>
                            <th>{texts.table[3]}</th>
                            <th>{texts.table[1]}</th>
                            <th>{texts.table[16]}</th>
                            <th>{texts.table[14]}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {totalBalance.map((data) => {
                            return (
                                <tr key={data.orderId}>
                                    <td>{data.invoiceId}</td>
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
