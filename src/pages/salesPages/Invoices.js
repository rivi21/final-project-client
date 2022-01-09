import SalesForm from "../../components/SalesForm";


export default function Invoices() {
    return (
        <>
            <h2>Facturas</h2>
            <SalesForm />
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
                            <td>001</td>
                            <td>iD-001</td>
                            <td>Acme LTD</td>
                            <td>01/01/2022/</td>
                            <td>1000</td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
