import { useState, useContext } from "react";
import { useFetch } from "../../hooks/useFetch";
import { URL_GET_SALES } from "../../Settings";
import LanguageContext from "../../context/LanguageContext";
import DataContext from "../../context/DataContext";
import BalanceForm from "../../components/forms/BalanceForm";
import "../FormPages.css";


export default function DueBalance() {

    const { texts } = useContext(LanguageContext);
    const { daysLate, userEmail } = useContext(DataContext);

    const [dueBalance, setDueBalance] = useState([]);

    function setDataAgent(data) {
        let agentData = [];
        data.forEach(element => {
            if (userEmail == element.agentEmail) {
                agentData.push(element);
            }
        });
        setDueBalance(agentData);
    }
    useFetch(URL_GET_SALES, setDataAgent);

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
                            if (daysLate(data.dueDate) != "") {
                                return (
                                    <tr key={data.orderId}>
                                        <td>{data.invoiceId}</td>
                                        <td>{data.customerName}</td>
                                        <td>{data.dueDate}</td>
                                        <td id="dayslate-column">{daysLate(data.dueDate)}</td>
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
