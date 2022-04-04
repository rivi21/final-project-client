import jsPDF from "jspdf";
import "jspdf-autotable";
import { useCredentials } from "./useCredentials";

function usePDF() {

    const { token } = useCredentials();

    const generatePDF = orderId => {
        
        fetch(`http://localhost/final_project_server/public/index.php/api/order_items/${orderId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        })
            .then(response => response.json())
            .then(data => {
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
                /* doc.text(["Invoice Date: ", "Invoice Nº: ", "Forwarder: ", "Agent: "], 30, 35)*/
                /*doc.text([invoice.deliveryDate, String(invoice.invoiceId), "Rippa Transport", invoice.agent], 10, 35) */
                // we define the name of our PDF file.
                doc.save(`report_${dateStr}.pdf`);
            })
    };
    return  { generatePDF }
}

export { usePDF };