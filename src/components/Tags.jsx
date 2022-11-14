import React from 'react';
import data from "../datas/data";
import {useParams} from "react-router-dom";
import "../styles/components/_tags.scss";


const Tags = () => {
    /*récupération de la bonne location*/
    const idLocation = useParams();
    //console.log(idLocation); //récupère bien l'id sélectionné lors du click sur un appartement sur la page home 
    const getIdLocation = data.find(({id}) => id === idLocation.id);
    //console.log(getIdLocation);//récupère bien les infos de l'api concernant l'appart sélectionné précédemment
    //console.log("montre moi les photos du CARROUSEL pour CET ID---->",getIdLocation.pictures);
    //console.log("DONNE MOI LA LONGUEUR DU TABLEAU ===>",getIdLocation.pictures.length)

    const tagsLocation = getIdLocation.tags.map((tags, index)=> 
    {return <div key={index} className=" tags-container-object">{tags}</div>});
    //console.log("MONTRE MOI LE TAG ====>", tagsLocation);
    
    return (
        
            <div className="tags-container">{tagsLocation}</div>
        
    );
};

export default Tags;