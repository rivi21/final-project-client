import { useState, useEffect } from "react";
import { URL_DUMMY } from "../../Settings";
import CustomersForm from "../components/forms/CustomersForm";

export default function Customers() {

    const [customers, setCustomers] = useState([])

    useEffect(() => {
        fetch(URL_DUMMY)
            .then(response => response.json())
            .then(json => setCustomers(json))
    }, [])

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
                                    <td>
                                        <p>{data.id}</p>
                                        <p>{data.company.name}</p>
                                    </td>
                                    <td>{data.phone}</td>
                                    <td>{data.website}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
