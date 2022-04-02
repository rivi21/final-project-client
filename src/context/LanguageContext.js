import { createContext, useState } from "react";

const LanguageContext = createContext();

const initialLanguage = "es";

const translations = {
    es: {
        select: "Idioma",
        user: "Usuario",
        password: "Contraseña",
        shoppingcart: ["Carrito", "Nueva Cesta"],
        titles: ["Comisiones", "Ventas", "Saldo", "Panel de control"],
        comissions: ["Mes Actual", "Año en curso", "Histórico"],
        sales: ["Pedidos pendientes", "Pedidos en preparación", "Pedidos preparados", "Facturas", "Ofertas"],
        balance: ["Saldo Acumulado", "Saldo vencido"],
        form: ["Nº Documento", "Nº de Cliente", "Nombre del Cliente", "Buscar"],
        table: ["ID", "Nombre", "Email", "Nº de Factura", "Nº de Cliente", "Fecha de Pago",
            "Base Imponible", "Porcentaje Comisión", "Importe Comisíón", "Nº de Pedido", "Fecha", "Fecha Entrega",
            "Condiciones de Envío", "Importe", "Importe Pendiente", "Días Preparado", "Vencimiento", "Días de Retraso"],
        products: ["Productos", "Imagen", "Producto", "Cantidad", "Añadir", "Unidad", 
                    "EMBALAJE", "Cantidad", "Añadir a la Cesta"],
        customers: ["Clientes", "Nuevo cliente", "Teléfono", "Email", "Web"],
        newCustomer: ["Datos requeridos", "Nuevo Usuario", "Agente", "Nombre", "Dirección",
            "Contacto", "Vaciar", "Aceptar"],
        dashboard: ["Cantidad", "Importe total", "Facturas"],
        settings: ["Configuración", "Usuarios", "Modificar contraseña"],
        log: ["Cerrar sesión"]
    },
    en: {
        select: "Language",
        user: "User",
        password: "Password",
        shoppingcart: ["Shopping-Cart", "New Cart"],
        titles: ["Commissions", "Sales", "Balance", "Dashboard"],
        comissions: ["Current month", "Current Year", "Historical"],
        sales: ["Pending orders", "Orders in preparation", "Prepared orders", "Invoices", "Offers"],
        balance: ["Total Balance", "Due balance"],
        form: ["Document Number", "Customer number", "Customer Name", "Search"],
        table: ["ID", "Name", "Email", "Invoice Number", "Customer Number", "Payment Date",
            "Taxable Base", "Commission Percentage", "Commission Amount", "Order Number", "Date", "Deliver date",
            "Shipping Conditions", "Amount", "Pending Amount", "Days Prepared", "Due", "Days Overdue"],
        products: ["Products", "Image", "Product", "Quantity", "Add", "Unit",
        "PACKAGING", "Quantity", "Add to Cart"],
        customers: ["Customers", "New customer", "Phone number", "Email", "Web"],
        newCustomer: ["Data required", "New User", "Agent", "Name", "Address",
            "Contact", "Empty", "OK"],
        dashboard: ["Quantity", "Total amount", "Invoices"],
        settings: ["Settings", "Users", "Change password"],
        log: ["Log Out"]
        
    }
};

const LanguageProvider = ({ children }) => {

    const [language, setLanguage] = useState(initialLanguage);

    const [texts, setTexts] = useState(translations[language]);

    const handleLanguage = (e) => {
        if (e.target.value === "es") {
            setLanguage("es")
            setTexts(translations.es);
        } else {
            setLanguage("en");
            setTexts(translations.en)
        }
    }
    const data = { texts, language, setLanguage, handleLanguage };

    return <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
}

export { LanguageProvider };

export default LanguageContext;