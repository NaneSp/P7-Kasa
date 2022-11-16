import { useState } from "react";
import chevronBas from "../assets/VectorBas.png";
import chevronHaut from "../assets/VectorHaut.png";


export default function Collapse({title, description}){

    const [isOpen, setIsOpen] = useState(false);

        return isOpen ? (
        
                <div className="collapse" onClick={() => setIsOpen(false)}><p className="collapse-title">{title}</p><img src={chevronBas} alt="chevron vers le bas" /></div>
                ) : (
                <>
                    <div className="open-collapse" onClick={() => setIsOpen(true)}><p className="open-collapse-title">{title}</p><img src={chevronHaut} alt="chevron vers le haut" /></div>
                    <p className="open-collapse-text">{description}</p>
                </>
                    )
    
}