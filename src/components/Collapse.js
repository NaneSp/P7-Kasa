import React, { useState } from "react";
import "../styles/components/_collapse.scss";
import chevronBas from "../assets/VectorBas.png";
import chevronHaut from "../assets/VectorHaut.png";


export default function Collapse({title, specificity}){

    const [isOpen, setIsOpen] = useState(false)



    return isOpen ? (
        <section className="section2-about">
            <div className="collapse" onClick={() => setIsOpen(false)}><p className="collapse-title">{title}</p><img src={chevronBas} alt="chevron vers le bas" /></div>
            
        </section>

    ) : (
        <section className="section2-about">
        <div className="open-collapse" onClick={() => setIsOpen(true)}><p className="open-collapse-title">{title}</p><img src={chevronHaut} alt="chevron vers le haut" /></div>
        <p className="open-collapse-text">{specificity}</p>
        </section>
    )
    
}