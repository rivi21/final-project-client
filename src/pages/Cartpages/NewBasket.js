import { useNavigate } from "react-router-dom";

export default function NewBasket() {
    
    let navigate = useNavigate();
    const handleClick = (e) => navigate(`/${e.target.id}`);

    return (
        <div>
            <div>
                <h2>New Basket</h2>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Seleccione Cliente</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {customers.map(data => {
                        return ( */}
                    <tr /* key="" */>
                        <td>
                            <span>{/* {data.userName} */}</span><button id="Basket" onClick={(e) => handleClick(e)}>Crear cesta</button>
                        </td>
                    </tr>
                    {/* )
                    })} */}
                </tbody>
            </table>
        </div>
    )
}
