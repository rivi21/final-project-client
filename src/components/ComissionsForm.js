import { useState, useEffect } from "react";
export default function ComissionsForm() {

    const [comissions, setComissions] = useState([])

    useEffect(() => {
        fetch(URL)
            .then(response => response.json()
                .then(data => setComissions(data)))
    }, [])
    return (
        <>
            <div className="components_forms">
                <input type="text" placeholder="Nº Documento" />
                <input type="text" placeholder="iD_Cliente" />
                <input type="text" placeholder="Nombre Cliente" />
                <button type="submit">Buscar</button>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>soy el cabecero</th>
                            <th>soy el cabecero 2</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> soy el cuerpo</td>
                            <td> soy el cuerpo celda2</td>
                        </tr>
                    </tbody>
                    <tfooter>
                        soy el footer de la tabla
                    </tfooter>
                    <caption>
                        Texto explicativo
                    </caption>
                </table>
            </div>
        </>
    )
}
