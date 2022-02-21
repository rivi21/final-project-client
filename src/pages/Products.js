import { useState, useEffect } from "react";
import { URL_DUMMY } from "../Settings";
import SalesForm from "../components/forms/SalesForm";
import "./FormPages.css";

export default function Products() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(URL_DUMMY)
            .then(response => response.json()
                .then(json => setProducts(json)))
    }, []);

    let randomQuantity = () => Math.floor(Math.random() * 100 + 1);

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
                            <tr key={data.id}>
                                <td>Imagen</td>
                                <td>
                                    <p>{data.id}</p>
                                    <p>{data.address.zipcode}</p>
                                    <p>{data.name}</p>
                                </td>
                                <td>{randomQuantity()}</td>
                                <td><button>Añadir a la cesta</button></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div >
    );
}
