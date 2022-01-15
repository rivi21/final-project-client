import "./Forms.css"

export default function ComissionsForm() {

    return (
        <>
            <div className="components-forms">
                <input type="text" placeholder="Nº Documento" />
                <input type="text" placeholder="iD_Cliente" />
                <input type="text" placeholder="Nombre Cliente" />
                <button type="submit">Buscar</button>
            </div>
        </>
    )
}
