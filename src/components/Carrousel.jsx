import {useState} from "react"; //utilisation du hook qui permet d'ajouter une variable d'état au composant 
import vectorLeft from "../assets/VectorGauche.png";
import vectorRight from"../assets/VectorDroit.png";


export default function Carrousel({pictures}){

    const [current, setCurrent] = useState(0);//initialisation de la valeur de départ 
    //console.log("POSITION INITIALE ===>",current);//retourne le n° de de la photo / le nb de photo totales 
    const length = pictures.length;
    //console.log("LENGTH -1 ===>",length -1);//retourne bien la longueur du tableau pictures soit le nb de photo pr l'id sélectionné -1

    
    const goNext = () => {
        /*appel du setFonction pour modification de la valeur initiale "current"pour aller à photo suivante:
        la valeur initiale est strictement égale au nb de photo -1 ? si vrai renvoie 0 (permet de faire repartir de 0 les photos une fois quelles ont ttes étaient vues ) sinon renvoie la valeur initiale+1*/
        setCurrent(current === length -1 ? 0 : current +1);
    };
    

    const goPrevious = () => {
        /*modification de la valeur initiale "current" pour aller à la photo précédente :
        une fois arrivée à la 0 retourne à la dernière photo*/
        setCurrent(current === 0 ? length -1 : current -1);
    };

        return(
                <section className="carrousel">
                    {/* affichage des flêches si le array de pictures est supérieure à 1*/}
                    {length > 1  && <img className="carrousel__arrow__left"src={vectorRight} alt="arrow-left" onClick={goNext}/>}
                    {length > 1 && <img className="carrousel__arrow__right"src={vectorLeft} alt="arrow-right" onClick={goPrevious}/>}
                
                    {pictures.map((picture, index) => {
                        return (
                                <div key={index} className={ current === index ? "carrousel__picture-active" : "carrousel__picture-inactive"}>
                                    {index === current && (<img src={picture} className="carrousel__picture-active__object" alt="Logement de l'hôte sélectionné" />)}
                                    {index === current && (<span className="carrousel__picture-active__number">{current +1}/{length}</span>)}
                                </div>
                        )
                    })}   
                </section>
        )
    










}



