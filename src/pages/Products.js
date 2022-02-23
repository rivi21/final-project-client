import { useState, useEffect } from "react";
import { URL_GET_PRODUCTS } from "../Settings";
import SalesForm from "../components/forms/SalesForm";
import "./FormPages.css";

export default function Products() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(URL_GET_PRODUCTS)
            .then(response => response.json()
                .then(data => setProducts(data)))
    }, []);

    /* let randomQuantity = () => Math.floor(Math.random() * 100 + 1); */

    return (
        <div className="page-title">
            <h2>Products</h2>
            <SalesForm />
            <table>
                <thead>
                    <tr>
                        <th>imagen</th>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>añadir a la cesta</th>
                    </tr>
                </thead>
                
                <tbody>
                    {products.map((data) => {
                        return (
                            <tr key={data.model}>
                                <td>Imagen</td>
                                <td>
                                    <p>{data.id}</p>
                                    <p>{data.model}</p>
                                    <p>{data.type}</p>
                                </td>
                                <td >
                                    <div className="products-cells-table">
                                        <p><label htmlFor="unidad">Unidad:</label></p>
                                        <select name="unidad" id="unidad">
                                            <option value="Embalaje-12">EMBALAJE (12)</option>
                                            <option value="Embalaje-24">EMBALAJE (24)</option>
                                        </select>
                                    </div>
                                    <div className="products-cells-table">
                                        <p><label htmlFor="cantidad">Cantidad:</label></p>
                                        <input id="cantidad" type="text" ></input>
                                    </div>
                                </td>
                                <td><button>Añadir a la cesta</button></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};
