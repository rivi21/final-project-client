const CartItem = ({data, delFromCart}) => {
  let { id, type, model, price, quantity } = data
  return (
    <div style={{borderTop: "thin solid gray"}}>
      <h4>{type}</h4>
      <h5>{model}</h5>
      <h5>{price} € x {quantity}  total: {price * quantity} €</h5>
      <button>Eliminar uno</button>
      <button onClick={() => delFromCart(id)}>Eliminar todos</button>
    </div>
  )
}

export default CartItem