import "./Forms.css"

export default function NewCustomerForm() {
    return (
        <div className="container-form">
            <p>* (Información obligatoria)</p>
            <h2>New Customer</h2>

            <div className="components-forms">
                <label>Representante de zona</label>
                <input type="text" />
            </div>
            <div className="components-forms">
                <label>Nombre *</label>
                <input type="text" />
            </div>
            <div className="components-forms">
                <label>NIF/CIF *</label>
                <input type="text" />
            </div>
            <div className="components-forms">
                <label>Web</label>
                <input type="text" />
            </div>
            <div className="components-forms">
                <label>Idioma</label>
                <input type="text" />
            </div>
            <div className="components-forms">
                <label>Dirección *</label>
                <input type="text" placeholder="País" />
                <input type="text" placeholder="Provincia" />
                <input type="text" placeholder="Municipio" />
                <input type="text" placeholder="Código Postal" />
                <input type="text" placeholder="Dirección" />
            </div>
            <div className="components-forms">
                <label>Contacto *</label>
                <input type="text" placeholder="E-mail" />
                <input type="text" placeholder="Teléfono" />
            </div>
            <div className="components-forms">
                <label>Domicilio de entrega</label>
                <input type="text" placeholder="País" />
                <input type="text" placeholder="Provincia" />
                <input type="text" placeholder="Municipio" />
                <input type="text" placeholder="Código Postal" />
                <input type="text" placeholder="Dirección" />
            </div>
            <div className="components-forms">
                <label>Forma de pago *</label>
                <input type="select" placeholder="E-mail" />
            </div>
            <div className="components-forms">
                <label>Término de pago *</label>
                <input type="select" placeholder="E-mail" />
            </div>
            <div className="buttons-container">
                <button className="button-form back">Volver</button>
                <button className="button-form go" type="submit">Aceptar</button>
            </div>

        </div>
    )
}
