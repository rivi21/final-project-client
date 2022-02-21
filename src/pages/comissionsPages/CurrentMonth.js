import { useState, useEffect } from "react";
import { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";
import { URL_GET_COMISSIONS } from "../../Settings";
import ComissionsForm from "../../components/forms/ComissionsForm";
import "../FormPages.css";

export default function CurrentMonth() {

    const { texts } = useContext(LanguageContext);

    const [comissions, setComissions] = useState([])

    useEffect(() => {
        fetch(URL_GET_COMISSIONS)
            .then(response => response.json()
                .then(data => setComissions(data)))
    }, [])

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
                            <th>{/* {texts.table[0]} */}Nº de Factura</th>
                            {/* <th>{{texts.table[1]}}Nº de cliente</th>
                            <th>{{texts.table[2]}}Nombre Cliente</th> */}
                            <th>{/* {texts.table[2]} */}Base imponible Comisión</th>
                            <th>{/* {texts.table[2]} */}Porcentaje Comisión</th>
                            <th>{/* {texts.table[2]} */}Importe Comisión</th>
                        </tr>
                    </thead>
                    <tbody>
                        {comissions.map((data) => {
                            return (
                                <tr key={data.id}>
                                    <td>{data.id}</td>
 {/*                                    <td>{data.name}</td>
                                    <td>{data.email}</td> */}
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
