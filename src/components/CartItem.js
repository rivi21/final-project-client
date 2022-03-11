const CartItem = (data, delFromCart) => {
  let { id, type, model, price } = data
  return (
    <div>
      <td>{type}</td>
      <td>{model}</td>
      <td>{price} €</td>
      <td><button onClick={() => delFromCart(id)}>Agregar</button></td>
    </div>
  )
}

export default CartItem