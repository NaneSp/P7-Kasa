import {useParams, useNavigate} from "react-router-dom";
import Carrousel from "../components/Carrousel";
import Host from "../components/Host";
import Tags from "../components/Tags";
import Rating from "../components/Rating";
import Collapse from "../components/Collapse";
import data from "../datas/data";


const Location = () => {
    const idLocation =useParams();
    //console.log(idLocation);//retourne l'id de la location sélectionnée en accueil avec le HOOk de récup d'id
    const navigate = useNavigate();
    //console.log(navigate);
    const getIdLocation = data.find(({id}) => id === idLocation.id);
    //console.log(getIdLocation.rating);

    /*Tags*/
    const tagsLocation = getIdLocation.tags.map((tags, index) => {
        return <div key={index} className="tags__container__object">{tags}</div>
    })

     /*Equipments*/
     const equipmentsLocation = getIdLocation.equipments.map((equipments, index) =>{
        return  <li key={index} className="open__collapse__text__list">{equipments}</li>
    });
    
    if (getIdLocation === undefined) {
		navigate('/404', { state: { message: 'Error' } })
	}

    
    return(
            <section className="set__location">
                <Carrousel pictures={getIdLocation.pictures} />
                <article className="location">
                    <div className="location__title">
                    <div className="location__title__tags"> 
                        <h1 className='title'>{getIdLocation.title}</h1>
                        <h2 className='locationh2'>{getIdLocation.location}</h2> 
                           
                            <div className="tags">
                                <Tags tags={tagsLocation} />
                            </div>
                            </div>
                            <div className="host__rating">
                                <Host host={getIdLocation.host} />
                                <Rating rating={getIdLocation.rating} />
                            
                        </div>
                    </div>
                    <div className="descritpion__equipments">
                        <div className="description">
                            <Collapse title="Description" description={getIdLocation.description} />
                        </div>
                        <div className="equipments">
                            <Collapse title="Équipements" description={equipmentsLocation} />
                        </div>
                    </div> 
                 
                </article>
            </section>
    )

     
    
};

export default Location;