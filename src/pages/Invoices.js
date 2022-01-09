

export default function Invoices() {
    return (
        <>
            <div>
                <h2>Facturas</h2>
                <input type="text" placeholder="Número" />
                <input type="text" placeholder="iD_Cliente" />
                <input type="text" placeholder="Nombre Cliente" />
                <button type="submit">Buscar</button>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Número</th>
                            <th>iD_Cliente</th>
                            <th>Nombre</th>
                            <th>Fecha</th>
                            <th>Importe</th>
                            <th>PDF</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Luis</td>
                            <td>luis@gmail.com</td>
                            <td>45</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
