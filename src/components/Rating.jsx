import star from'../assets/etoilePleine.png';
import starEmpty from'../assets/etoileVide.png';


const Rating = ({rating}) => {
    const notes = [1,2,3,4,5];
    //console.log(notes);

    return(
            <div className="rating">
                { notes.map ((notesElement) => rating > notesElement ? (
                    <img key={notesElement.toString()} className="star" src={star} alt="star" /> 
                ) : (
                    <img key={notesElement.toString()} className="star" src={starEmpty} alt="empty star" />
                ))}

            </div>
    )
    
};

export default Rating;