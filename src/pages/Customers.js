import { useState, useEffect } from "react";
import { URL_GET_CUSTOMERS } from "../Settings";
import { useNavigate } from "react-router-dom";
import CustomersForm from "../components/forms/CustomersForm";
import "./FormPages.css";

export default function Customers() {
    const [customers, setCustomers] = useState([]);

    let navigate = useNavigate();
    const handleClick = (e) => navigate(`/${e.target.id}`);

    useEffect(() => {
        fetch(URL_GET_CUSTOMERS)
            .then(response => response.json())
            .then(data => {
                if (data) {
                    setCustomers(data);
                }else{
                    throw alert('No se ha podido hacer la petición')
                }
            });
    }, []);

    return (
        <div className="container-page">
            <div className="page-title">
                <h2>Clientes</h2>
            </div>
            <CustomersForm />
            <div className="page-table">
                <table className="table">
                    <thead>
                        <tr>
                            <th>icono</th>
                            <th>Cliente</th>
                            <th>Teléfono</th>
                            <th>Email</th>
                            <th>Web</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((data) => {
                            return (
                                <tr key={data.id}>
                                    <td>ICON</td>
                                    <td>{data.name}</td>
                                    <td>{data.phoneNumber}</td>
                                    <td>{data.email}</td>
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
