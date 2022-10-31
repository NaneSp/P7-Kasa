import React from 'react';
import {useParams} from 'react-router-dom';
import Carrousel from "../components/Carrousel";
import Tags from "../components/Tags";
import Rating  from '../components/Rating';
import Host from '../components/Host';
import data from '../datas/data';

const Location = () => {
    const idLocation = useParams();
    //console.log(idLocation); //récupère bien l'id sélectionné lors du click sur un appartement sur la page home 
    const getIdLocation = data.find(({id}) => id === idLocation.id);
    //console.log(getIdLocation);//récupère bien les infos de l'api concernant l'appart sélectionné précédemment
    //console.log("montre moi les photos du CARROUSEL pour CET ID---->",getIdLocation.pictures);
    console.log("DONNE MOI LA LONGUEUR DU TABLEAU ===>",getIdLocation.pictures.length)
    return (
        <>
            {data.map((carrousel) => (
                <Carrousel key={`${carrousel.id}`} pictures={carrousel.pictures} />
            ))}

            
        </>
    );
};

export default Location;