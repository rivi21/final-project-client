import { useState, useEffect, useContext } from "react";
import LanguageContext from "../../context/LanguageContext";
/* import DataContext from "../../context/DataContext"; */
import { URL_GET_COMISSIONS } from "../../Settings";
import ComissionsForm from "../../components/forms/ComissionsForm";
import "../FormPages.css";

export default function CurrentMonth() {

    const { texts } = useContext(LanguageContext);
    /* const { invoices } = useContext(DataContext); */

    const [comissions, setComissions] = useState([])

    useEffect(() => {
        fetch(URL_GET_COMISSIONS)
            .then(response => response.json())
            .then(data => setComissions(data))
}, [])

const today = new Date();
const thisMonth = today.getMonth()
/*     console.log(thisMonth);
    console.log(thisMonth2); */
/*  let paymentDates = [];
 comissions.map(element => {
     if (element.isPaidDate !== "") {
         const paymentDate = (new Date(element.isPaidDate));
         const paymentMonth = paymentDate.getMonth();
         paymentDates.push(paymentMonth);

     }
     console.log(paymentDates);
 }); */

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
                        let paymentMonth = 0;
                        if (data.isPaidDate !== "") {
                            const paymentDate = (new Date(data.isPaidDate));
                            paymentMonth = paymentDate.getMonth();

                        } if (paymentMonth === thisMonth) {
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
