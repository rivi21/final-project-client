import { useState, useEffect, useContext } from "react";
import { URL_GET_CUSTOMERS } from "../../Settings";
import LanguageContext from "../../context/LanguageContext";
import DataContext from "../../context/DataContext";
import { useNavigate } from "react-router-dom";
import CustomersForm from "../../components/forms/CustomersForm";
import "./Customers.css";
import "../FormPages.css";

export default function Customers() {
    const { texts } = useContext(LanguageContext);
    const { userEmail } = useContext(DataContext);
    const [customers, setCustomers] = useState([]);

    let navigate = useNavigate();
    const handleClick = (e) => navigate(`/${e.target.id}`);

    function setDataAgent(data) {
        let agentData = [];
        data.forEach(element => {
            if (userEmail == element.agentEmail) {
                agentData.push(element);
            }
        });
        setCustomers(agentData);
    }

    useEffect(() => {
        fetch(URL_GET_CUSTOMERS)
            .then(response => response.json())
            .then(data => {
                if (data) {
                    
                    setDataAgent(data);
                } else {
                    throw alert('No se ha podido hacer la petición')
                }
            });
    }, []);

    return (
        <div className="container-page">
            <div className="page-title">
                <h2>{texts.customers[0]}</h2>
            </div>
            <CustomersForm />
            <div className="page-table">
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>{texts.table[1]}</th>
                            <th>{texts.customers[2]}</th>
                            <th>{texts.customers[3]}</th>
                            <th>{texts.customers[4]}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((data) => {
                            return (
                                <tr key={data.id}>
                                    <td><div className="icon-cell"></div></td>
                                    <td>
                                        <p>{data.name}</p>
                                        <p>{data.address}</p>
                                        <p>{data.country}</p>
                                    </td>
                                    <td>
                                        <div className="phone-cell">
                                            <div className="phone-icon"></div>
                                            <div className="phone-number">{data.phoneNumber}</div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="mail-cell">
                                            {/* <div>{data.email}</div> */}
                                            <div className="mail-icon"></div>
                                        </div>
                                    </td>
                                    <td>{data.web}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <div className="new-customer" id="NewCustomer" onClick={(e) => handleClick(e)}>+</div>
        </div>
    );
}
