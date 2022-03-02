import { createContext, useState, useEffect } from "react";
import { URL_GET_COMISSIONS, URL_GET_CUSTOMERS_ORDERS_INVOICES } from "../Settings";

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
    const [comissionsAmount, setComissionsAmount] = useState([]);
    const [ordersInfo, setOrdersInfo] = useState([]);
    const [payments, setPayments] = useState([]);

    useEffect(() => {
        fetch(URL_GET_COMISSIONS)
            .then(response => response.json())
            .then(data => {
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

    const data = {
        comissionsUnits, comissionsAmount, ordersInfo, payments,
        daysLate
    };
    return <DataContext.Provider value={data}>{children}</DataContext.Provider>
};
export { DataProvider };

export default DataContext; 
