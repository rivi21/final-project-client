import "./Dashboard.css"

export default function Dashboard() {
    return (
        <>
            <div>
                <h2>Comisiones</h2>
                <div className="dashboard-section">
                    <div className="block-section">Acumulado Anual</div>
                    <div className="block-section">Mes Actual</div>
                    <div className="block-section">Histórico</div>
                </div>
            </div>
            <div>
                <h2>Carrito</h2>
                <div className="dashboard-section">
                    <div className="block-section">Carro: 1</div>
                </div>
            </div>
            <div>
                <h2>Ventas</h2>
                <div className="dashboard-section">
                    <div className="block-section">Ofertas: </div>
                    <div className="block-section">Pendientes: </div>
                    <div className="block-section">En preparación: </div>
                    <div className="block-section">Preparados: </div>
                    <div className="block-section">Facturas: </div>
                    <div className="block-section">Abonos: </div>
                </div>
            </div>
            <div>
                <h2>Saldo</h2>
                <div className="dashboard-section">
                    <div className="block-section">Saldo Acumulado</div>
                    <div className="block-section">Saldo Vencido</div>
                </div>
            </div>
        </>
    )
}
