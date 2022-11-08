import React, {useState} from 'react';
import "../styles/components/_carrousel.scss";
import chevronGauche from "../assets/VectorGauche.png";
import chevronDroite from "../assets/VectorDroite.png";

function Carrousel({pictures}){
    /*Créer un Hook d'état*/
    let [displayPicture, changePicture ] = useState(0);
    let lengthPicture = pictures.length;

    //console.log("DONNE MOI LA LONGUEUR DU TABLEAU====>",lengthPicture);

    const previous = () =>{
        if(displayPicture === 0){
            changePicture(lengthPicture -1);
        }else{
            changePicture(displayPicture -1);
        }
        return(changePicture);
    };

    const next = () =>{
        if(displayPicture === lengthPicture -1){
            changePicture(lengthPicture = 0);
        }else{
            changePicture(displayPicture +1);
        }
        return(changePicture);
    
    };

    return(
        <div className="carrousel">
            {
                lengthPicture > 1 && <img className="carrousel-chevron-gauche" src={chevronGauche} alt=" aller au précédent" onClick={previous} />
            }
            {
                pictures.map((picture, index) =>{
                    return(
                        <img key={index} className={index === displayPicture ? 'carrousel-picture actif' : 'carrousel-picture'} src={picture} alt="location" />
                    )
                })

            }
            {
                lengthPicture > 1 && <img className="carrousel-chevron-droite" src ={chevronDroite} alt="suivant" onClick={next} />
            }
            

        </div>
    )


}

export default Carrousel;