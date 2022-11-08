import React from 'react';
import {useParams} from "react-router-dom";
import data from "../datas/data.json";
import Star from'../assets/etoilePleine.png';
import StarEmpty from'../assets/etoileVide.png';
import "../styles/components/_rating.scss";

const Rating = () => {

    /*récupération de la bonne location*/
    const idLocation = useParams();
    //console.log(idLocation); //récupère bien l'id sélectionné lors du click sur un appartement sur la page home 
    const getIdLocation = data.find(({id}) => id === idLocation.id);
    //console.log(getIdLocation);//récupère bien les infos de l'api concernant l'appart sélectionné précédemment
    //console.log("montre moi les photos du CARROUSEL pour CET ID---->",getIdLocation.pictures);
    //console.log("DONNE MOI LA LONGUEUR DU TABLEAU ===>",getIdLocation.pictures.length)

    let ratingLocation = [];
    let fullStar = true;
    for (let index = 0; index < 5; index++){
        if(index === parseInt (getIdLocation.rating)){
            fullStar = false;
        }
        if(fullStar === true){
            ratingLocation.push(<img key={index} className="star" src={Star} alt={`${getIdLocation.rating}/5`}/>)}
        else{ratingLocation.push(<img key={index} className="star" src={StarEmpty} alt={`${getIdLocation.rating}/5`}/>)}

            }

    return (
        <div className="rating">{ratingLocation}</div>
    );
};

export default Rating;