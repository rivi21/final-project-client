import { createContext, useState } from "react";


const LanguageContext = createContext();

const initialLanguage = "en";

const translations = {
    es: {
        user: "Usuario",
        password: "Contraseña",
        shoppingcart: "Carrito",
        comissions: ["Comisiones", "Mes Actual", "Año en curso", "Histórico"],
        sales: ["Ventas", "Ofertas", "Pedidos pendientes", "Pedidos en preparación", "Pedidos preparados", "Facturas", "Abonos"],
        balance: ["Saldo", "Saldo Acumulado", "Saldo vencido"],
    },
    en: {
        user: "User",
        password: "Password",
        shoppingcart:"Shopping-Cart",
        comissions: ["Commissions", "Current month", "Current Year", "Historical"],
        sales: ["Sales", "Offers", "Pending orders", "Orders in preparation", "Prepared orders", "Invoices", "Credits"],
        balance: ["Balance", "Total Balance", "Due balance"],
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