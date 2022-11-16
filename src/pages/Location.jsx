import {useParams} from 'react-router-dom';
import Carrousel from "../components/Carrousel";
import Host from '../components/Host';
import Tags from"../components/Tags";
import Rating from '../components/Rating';
import Collapse from"../components/Collapse";
import data from '../datas/data';


const Location = () => {
    const idLocation =useParams();
    const getIdLocation = data.find(({id}) => id === idLocation.id);
    console.log(getIdLocation.rating);
    
    return(
            <>
                <Carrousel pictures={getIdLocation.pictures} />
                <section className="title-location">
                    <h1 className='title'>{getIdLocation.title}</h1>
                    <h2 className='location'>{getIdLocation.location}</h2> 
                </section>
                <section className="tags">
                    <Tags tags={getIdLocation.tags} />
                </section>
                <section className="host-rating">
                    <Host host={getIdLocation.host} />
                    <Rating rating={getIdLocation.rating} />
                </section>
                <section className="descritpion-equipments">
                    <Collapse title="Descritpion" description={getIdLocation.description} />
                    <Collapse title="Équipements" description={getIdLocation.equipments} />
                </section>  
            </>
    )
     
    
};

export default Location;