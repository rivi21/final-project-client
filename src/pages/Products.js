import { useState, useEffect, useContext } from "react";
import { createContext } from "react";
import LanguageContext from "../context/LanguageContext";
import { URL_GET_PRODUCTS } from "../Settings";
import SalesForm from "../components/forms/SalesForm";
import "./FormPages.css";

export const BasketContext = createContext({});

export default function Products({ setProductToBasket }) {

    const { texts } = useContext(LanguageContext);
    const [products, setProducts] = useState([]);
    const [productData, setProductData] = useState([]);
    
    useEffect(() => {
        fetch(URL_GET_PRODUCTS)
            .then(response => response.json())
            .then(data => setProducts(data))
    }, []);

    const addProductToBasket = (product) => {
        setProductToBasket(product);
    };

    return (
        <>
            <div>
                <span>Cliente Activo: {/* {customer.name} */}</span>
                {/* <span>{"Cesta Actual:"}</span> */}
            </div>
            <div className="container-page">
                <div className="page-title">
                    <h2>{texts.products[0]}</h2>
                </div>
                <SalesForm />
                {/* <div className="page-table"> */}
                <table>
                    <thead>
                        <tr>
                            <th>{texts.products[1]}</th>
                            <th>{texts.products[2]}</th>
                            <th>{texts.products[3]}</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => {
                            return (
                                <tr key={product.model}>
                                    <td>{texts.products[1]}</td>
                                    <td>
                                        <p>{product.id}</p>
                                        <p>{product.model}</p>
                                        <p>{product.type}</p>
                                    </td>
                                    <td >
                                        {/* <form onSubmit={(e) => addToBasket(e, product)}> */}
                                        <div className="products-cells-table">
                                            <p><label htmlFor="unidad">{texts.products[5]}:</label></p>
                                            <select name="unidad" id="unidad" /* onChange={e => setUnit(e.target.value)} */>
                                                <option value="Embalaje-12">{texts.products[6]} (12)</option>
                                                <option value="Embalaje-24">{texts.products[6]} (24)</option>
                                            </select>
                                        </div>
                                        <div className="products-cells-table">
                                            <p><label htmlFor="cantidad">{texts.products[7]}:</label></p>
                                            <input id="cantidad" name="cantidad" type="text"
                                                    /* onChange={e => setQuantity(e.target.value)} */></input>
                                        </div>
                                        <div>
                                            <button type="submit" onClick={() => addProductToBasket(product)}>{texts.products[8]}</button>
                                        </div>
                                        {/* </form> */}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                {/*  </div> */}
            </div>
        </>
    );
};


const productsProvider = ({ children }) => {

    const data = {

    };

    return <BasketContext.Provider value={data}>{children}</BasketContext.Provider>
}
export { productsProvider };
