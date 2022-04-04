import { useState, useContext } from "react";
import { useFetch } from "../../hooks/useFetch";
import { usePDF } from "../../hooks/usePDF";
import { URL_GET_INVOICES } from "../../Settings";
import SalesForm from "../../components/forms/SalesForm";
import LanguageContext from "../../context/LanguageContext";
import DataContext from '../../context/DataContext';
import "../FormPages.css";

export default function Invoices() {

    const { texts } = useContext(LanguageContext);
    const { userEmail } = useContext(DataContext);
    const { generatePDF } = usePDF()
    const [invoicesList, setInvoicesList] = useState([]);

    function setDataAgent(data) {
        let agentData = [];
        data.forEach(element => {
            if (userEmail === element.agentEmail) {
                agentData.push(element);
            }
        });
        setInvoicesList(agentData);
    }
    useFetch(URL_GET_INVOICES, setDataAgent);
    
    return (
        <div className="container-page">
            <div className="page-title">
                <h2>{texts.sales[3]}</h2>
            </div>
            <SalesForm />
            <div className="page-table">
                <table className="table">
                    <thead>
                        <tr>
                            <th>{texts.table[3]}</th>
                            <th>{texts.table[4]}</th>
                            <th>{texts.table[1]}</th>
                            <th>{texts.table[10]}</th>
                            <th>{texts.table[13]}</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {invoicesList.map((invoice) => {
                            return (
                                <tr key={invoice.orderId}>
                                    <td>{invoice.invoiceId}</td>
                                    <td>{invoice.customerId}</td>
                                    <td>{invoice.customerName}</td>
                                    <td>{invoice.deliveryDate}</td>
                                    <td>{invoice.totalPrice} €</td>
                                    <td><button onClick={() => generatePDF(invoice.orderId)}>PDF</button></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
