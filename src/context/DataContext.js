import { createContext, useState, useEffect } from "react";
import { URL_GET_SALES, URL_GET_COMISSIONS } from "../Settings";

const DataContext = createContext();

const DataProvider = ({ children, userEmail, token }) => {
    const [comissionsUnits, setComissionsUnits] = useState([]);
    const [comissionsThisMonth, setComissionsThisMonth] = useState([]);
    const [comissionsThisYear, setComissionsThisYear] = useState([])
    const [comissionsAmount, setComissionsAmount] = useState([]);
    /*     const [ordersInfo, setOrdersInfo] = useState([]);*/
    const [offers, setOffers] = useState([]);
    const [pending, setPending] = useState([]);
    const [preparing, setPreparing] = useState([]);
    const [prepared, setPrepared] = useState([]);
    const [invoices, setInvoices] = useState([]);
    const [due, setDue] = useState([]);
    const [total, setTotal] = useState(0);
    const [userName, setUserName] = useState([])

    const today = new Date();
    const thisMonth = today.getMonth() + 1;
    const thisYear = today.getFullYear();

    function compareYear(d) {
        const givenDate = new Date(`${d}`);
        const givenYear = givenDate.getFullYear();
        if (thisYear == givenYear) {
            return true;
        };
    };

    function comissionsPerYear(data) {
        let comissions = 0
        let totalAmount = 0;
        data.map(element => {
            if (userEmail == element.agentEmail) {
                if (compareYear(element.isPaidDate)) {
                    comissions++;
                    totalAmount = totalAmount + element.comissionAmount
                }
            }
        });
        setComissionsThisYear([comissions, totalAmount]);
    };

    function comissionsPerMonth(data) {
        let paymentMonth = 0;
        let comissions = 0
        let totalAmount = 0;
        data.map(element => {

            if (element.isPaidDate != "") {
                const paymentDate = (new Date(element.isPaidDate));
                paymentMonth = paymentDate.getMonth() + 1;

            } if (paymentMonth == thisMonth) {
                comissions++;
                totalAmount = totalAmount + element.comissionAmount
            };

        });
        setComissionsThisMonth([comissions, totalAmount]);
    }

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

    useEffect((token) => {
        fetch(URL_GET_COMISSIONS)
            .then(response => response.json())
            .then(data => {
                comissionsPerMonth(data);
                comissionsPerYear(data)
                setComissionsUnits(data);
                let sum = 0;
                data.forEach(element => {
                    sum = sum + element.comissionAmount;
                    if (element.agentEmail == userEmail) {
                        setUserName([element.agentName, element.agentLastName]);
                    }
                });
                setComissionsAmount(sum);
            });

        fetch(URL_GET_SALES)
            .then(response => response.json())
            .then(orders => {

                let offers = [0, 0];
                let pendingOrders = [0, 0];
                let preparingOrders = [0, 0];
                let preparedOrders = [0, 0];
                let deliveredOrders = [0, 0];
                let dueOrders = [0, 0];
                let totalOrders = 0;

                orders.forEach(order => {
                    if (order.agentEmail == userEmail) {
                        /*  totalOrders[0]++; */
                        if (order.invoiceId) {
                            totalOrders += order.totalPrice;
                        }
                        if (daysLate(order.dueDate) != "") {
                            dueOrders[0]++;
                            dueOrders[1] += Math.floor(order.totalPrice * 0.7);
                        } if (order.isPreparing) {
                            preparingOrders[0]++;
                            preparingOrders[1] += order.totalPrice;
                        } else if (order.isPrepared) {
                            preparedOrders[0]++;
                            preparedOrders[1] += order.totalPrice;
                        } else if (order.isDelivered) {
                            deliveredOrders[0]++;
                            deliveredOrders[1] += order.totalPrice;
                        } else if (order.isPending) {
                            pendingOrders[0]++;
                            pendingOrders[1] += order.totalPrice
                        } else if (order.shippingDate == null) {
                            offers[0]++;
                            /* if (order.totalPrice != null) { */
                                offers[1] += order.totalPrice                           
                        };
                    };
                });
                setOffers(offers);
                setPending(pendingOrders);
                setPreparing(preparingOrders);
                setPrepared(preparedOrders);
                setInvoices(deliveredOrders);
                setDue(dueOrders);
                setTotal(totalOrders);

            })
    }, []);

    const data = {
        comissionsUnits, comissionsThisMonth, comissionsThisYear,
        comissionsAmount, /* ordersInfo, payments, */ daysLate, offers,
        pending, preparing, prepared, invoices, due, total, userName, userEmail
    };

    return <DataContext.Provider value={data}>{children}</DataContext.Provider>
};
export { DataProvider };

export default DataContext; 
