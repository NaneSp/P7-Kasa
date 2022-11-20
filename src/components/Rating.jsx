import star from "../assets/etoilePleine.png";
import starEmpty from "../assets/etoileVide.png";


const Rating = ({rating}) => {
    const notes = [1,2,3,4,5];
    //console.log(notes);
    //mappage pour itérer chaque fois de 1 à 5 (le nb d'étoile) et comparer l'itération avec le score, il envoie une étoile pleine tant que le score est supérieur ou égal à l'itération sinon il renvoir une étoile vide

    return(
            <div className="rating">
                { notes.map ((notesElement) => rating >= notesElement ? (
                    <img key={notesElement.toString()} className="star" src={star} alt="star" /> 
                ) : (
                    <img key={notesElement.toString()} className="star" src={starEmpty} alt="empty star" />
                ))}

            </div>
    )
    
};

export default Rating;