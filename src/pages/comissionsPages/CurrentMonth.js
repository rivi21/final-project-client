import { useState, useEffect } from "react";
import { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";
import { URL_DUMMY } from "../../Settings";
import ComissionsForm from "../../components/forms/ComissionsForm";
import "../FormPages.css";

export default function CurrentMonth() {

    const { texts } = useContext(LanguageContext);

    const [comissions, setComissions] = useState([])

    useEffect(() => {
        fetch(URL_DUMMY)
            .then(response => response.json()
                .then(data => setComissions(data)))
    }, [])

    return (
        <div className="container-page">
            <div className="page-title">
                <h2>{texts.comissions[1]}</h2>
            </div>
            <ComissionsForm />
            <div className="page-table">
                <table className="table">
                    <thead>
                        <tr>
                            <th>{texts.table[0]}</th>
                            <th>{texts.table[1]}</th>
                            <th>{texts.table[2]}</th>
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
