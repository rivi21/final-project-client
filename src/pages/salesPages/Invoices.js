import { useState, useEffect } from "react";
import { URL_DUMMY } from "../../Settings";
import SalesForm from "../../components/forms/SalesForm";
import "../FormPages.css";

import jsPDF from "jspdf";
import "jspdf-autotable";
/* import TotalBalance from "../balancePages/TotalBalance"; */
// Date Fns is used to format the dates we receive
// from our API call
/* import { format } from "date-fns"; */

export default function Invoices() {

    const [invoices, setInvoices] = useState([])
    console.log(invoices)
    useEffect(() => {
        fetch(URL_DUMMY)
            .then(response => response.json()
                .then(json => setInvoices(json)))
    }, [])

    let dummyDay = new Date();
    function dummyDate() {
        return `${dummyDay.getDate()} - ${dummyDay.getMonth() + 1} - ${dummyDay.getFullYear()}`;
    };

    let randomPrice = () => Math.floor(Math.random() * 10000);

    const generatePDF = invoice => {
        // initialize jsPDF
        const doc = new jsPDF();
        // define the columns we want and their titles
        const tableColumn = ["Discounts", "VAT+EC Base", "VAT%", "VAT Amount", "EC%", "EC Amount", "Total(EUR)"];
        // define an empty array of rows
        const tableRows = [];
        // for each ticket pass all its data into an array
        const invoiceData = [
            invoice.address.zipcode,
            invoice.id,
            invoice.name,
        ];
        // push each tickcet's info into a row
        tableRows.push(invoiceData);
        // startY is basically margin-top
        doc.autoTable(tableColumn, tableRows, { startY: 20 });
        const date = Date().split(" ");
        // we use a date string to generate our filename.
        const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
        // document title. and margin-top + margin-left
        doc.text("Invoice", 14, 15);
        // we define the name of our PDF file.
        doc.save(`report_${dateStr}.pdf`);
    };


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
                        {invoices.map((invoice) => {
                            return (
                                <tr key={invoice.id}>
                                    <td>{invoice.address.zipcode}</td>
                                    <td>{invoice.id}</td>
                                    <td>{invoice.name}</td>
                                    <td>{dummyDate()}</td>
                                    <td>{randomPrice()}</td>
                                    <td><button onClick={() => generatePDF(invoice)}>PDF</button></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
