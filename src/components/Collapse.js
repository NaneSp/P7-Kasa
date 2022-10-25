import React, { useState } from "react";
import "../styles/components/_collapse.scss";



export default function Collapse(){

    const [isOpen, setIsOpen] = useState(false)



    return isOpen ? (
        <section className="section2-about">
            <div className="collapse" onClick={() => setIsOpen(false)}><p className="collapse-title">Fiabilité</p><span  className="collapse-title-chevron">𐔝</span></div>
            
        </section>

    ) : (
        <section className="section2-about">
        <div className="open-collapse" onClick={() => setIsOpen(true)}><p className="open-collapse-title">Fiabilité</p><span  className="open-collapse-title-chevron">𐔐</span></div>
        <p className="open-collapse-text">Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.</p>
        </section>
    )
    
}



