/* eslint-disable react/jsx-no-duplicate-props */
import React, {useState} from 'react';
//import {Navigate} from"react-router-dom";
//import data from"../datas/data.json";
import vectorLeft from "../assets/VectorGauche.png";
import vectorRight from"../assets/VectorDroite.png";
import "../styles/components/_carrousel.scss";


export default function Carrousel({pictures}){

    const [current, setCurrent] = useState(0);
    const length = pictures.length;
    //console.log(length);//retourne bien la longueur du tableau pictures

    
    const goNext = () => {
        setCurrent(current === length -1 ? 0 : current +1);
    };
    //console.log(goNext);

    const goPrevious = () => {
        setCurrent(current === 0 ? length -1 : current -1);
    };

        return(
            <section className=" carrousel">
                {length > 1  && <img className="carrousel-arrow-left"src={vectorRight} alt="arrow-left" onClick={goNext}/>}
                {length > 1 && <img className="carrousel-arrow-right"src={vectorLeft} alt="arrow-right" onClick={goPrevious}/>}
                
                {pictures.map((picture, index) => {
                    return (
                        <div key={index} className={ current === index ? "carrousel-picture-active" : "carrousel-picture-inactive"}>
                            {index === current && (<img src={picture} className="carrousel-picture-active-object" alt="Logement de l'hôte sélectionné" />)}
                            {index === current && (<span className="carrousel-picture-active-number">{current +1}/{length}</span>)}
                        </div>
                    )
                })}

                
            </section>
        )
    










}



