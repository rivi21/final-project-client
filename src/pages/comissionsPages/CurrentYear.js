import { useState, useEffect, useContext } from "react";
import LanguageContext from "../../context/LanguageContext";
/* import DataContext from "../../context/DataContext"; */
import { URL_GET_COMISSIONS } from "../../Settings";
import ComissionsForm from "../../components/forms/ComissionsForm";
import "../FormPages.css";

export default function CurrentMonth() {

    const { texts } = useContext(LanguageContext);
    /* const { ordersInfo, payments, invoices } = useContext(DataContext); */

    const [comissions, setComissions] = useState([])

    useEffect(() => {
        fetch(URL_GET_COMISSIONS)
            .then(response => response.json())
            .then(data => setComissions(data))
    }, [])

    function compareYear(d) {
        const today = new Date();
        const thisYear = today.getFullYear();
        const givenDate = new Date(`${d}`);
        const givenYear = givenDate.getFullYear();
        if (thisYear === givenYear) {
            return true;
        };
    };

    return (
        <div className="container-page">
            <div className="page-title">
                <h2>{texts.comissions[1]}</h2>
            </div>
            <ComissionsForm />
            <div className="page-table">
                <table className="table">
                    <thead>
                        <tr>
                        <th>{texts.table[3]}</th>
                        <th>{texts.table[4]}</th>
                        <th>{texts.table[1]}</th>
                        <th>{texts.table[5]}</th>
                        <th>{texts.table[6]}</th>
                        <th>{texts.table[7]}</th>
                        <th>{texts.table[8]}</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {comissions.map(data => {
                            if (compareYear(data.isPaidDate) === true /* && (data.isPaid) */) {
                                return (
                                    <tr key={data.invoiceId}>
                                        <td>{data.invoiceId}</td>
                                        <td>{data.customerId}</td>
                                        <td>{data.customerName}</td>
                                        <td>{data.isPaidDate}</td>
                                        <td>{data.totalPrice} €</td>
                                        <td>{data.salesComission}</td>
                                        <td>{data.comissionAmount} €</td>
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
