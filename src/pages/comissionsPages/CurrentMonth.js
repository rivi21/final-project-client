/* import { useState, useEffect } from "react"; */
import { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";
import DataContext from "../../context/DataContext";
/* import { URL_GET_COMISSIONS } from "../../Settings"; */
import ComissionsForm from "../../components/forms/ComissionsForm";
import "../FormPages.css";

export default function CurrentMonth() {

    const { texts } = useContext(LanguageContext);
    const { ordersInfo } = useContext(DataContext);

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
                            <th>{/* {texts.table[2]} */}Base imponible Comisión</th>
                            <th>{/* {texts.table[2]} */}Porcentaje Comisión</th>
                            <th>{/* {texts.table[2]} */}Importe Comisión</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {ordersInfo.map((data) => {
                            return (
                                <tr key={data.orderId}>
                                    <td>{data.invoiceNumber}</td>
                                    <td>{data.totalPrice}</td>
                                    <td>{data.salesComission}</td>
                                    <td>{data.comissionAmount}</td>
                                    <td><button>PDF</button></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

        </div>
    )
}
