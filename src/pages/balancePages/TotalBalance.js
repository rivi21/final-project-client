import { useState, useEffect, useContext } from "react";
import { URL_GET_INVOICES_BY_CUSTOMER } from "../../Settings";
import LanguageContext from "../../context/LanguageContext";
import DataContext from "../../context/DataContext";
import BalanceForm from "../../components/forms/BalanceForm";
import "../FormPages.css";

export default function TotalBalance() {

    const { texts } = useContext(LanguageContext);
    const { userEmail } = useContext(DataContext);

    const [totalBalance, setTotalBalance] = useState([]);

    function setDataAgent(data) {
        let agentData = [];
        data.forEach(element => {
            if (userEmail == element.agentEmail) {
                agentData.push(element);
            }
        });
        setTotalBalance(agentData);
    }

    useEffect(() => {
        fetch(URL_GET_INVOICES_BY_CUSTOMER)
            .then(response => response.json())
            .then(data => setDataAgent(data))
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
                            <th>{texts.table[4]}</th>
                            <th>{texts.table[1]}</th>
                            <th>{texts.table[13]}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {totalBalance.map((data) => {
                            return (
                                <tr key={data.customerId}>
                                    <td>{data.customerId}</td>
                                    <td>{data.customerName}</td>
                                    <td>{data.totalAmount} €</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
