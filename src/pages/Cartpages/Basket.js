import { useState, useEffect, useContext } from 'react';
import { BasketContext } from '../Products'
import { useParams, useNavigate } from 'react-router-dom';
import { URL_GET_ONE_CUSTOMER, URL_POST_ORDER } from '../../Settings';
import "../FormPages.css";

export default function Basket({ productToBasket }) {

    const { customerId } = useParams();

    const { productData } = useContext(BasketContext);
    console.log(productToBasket);

    const [customer, setCustomer] = useState([]);
    const [unit, setUnit] = useState("");
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        fetch(`${URL_GET_ONE_CUSTOMER}/${customerId}`)
            .then(response => response.json())
            .then(data => setCustomer(data))
    }, [])

    let navigate = useNavigate();
    const addToBasket = (e) => {
        navigate(`/${e.target.id}`)
    };

    let selectedDate = new Date();
    function printDate() { return `${selectedDate.getDate()} - ${selectedDate.getMonth() + 1} - ${selectedDate.getFullYear()}`; }

    const confirm = async (e) => {
        e.preventDefault();
        const orderResponse = await fetch(URL_POST_ORDER, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({

            })
        });
        const token = await orderResponse.json();
    }
    return (
        <>
            <div>
                <span>Cliente Activo: {customer.name}</span>
                {/* <span>{"Cesta Actual:"}</span> */}
            </div>

            <div className="container-page">
                <div className="page-title">
                    <h2>Cesta</h2>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Facturado a:</th>
                            <th>Dirección de Envío:</th>
                            <th>Fecha de oferta:</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <p>{customer.id}</p>
                                <p>{customer.name}</p>
                                <p>30</p>
                            </td>
                            <td>
                                <p>{customer.address}</p>
                                <p>{customer.country}</p>
                            </td>
                            <td>
                                <p>{printDate()}</p>
                                {/* <p>{"cesta válida para"} {"(15 días al crear la cesta. Si llega a 0 se desecha)"} días</p> */}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <label>Comentarios</label>
                    <input type="text"></input>
                </div>
                <div className="page-title">
                    <button onClick={confirm}> Confirmar cesta</button>
                    <button>Eliminar cesta (al pulsar lanzar alert(seguro que..?))</button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Unidad</th>
                            <th>Cantidad</th>
                            <th>Total unidades</th>
                            <th>Precio €</th>
                            <th>Base €</th>
                            <th>IVA €</th>
                            <th>Total €</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productToBasket.map(() => {
                            <tr>
                                <td>
                                    <p>{productToBasket.model}</p>
                                    <p>{productToBasket.type}</p>
                                </td>
                                <td></td>
                                <td></td>
                                <td>{/* {productToBasket.} */}</td>
                                <td>{productToBasket.price} €</td>
                                <td>{/* {productToBasket.} */}</td>
                                <td>{/* {productToBasket.} */}</td>
                                <td>{/* {productToBasket.} */}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
                <div>
                    <button id={"Products"} onClick={addToBasket}>Añadir productos</button>
                </div>
                <div>
                    <p>Base: €</p>
                    <p>IVA 0%: 0,00 €</p>
                    <p>Total: €</p>
                </div>
            </div>
        </>
    )
}
