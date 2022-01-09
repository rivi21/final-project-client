import "./Dashboard.css"
import { useNavigate } from "react-router-dom";

export default function Dashboard() {

    let navigate = useNavigate();

    const handleClickInvoices = () => navigate(`/Invoices`);
    const handleClickSalesOffers = () => navigate(`/Offers`);
    const handleClickPendingOrders = () => navigate(`/PendingOrders`);
    const handleClickPreparingOrders = () => navigate(`/PreparingOrders`);
    const handleClickPreparedOrders = () => navigate(`/PreparedOrders`);

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
                    <div className="block-section" onClick={handleClickSalesOffers}>Ofertas: </div>
                    <div className="block-section" onClick={handleClickPendingOrders}>Pedidos pendientes: </div>
                    <div className="block-section" onClick={handleClickPreparingOrders}>Pedidos en preparación: </div>
                    <div className="block-section" onClick={handleClickPreparedOrders}>Pedidos preparados: </div>
                    <div className="block-section" onClick={handleClickInvoices}>Facturas: </div>
                    <div className="block-section" >Abonos: </div>
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
