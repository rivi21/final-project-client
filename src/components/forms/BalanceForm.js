import { useContext } from "react";
import LanguageContext from "../../context/LanguageContext";
import "./Forms.css";

export default function BalanceForm() {

    const { texts } = useContext(LanguageContext);

    return (
        <div className="components-forms">
            <input type="text" placeholder={texts.form[1]} />
            <input type="text" placeholder={texts.form[2]} />
            <button className="button-search" type="submit">{texts.form[3]}</button>
        </div>
    )
}
