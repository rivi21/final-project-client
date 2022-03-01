import { createContext, useState, useEffect } from "react";
import { URL_DUMMY, URL_GET_INVOICES, URL_GET_PRODUCTS, } from "../Settings";

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
    const [comissionsUnits, setComissionsUnits] = useState([])
    const [comissionsAmount, setComissionsAmount] = useState([])
    useEffect(() => {
        fetch(URL_GET_INVOICES)
            .then(response => response.json())
            .then(data => {
                setComissionsUnits(data);
                let sum = 0;
                data.forEach(element => {
                    console.log(element.comissionAmount);
                    sum = sum + element.comissionAmount
                });
                setComissionsAmount(sum);
            });
    }, []);
    console.log(comissionsUnits);
    
    const data = { comissionsUnits, comissionsAmount };
        return <DataContext.Provider value={data}>{children}</DataContext.Provider>
};
export { DataProvider };

export default DataContext; 
