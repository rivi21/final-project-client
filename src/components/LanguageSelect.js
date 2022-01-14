import { useState } from "react";
import "./LanguageSelect.css"

export default function LanguageSelect() {

    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);
    };

    return (

        <button onClick={handleToggle} className={isActive ? "btn-language english" : "btn-language español"}>
            <span>{isActive ? "English" : "Español"}</span>
        </button>
    );
};
