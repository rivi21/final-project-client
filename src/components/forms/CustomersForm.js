import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import "./Forms.css"

export default function CustomersForm() {

    const { texts } = useContext(LanguageContext);

    return (
        <div className="components-forms">
            <form action="">
                <input type="text" placeholder={texts.form[1]} />
                <input type="text" placeholder={texts.form[2]} />
                <button type="submit">{texts.form[3]}</button>
            </form>
        </div>
    );
}
