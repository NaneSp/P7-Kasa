import React from 'react';
import{useParams} from"react-router-dom";
import data from"../datas/data.json";
import Tags from"../components/Tags";
import Rating from '../components/Rating';
import Collapse from '../components/Collapse';


const Host = () => {
    /*récupération de la bonne location*/
    const idLocation = useParams();
    //console.log(idLocation); //récupère bien l'id sélectionné lors du click sur un appartement sur la page home 
    const getIdLocation = data.find(({id}) => id === idLocation.id);
    //console.log(getIdLocation);//récupère bien les infos de l'api concernant l'appart sélectionné précédemment
    //console.log("montre moi les photos du CARROUSEL pour CET ID---->",getIdLocation.pictures);
    //test pr longueur array : console.log("DONNE MOI LA LONGUEUR DU TABLEAU ===>",getIdLocation.pictures.length)
    
     /*Equipments*/
     const equipmentsLocation = getIdLocation.equipments.map((equipments, index) =>{
        return <li key={index}>{equipments}</li>
    });
    
    
    
    return (
            <section className="host">  
                <div className="host-title-location">
                    <span className='host-title-location-info'>{getIdLocation.title}</span>
                    <span className='host-title-location-place'>{getIdLocation.location}</span>
                </div>

                <div className="host-tags-rating">
                    <Tags />
                    <div className="host-tags-rating-container">
                    <Rating />
                        <span className="host-tags-rating-container-name">{getIdLocation.host.name}</span>
                        <img className="host-tags-rating-container-picture"src={getIdLocation.host.picture} alt="Profil propriétaire" />
                    
                    
                    </div>
                </div>  

                <div className="description-equipments">
                    <Collapse title="Description" description={getIdLocation.description}/>
                    <Collapse title="Equipements" description={equipmentsLocation} />
                </div>
            </section>
    );
};

export default Host;