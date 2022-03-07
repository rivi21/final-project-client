import { useState, useEffect, useContext } from "react";
import { URL_GET_SALES } from "../../Settings";
import LanguageContext from "../../context/LanguageContext";
/* import DataContext from "../../context/DataContext"; */
import SalesForm from "../../components/forms/SalesForm";
import "../FormPages.css";

export default function PreparingOrders() {

    const { texts } = useContext(LanguageContext);

    const [preparingList, setPreparingList] = useState([]);

    useEffect(() => {
        fetch(URL_GET_SALES)
            .then(response => response.json()
                .then(json => setPreparingList(json)))
    }, []);

    return (
        <div className="container-page">
            <div className="page-title">
                <h2>{texts.sales[1]}</h2>
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
                            {/* <th>PDF</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {preparingList.map((data) => {
                            if (data.isPreparing) {
                                return (
                                    <tr key={data.invoiceNumber}>
                                        <td>{data.orderId}</td>
                                        <td>{data.customerId}</td>
                                        <td>{data.customerName}</td>
                                        <td>{data.date}</td>
                                        <td>{data.deliveryDate}</td>
                                        <td>FCA</td>
                                        <td>{data.totalPrice}</td>
                                        <td>{Math.floor(data.totalPrice * 0.7)}</td>
                                        {/* <td><button>PDF</button></td> */}
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
