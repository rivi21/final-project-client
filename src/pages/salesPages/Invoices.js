import { useState, useEffect } from "react";
import { URL_DUMMY } from "../../Settings";
import SalesForm from "../../components/forms/SalesForm";
import "../FormPages.css";

export default function Invoices() {

    const [invoices, setInvoices] = useState([])

    useEffect(() => {
        fetch(URL_DUMMY)
            .then(response => response.json()
                .then(json => setInvoices(json)))
    }, [])

    let dummyDay = new Date();
    function dummyDate() {
        return `${dummyDay.getDate()} - ${dummyDay.getMonth() + 1} - ${dummyDay.getFullYear()}`;
    }
    let dummyPrice = new Number()
    function randomPrice() {
        return dummyPrice = Math.floor(Math.random() * 10000);
    }

    return (

        <div className="container-page">
            <div className="page-title">
                <h2>Facturas</h2>
            </div>
            <SalesForm />
            <div className="page-table">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Número</th>
                            <th>iD_Cliente</th>
                            <th>Nombre</th>
                            <th>Fecha</th>
                            <th>Importe</th>
                            <th>PDF</th>
                        </tr>
                    </thead>
                    <tbody>
                        {invoices.map((data) => {
                            return (
                                <tr key={data.id}>
                                    <td>{data.address.zipcode}</td>
                                    <td>{data.id}</td>
                                    <td>{data.company.name}</td>
                                    <td>{dummyDate()}</td>
                                    <td>{randomPrice()}</td>
                                    <button>PDF</button>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
