import { useState, useEffect } from "react";
import { URL_DUMMY } from "../../Settings";
import ComissionsForm from "../../components/forms/ComissionsForm";
import "../FormPages.css";

export default function CurrentMonth() {

    const [comissions, setComissions] = useState([])

    useEffect(() => {
        fetch(URL_DUMMY)
            .then(response => response.json()
                .then(data => setComissions(data)))
    }, [])

    return (
        <div className="container-page">
            <div className="page-title">
                <h2>Mes actual</h2>
            </div>
            <ComissionsForm />
            <div className="page-table">
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {comissions.map((object) => {
                            return (
                                <tr key={object.id}>
                                    <td>{object.id}</td>
                                    <td>{object.name}</td>
                                    <td>{object.email}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

        </div>
    )
}
