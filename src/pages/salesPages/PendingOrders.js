import { useState, useContext } from "react";
import { useFetch } from "../../hooks/useFetch";
import { URL_GET_SALES } from "../../Settings";
import LanguageContext from "../../context/LanguageContext";
import DataContext from "../../context/DataContext";
import SalesForm from "../../components/forms/SalesForm";
import "../FormPages.css";

export default function PendingOrders() {

    const { texts } = useContext(LanguageContext);
    const { userEmail } = useContext(DataContext);

    const [pendingOrders, setPendingOrders] = useState([])

    function setDataAgent(data) {
        let agentData = [];
        data.forEach(element => {
            if (userEmail == element.agentEmail) {
                agentData.push(element);
            }
        });
        setPendingOrders(agentData);
    }
    useFetch(URL_GET_SALES, setDataAgent);

    return (
        <div className="container-page">
            <div className="page-title">
                <h2>{texts.sales[0]}</h2>
            </div>
            <SalesForm />
            <div className="page-table">
                <table className="table">
                    <thead>
                        <tr>
                            <th>{texts.table[9]}</th>
                            <th>{texts.table[4]}</th>
                            <th>{texts.table[1]}</th>
                            <th>{texts.table[10]}</th>
                            <th>{texts.table[11]}</th>
                            <th>{texts.table[12]}</th>
                            <th>{texts.table[13]}</th>
                            <th>{texts.table[14]}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pendingOrders.map((data) => {
                            if ((!data.isPreparing) && (!data.isPrepared)) {
                                return (
                                    <tr key={data.orderId}>
                                        <td>{data.orderId}</td>
                                        <td>{data.customerId}</td>
                                        <td>{data.customerName}</td>
                                        <td>{data.date}</td>
                                        <td>{data.deliveryDate}</td>
                                        <td>FCA</td>
                                        <td>{data.totalPrice}</td>
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
