import { createContext, useState, useEffect } from "react";
import { URL_GET_CUSTOMERS_ORDERS_INVOICES, URL_GET_INVOICES_BY_CUSTOMERS } from "../Settings";

const DataContext = createContext();

/* async function getUrlData() {
    for (let i = 0; i < allURL.length; i++) {
        const response = await fetch(allURL[i]);
        const data = await response.json();
        allData.push(data);
    }
};
getUrlData() */

const DataProvider = ({ children }) => {
    const [comissionsUnits, setComissionsUnits] = useState([]);
    const [comissionsThisMonth, setComissionsThisMonth] = useState([]);
    const [comissionsThisYear, setComissionsThisYear] = useState([])
    const [comissionsAmount, setComissionsAmount] = useState([]);
    const [ordersInfo, setOrdersInfo] = useState([]);
    const [payments, setPayments] = useState([]);
    const [invoices, setInvoices] = useState([]);

    const today = new Date();
    const thisMonth = today.getMonth() + 1;
    const thisYear = today.getFullYear();

    function compareYear(d) {
        const givenDate = new Date(`${d}`);
        const givenYear = givenDate.getFullYear();
        if (thisYear === givenYear) {
            return true;
        };
    };

    function comissionsPerYear(data) {
        let comissionsThisYear = 0
        let totalAmount = 0;
        data.map(element => {
            if (compareYear(element.isPaidDate) === true && (element.isPaid)) {
                comissionsThisYear++;
                totalAmount = totalAmount + element.comissionAmount
            }
        });
        setComissionsThisYear([comissionsThisYear, totalAmount]);
    };

    function comissionsPerMonth(data) {
        let paymentMonth = 0;
        let comissionsThisMonth = 0
        let totalAmount = 0;
        data.map(element => {
            if (element.isPaidDate !== "") {
                const paymentDate = (new Date(element.isPaidDate));
                paymentMonth = paymentDate.getMonth() + 1;

            } if (paymentMonth === thisMonth) {
                comissionsThisMonth++;
                totalAmount = totalAmount + element.comissionAmount
            };
        });
        setComissionsThisMonth([comissionsThisMonth, totalAmount]);
    }

    useEffect(() => {
        fetch(URL_GET_INVOICES_BY_CUSTOMERS)
            .then(response => response.json())
            .then(data => {
                comissionsPerMonth(data);
                comissionsPerYear(data)
                setInvoices(data);
                setComissionsUnits(data);
                let sum = 0;
                data.forEach(element => {
                    sum = sum + element.comissionAmount
                });
                setComissionsAmount(sum);
            });

        fetch(URL_GET_CUSTOMERS_ORDERS_INVOICES)
            .then(response => response.json())
            .then(data => {
                setOrdersInfo(data)
                let sum = 0;
                data.forEach(element => {
                    sum = sum + element.totalPrice
                });
                setPayments(sum);
            })
    }, []);

    function daysLate(date) {
        const date1 = Date.now();
        const date2 = new Date(`${date}`).getTime();
        const day_as_milliseconds = 86400000;
        const diff_in_milliseconds = date1 - date2;
        if (diff_in_milliseconds > 0) {
            const diff_in_days = diff_in_milliseconds / day_as_milliseconds;
            return Math.floor(diff_in_days);
        } else {
            return "";
        }

    }

    const data = { comissionsUnits, comissionsThisMonth, comissionsThisYear, comissionsAmount, invoices, ordersInfo, payments, daysLate };

    return <DataContext.Provider value={data}>{children}</DataContext.Provider>
};
export { DataProvider };

export default DataContext; 
