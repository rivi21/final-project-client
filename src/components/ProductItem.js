import "./ProductItem.css"


const ProductItem = ({ data, addToCart }) => {

    let { id, model, type, price } = data;

    return (
        <div style={{ border: "thin solid gray", padding: "1em" }}>
            <div className="data">
                <h3>{type}</h3>
                <h4>{model}</h4>
                <h5>{price} €</h5>
                <button onClick={() => addToCart(id)}>Agregar</button>
            </div>
        </div>
    );
}
export default ProductItem;