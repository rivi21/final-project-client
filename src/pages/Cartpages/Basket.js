import { useState, useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { useCredentials } from '../../hooks/useCredentials';
import { URL_GET_ONE_CUSTOMER, URL_POST_ALL_PRODUCTS, URL_ORDER } from '../../Settings';
import { shoppingReducer, shoppingInitialState } from '../../reducers/ShoppingReducers';
import ProductItem from '../../components/ProductItem';
import CartItem from '../../components/CartItem';
import { TYPES } from '../../actions/shoppingActions';

import "../TablePages.css";

/* import SumCart from '../../components/SumCart'; */

export default function Basket() {

    const { customerId } = useParams();
    const [customer, setCustomer] = useState([]);
    const [orderId, setOrderId] = useState(0);
    const { token } = useCredentials()

    useFetch(`${URL_GET_ONE_CUSTOMER}/${customerId}`, setCustomer);

    useEffect(async () => {
        await fetch(URL_ORDER, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
               /*  'authorization': 'Bearer' + token */
            },
            body: JSON.stringify({
                customer: customerId,
                date: printDate
            }),
        });
        await fetch(URL_ORDER)
            .then(response => response.json())
            .then(data => setOrderId(data));

    }, []);
    let selectedDate = new Date();
    const printDate = `${selectedDate.getFullYear()}-${selectedDate.getMonth() + 1}-${selectedDate.getDate()}`;

    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
    const { products, cart } = state;

    const addToCart = (id) => {
        dispatch({ type: TYPES.ADD_TO_CART, payload: id });
    };

    const delFromCart = (id, all = false) => {
        console.log(id, all);
        if (all) {
            dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id });
        } else {
            dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id });
        }
    };
    const clearCart = () => {
        dispatch({ type: TYPES.CLEAR_CART });
    };

    const [sum, setSum] = useState(0)
    useEffect(() => {
        let cartData = cart.map(item => item.price * item.quantity);
        setSum(cartData.reduce(function (a, b) { return a + b }, 0))
    }, [cart])

    /*  function itemsInCart(cart) {
         let items = [];
         cart.map(item => {
             const data = {
                 id: item.id,
                 quantity: item.quantity,
             }
             items.push(data);
         })
         return items;
     } */

    const confirmOrder = () => {
        cart.map(item => {
            fetch(URL_POST_ALL_PRODUCTS, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': 'Bearer' + token
                },
                body: JSON.stringify({
                    orderId: orderId,
                    id: item.id,
                    quantity: item.quantity
                }),
            })
        })
    }

    return (
        <div>
            <div>
                <span>Cliente Activo: {customer.name}</span>
                {/* <span>{"Cesta Actual:"}</span> */}
            </div>
            <div className="page-title">
                <h2>Cesta</h2>
            </div>
            <div className="container-page">
                <table>
                    <thead>
                        <tr className="basket-thead">
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
                                <p>{printDate}</p>
                                <p>{"cesta válida para"} {"(15 días)"} días</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="cart-flex">
                <div>
                    <h2>Productos</h2>
                    <div className="box ">
                        <div className="data">
                            <h4>Tipo</h4>
                            <h4>Modelo</h4>
                            <h4>Precio</h4>
                            <h4>añadir</h4>
                        </div>
                        {
                            products.map(product => <ProductItem key={product.id} data={product} addToCart={addToCart} />)
                        }
                    </div>
                </div>
                <div>
                    <h2>Cesta</h2>
                    <div className="box">
                        <h3>{`Pedido    nº:   ${orderId}`}</h3>
                        <br></br>
                        <div>
                            <button onClick={clearCart}>Limpiar Carrito</button>
                            <button onClick={confirmOrder}>Confirmar</button>
                        </div>
                        <br /><br />
                        {
                            cart.map((item, index) => <CartItem key={index} data={item} delFromCart={delFromCart} />)
                        }
                    </div>
                    <div className="box">
                        <div>
                            <h3>Total</h3>
                            <p>Base: {sum}  €</p>
                            <p>IVA 0%: 0,00 €</p>
                            <p>Total: {sum}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

/* export default function Basket({ productToBasket }) {

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



        </>
    )
} */
