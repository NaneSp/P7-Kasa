import React from 'react';
import "../styles/components/_carrousel.scss";
import chevronGauche from "../assets/VectorGauche.png";
import chevronDroite from "../assets/VectorDroite.png";

const Carrousel = ({pictures}) => {
    return (
        <section className='section2-carrousel'>
            <img className='chevronGauche'src={chevronGauche} alt="chevron vers la gauche"/>
            <img className='carrouselPhoto'src={pictures} alt="location " />
            <img className='chevronDroite' src={chevronDroite} alt="chevron vers la droite"/>
        </section>
    );
};

export default Carrousel;