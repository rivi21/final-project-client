
export default function Basket() {
    return (

        <div>
            <div>
                <span>Cliente Activo: {"dinámico"}</span><span> Cesta Actual: {"dinámico"}</span>
            </div>
            <div>
                <h2>Cesta</h2>
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Facturado a: </th>
                            <th>Dirección de Envío:</th>
                            <th>Fecha de oferta:</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <p>{"nº de cliente"}</p>
                                <p>{"Nombre de cliente"}</p>
                                <p>{"Término de pago(30% in advance...)"}</p>
                            </td>
                            <td>
                                <p>{"dirección"}</p>
                                <p>{"país"}</p>
                            </td>
                            <td>
                                <p>Fecha</p>
                                <p>cesta válida para {"(15 días al crear la cesta. Si llega a 0 se desecha)"} días</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <label>Comentarios</label>
                <input></input>
            </div>
            <div>
                <button>Confirmar cesta</button>
                <button>Eliminar cesta (al pulsar lanzar alert(seguro que..?))</button>
            </div>
            <div>
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
                    <tbody>Aquí los productos que se vayan escogiendo. Al pulsar me lleva a la pag de productos</tbody>
                </table>
            </div>
            <div onClick="">
                Añadir productos
            </div>
            <div>
                <p>Base: €</p>
                <p>IVA 0%: 0,00 €</p>
                <p>Total: €</p>
            </div>
        </div>
    )
}
