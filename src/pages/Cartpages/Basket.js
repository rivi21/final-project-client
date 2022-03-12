import { useState, useEffect, useReducer } from 'react';
import { useParams,/*  useNavigate */ } from 'react-router-dom';
import { URL_GET_ONE_CUSTOMER } from '../../Settings';
import { shoppingReducer, shoppingInitialState } from '../../reducers/ShoppingReducers';
import ProductItem from '../../components/ProductItem';
import CartItem from '../../components/CartItem';
import { TYPES } from '../../actions/shoppingActions';
import "../FormPages.css";

export default function Basket() {

    const { customerId } = useParams();
    const [customer, setCustomer] = useState([]);
    useEffect(() => {
        fetch(`${URL_GET_ONE_CUSTOMER}/${customerId}`)
            .then(response => response.json())
            .then(data => setCustomer(data))
    })

    let selectedDate = new Date();
    function printDate() { return `${selectedDate.getDate()} - ${selectedDate.getMonth() + 1} - ${selectedDate.getFullYear()}`; }

    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
    const { products, cart } = state;

    const addToCart = (id) => {
        dispatch({ type: TYPES.ADD_TO_CART, payload: id });
        /*  console.log(id); */
    };
    const delFromCart = () => { };
    const clearCart = () => { };

    return (
        <div>
            <div>
                <span>Cliente Activo: {customer.name}</span>
                <span>{"Cesta Actual:"}</span>
            </div>
            <div className="page-title">
                <h2>Cesta</h2>
            </div>
            <h3>Productos</h3>
            {/* <div className="container-page"> */}
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
                            <p>{"cesta válida para"} {"(15 días al crear la cesta. Si llega a 0 se desecha)"} días</p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <article className="box"> {/*  grid-responsive */}
                {
                    products.map(product => <ProductItem key={product.id} data={product} addToCart={addToCart} />)
                }
            </article>
            <h3>Cesta</h3>
            <article className="box">
                <button onClick={clearCart}>Limpiar Carrito</button>
                {
                    cart.map((item, index) => <CartItem key={index} data={item} delFromCart={delFromCart} />)
                }
            </article>
            <div className="page-title">
                <button /* onClick={confirm} */> Confirmar cesta</button>
                <button>Eliminar cesta (al pulsar lanzar alert(seguro que..?))</button>
            </div>
            <div>
                <p>Base: €</p>
                <p>IVA 0%: 0,00 €</p>
                <p>Total: €</p>
            </div>
        </div >
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
