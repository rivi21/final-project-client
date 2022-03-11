const ProductItem = ({ data, addToCart }) => {
    let {id, model, type, price } = data
    return (
        <div style={{ border: "thin solid gray", padding: "1em" }}>
            <h3>{type}</h3>
            <h4>{model}</h4>
            <h5>{price} €</h5>
            <button onClick={() => addToCart(id)}>Agregar</button>
        </div>
        /* <tr>
            <td>{type}</td>
            <td>{model}</td>
            <td>{price} €</td>
            <td><button onClick={() => addToCart(id)}>Agregar</button></td>
        </tr> */
    )
}

export default ProductItem
