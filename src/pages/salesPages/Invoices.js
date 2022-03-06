import { useState, useEffect/* , useContext */ } from "react";
import { URL_GET_INVOICES } from "../../Settings";
import SalesForm from "../../components/forms/SalesForm";
/* import DataContext from '../../context/DataContext'; */
import "../FormPages.css";
import jsPDF from "jspdf";
import "jspdf-autotable";
/* import TotalBalance from "../balancePages/TotalBalance"; */

export default function Invoices() {

    const [invoicesList, setInvoicesList] = useState([]);
    /* const [productsList, setProductsList] = useState([]); */

    useEffect(() => {
        fetch(URL_GET_INVOICES)
            .then(response => response.json())
            .then(data => setInvoicesList(data))
        /* {
            let validData = [];
            data.map(element => {
                if (element.isPaidDate !== "") {
                    validData.push(element);
                }
            })
            setInvoicesList(validData);
        })*/
    }, []);
    
    const GeneratePDF = orderId => {

        fetch(`http://localhost/final_project_server/public/index.php/api/order_items/${orderId}`)
            .then(response => response.json())
            .then(data => {console.log(data);
                const doc = new jsPDF();
                // define the columns we want and their titles
                const generalData = ["Invoice Date", "Invoice Nº", "Forwarder", "Agent"]
                const productsData = ["Code", "Model", "Quantity", "Unit Price", "Amount"]
                const finalCost = ["Discounts", "VAT+EC Base", "VAT%", "VAT Amount", "EC%", "EC Amount", "Total(EUR)"];
                // define empty arrays of rows
                const generalDataRow = [];
                const productDataRow = [];
                const finalCostRow = [];
                // for each invoice pass all its data into an array
                const generalDataValues = [data[0].deliveryDate, data[0].invoiceId, "Rippa Transport", data[0].agent];      
                data.forEach(element => {
                    const productDataValues = [element.productId, element.model, element.quantity, `${element.price} €`, `${element.amount} €`];
                    productDataRow.push(productDataValues)
                })
                const finalCostValues = ["", `${data[0].totalPrice} €`, "", "", "", "", `${data[0].totalPrice} €`];
                // push each invoice's info into a row
                generalDataRow.push(generalDataValues);
                finalCostRow.push(finalCostValues);
                // startY is basically margin-top
                doc.autoTable(generalData, generalDataRow, { startY: 60 });
                doc.autoTable(productsData, productDataRow, { startY: 90 });
                doc.autoTable(finalCost, finalCostRow, { startY: 250 });
                const date = Date().split(" ");
                // we use a date string to generate our filename.
                const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
                // document title. and margin-top + margin-left
                doc.setFontSize(30).text("Invoice", 85, 15);
                doc.setFontSize(15).text("Customer", 14, 25);
                doc.setFontSize(10).text(`${data[0].customerName}`, 40, 25);
                /* doc.text(["Invoice Date: ", "Invoice Nº: ", "Forwarder: ", "Agent: "], 30, 35)
                doc.text([invoice.deliveryDate, String(invoice.invoiceId), "Rippa Transport", invoice.agent], 10, 35) */
                // we define the name of our PDF file.
                doc.save(`report_${dateStr}.pdf`);
            })
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
                            <th>Número de factura</th>
                            <th>iD_Cliente</th>
                            <th>Nombre</th>
                            <th>Fecha</th>
                            <th>Importe</th>
                            <th>PDF</th>
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
                                    <td><button onClick={() => GeneratePDF(invoice.orderId)}>PDF</button></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
