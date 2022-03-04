import { useState, useEffect } from "react";
import { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";
/* import DataContext from "../../context/DataContext"; */
import { URL_GET_INVOICES_BY_CUSTOMERS } from "../../Settings";
import ComissionsForm from "../../components/forms/ComissionsForm";
import "../FormPages.css";

export default function CurrentMonth() {

    const { texts } = useContext(LanguageContext);
    /* const { invoices } = useContext(DataContext); */

     const [comissions, setComissions] = useState([])

    useEffect(() => {
        fetch(URL_GET_INVOICES_BY_CUSTOMERS)
            .then(response => response.json()
                .then(data => setComissions(data)))
    }, [])

    const today = new Date();
    const thisMonth = String(today.getMonth());
    const thisMonth2 = today.getMonth()
    return (
        <div className="container-page">
            <div className="page-title">
                <h2>{texts.comissions[0]}</h2>
            </div>
            <ComissionsForm />
            <div className="page-table">
                <table /* className="table" */>
                    <thead>
                        <tr>
                            <th>{/* {texts.table[0]} */}Nº de Factura</th>
                            <th>Nº de Cliente</th>
                            <th>Nombre  de Cliente</th>
                            <th>fecha de pago</th>
                            <th>{/* {texts.table[2]} */}Base imponible Comisión</th>
                            <th>{/* {texts.table[2]} */}Porcentaje Comisión</th>
                            <th>{/* {texts.table[2]} */}Importe Comisión</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {comissions.map(data => {
                            const date = new Date(data.orderDate);
                            const dataDate = String(date.getMonth());
                            console.log(dataDate);
                            if (data.isPaid /* && dataDate == thisMonth */) {
                                return (
                                    <tr key={data.invoiceId}>
                                        <td>{data.invoiceId}</td>
                                        <td>{data.customerId}</td>
                                        <td>{data.customerName}</td>
                                        <td>{data.isPaidDate}</td>
                                        <td>{data.totalPrice} €</td>
                                        <td>{data.salesComission}</td>
                                        <td>{data.comissionAmount} €</td>
                                        <td><button>PDF</button></td>
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
