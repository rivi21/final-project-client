const CartItem = ({ data, delFromCart }) => {
  let { id, type, model, price, quantity } = data
  return (
      <div style={{ borderTop: "thin solid gray", paddingTop: "1em", }}>
        <h4>{type}</h4>
        <h5>{model}</h5>
        <h5>{price} € x {quantity}  total: {price * quantity} €</h5>
        <br />
        <button onClick={() => delFromCart(id)}>Eliminar uno</button>

        <button onClick={() => delFromCart(id, true)}>Eliminar todos</button>
        <br /><br />
      </div>
  );
}
export default CartItem;