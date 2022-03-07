import { useState, useEffect, useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import { URL_GET_PRODUCTS } from "../Settings";
import SalesForm from "../components/forms/SalesForm";
import "./FormPages.css";

export default function Products() {

    const { texts } = useContext(LanguageContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(URL_GET_PRODUCTS)
            .then(response => response.json()
                .then(data => setProducts(data)))
    }, []);

    /* let randomQuantity = () => Math.floor(Math.random() * 100 + 1); */

    return (
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
                        {products.map((data) => {
                            return (
                                <tr key={data.model}>
                                    <td>{texts.products[1]}</td>
                                    <td>
                                        <p>{data.id}</p>
                                        <p>{data.model}</p>
                                        <p>{data.type}</p>
                                    </td>
                                    <td >
                                        <div className="products-cells-table">
                                            <p><label htmlFor="unidad">{texts.products[5]}:</label></p>
                                            <select name="unidad" id="unidad">
                                                <option value="Embalaje-12">{texts.products[6]} (12)</option>
                                                <option value="Embalaje-24">{texts.products[6]} (24)</option>
                                            </select>
                                        </div>
                                        <div className="products-cells-table">
                                            <p><label htmlFor="cantidad">{texts.products[7]}:</label></p>
                                            <input id="cantidad" type="text" ></input>
                                        </div>
                                    </td>
                                    <td><button>{texts.products[8]}</button></td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
           {/*  </div> */}
        </div>
    );
};
