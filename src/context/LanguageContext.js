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
        sales: ["Ofertas", "Pedidos pendientes", "Pedidos en preparación", "Pedidos preparados", "Facturas", "Abonos"],
        balance: ["Saldo Acumulado", "Saldo vencido"],
        form: ["Nº Documento", "Nº de Cliente", "Nombre del Cliente", "Buscar"],
        table: ["ID", "Nombre", "Email"],
        products: "Productos",
        customers: ["Clientes", "Nuevo cliente"],
        settings: ["Configuración", "Usuarios", "Modificar contraseña"]
    },
    en: {
        select: "Language",
        user: "User",
        password: "Password",
        shoppingcart: ["Shopping-Cart", "New Cart"],
        titles: ["Commissions", "Sales", "Balance", "Dashboard"],
        comissions: ["Current month", "Current Year", "Historical"],
        sales: ["Offers", "Pending orders", "Orders in preparation", "Prepared orders", "Invoices", "Credits"],
        balance: ["Total Balance", "Due balance"],
        form: ["Document Number", "Customer number", "Customer Name", "Search"],
        table: ["ID", "Name", "Email"],
        products: "Products",
        customers: ["Customers", "New customer"],
        settings: ["Settings", "Users", "Change password"]
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