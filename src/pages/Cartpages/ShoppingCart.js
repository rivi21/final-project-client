import { useContext } from "react";
/* import DataContext from "../../context/DataContext"; */
import LanguageContext from "../../context/LanguageContext";

export default function ShoppingCart() {
    const { texts } = useContext(LanguageContext);
    return (
        <div>
            <div><h2>ShoppingCart</h2></div>
            <div className="components-forms">
                <input type="text" placeholder={texts.form[0]} />
                <input type="text" placeholder={texts.form[1]} />
                <input type="text" placeholder={texts.form[2]} />
                <button className="button-search" type="submit">{texts.form[3]}</button>
            </div >
            <div className="page-table">
                <table className="table">
                    <thead>
                        <tr>
                            <th>{texts.table[4]}</th>
                            <th>{texts.table[1]}</th>
                            <th>{texts.table[10]}</th>
                            <th>{texts.table[11]}</th>
                            <th>{texts.table[10]}Término de pago</th>
                            <th>{texts.table[13]}</th>

                            {/* <th>PDF</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {/* {{baskets.map(data => {}
                            return ( */}
                                <tr /* key = {data.customerId} */>
                                   {/* <td>{data.customerId}</td>
                                    <td>{data.customerName}</td>
                                    <td>{data.date}</td>
                                    <td>{data.deliveryDate}</td>
                                    <td>{data.paymentTerm}</td>
                                    <td>{data.totalPrice}</td>
                                    <td>{data.totalPrice}</td> */}
                                    <td><button>{"Confirmar Cesta"}</button></td>
                                    <td><button>{"eliminar cesta(icono basura)"}</button></td>
                                    <td></td>
                                </tr>
                            {/* );
                        })} */}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
