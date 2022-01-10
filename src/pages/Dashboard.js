import "./Dashboard.css"
import { useNavigate } from "react-router-dom";

export default function Dashboard() {

    let navigate = useNavigate();
    
    const handleClickCurrentMonth = () => navigate(`/CurrentMonth`);
    const handleClickCurrentYear = () => navigate(`/CurrentYear`);
    const handleClickHistorical = () => navigate(`/Historical`);

    const handleClickShoppingCart = () => navigate(`/ShoppingCart`);

    const handleClickInvoices = () => navigate(`/Invoices`);
    const handleClickSalesOffers = () => navigate(`/Offers`);
    const handleClickPendingOrders = () => navigate(`/PendingOrders`);
    const handleClickPreparingOrders = () => navigate(`/PreparingOrders`);
    const handleClickPreparedOrders = () => navigate(`/PreparedOrders`);
    const handleClickPayments = () => navigate(`/Payments`);

    const handleClickTotalBalance = () => navigate(`/TotalBalance`);
    const handleClickDueBalance = () => navigate(`/DueBalance`);

    return (
        <>
            <div>
                <h2>Comisiones</h2>
                <div className="dashboard-section">
                    <div className="block-section" onClick={handleClickCurrentMonth}>Mes Actual</div>
                    <div className="block-section" onClick={handleClickCurrentYear}>Año en curso</div>
                    <div className="block-section" onClick={handleClickHistorical}>Histórico</div>
                </div>
            </div>
            <div>
                <h2>Carrito</h2>
                <div className="dashboard-section">
                    <div className="block-section" onClick={handleClickShoppingCart}>Carro: 1</div>
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
                    <div className="block-section" onClick={handleClickPayments}>Abonos: </div>
                </div>
            </div>
            <div>
                <h2>Saldo</h2>
                <div className="dashboard-section">
                    <div className="block-section" onClick={handleClickTotalBalance}>Saldo Acumulado</div>
                    <div className="block-section" onClick={handleClickDueBalance}>Saldo Vencido</div>
                </div>
            </div>
        </>
    )
}
