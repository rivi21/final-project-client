import { useState, useEffect, useContext } from "react";
import LanguageContext from "../../context/LanguageContext";
import { URL_GET_COMISSIONS } from "../../Settings";
import ComissionsForm from "../../components/forms/ComissionsForm";
import "../FormPages.css";

export default function CurrentMonth() {

    const { texts } = useContext(LanguageContext);

    const [comissions, setComissions] = useState([])

    useEffect(() => {
        fetch(URL_GET_COMISSIONS)
            .then(response => response.json())
            .then(data => setComissions(data))
    }, [])

    return (
        <div className="container-page">
            <div className="page-title">
                <h2>{texts.comissions[2]}</h2>
            </div>
            <ComissionsForm />
            <div className="page-table">
                <table className="table">
                    <thead>
                        <tr>
                            <th>{/* texts.table[0] */}Nº de Factura</th>
                            <th>{/* texts.table[1] */}fecha de pago</th>
                            <th>{/* {texts.table[2]} */}Base imponible Comisión</th>
                            <th>{/* {texts.table[2]} */}Importe Comisión</th>
                        </tr>
                    </thead>
                    <tbody>
                        {comissions.map((data) => {
                            return (
                                <tr key={data.invoiceId}>
                                    <td>{data.invoiceId}</td>
                                    <td>{data.isPaidDate}</td>
                                    <td>{data.totalPrice}</td>
                                    <td>{data.comissionAmount}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
