import { useState } from "react";
import chevronBas from "../assets/VectorBas.png";
import chevronHaut from "../assets/VectorHaut.png";


export default function Collapse({title, description}){

    const [isOpen, setIsOpen] = useState(true);//initialisation de la valeur de départ => ouvert = true : fermé =false
        return isOpen ? (
                <div className="prev__collapse">
                    <div className="collapse__container">
                        <div className="collapse" onClick={() => setIsOpen(false)}><h3 className="collapse__title">{title}</h3><img src={chevronBas} alt="chevron vers le bas" />
                        </div>
                    </div>
                </div>
                ) : (
                <div className="prev__collapse">
                    <div className="collapse__container">
                        <div className="open__collapse" onClick={() => setIsOpen(true)}><h3 className="open__collapse__title">{title}</h3><img src={chevronHaut} alt="chevron vers le haut" /></div>
                        <p className="open__collapse__text">{description}</p>
                    </div>
                </div>
                    )
    
}