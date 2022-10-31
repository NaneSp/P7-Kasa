import React from 'react';
import {Link} from'react-router-dom';
import Card from '../components/Card';
import Banner from '../components/Banner';
//appel du fichier JSON local (maquette de l'API)
import data from'../datas/data';



const Home = () => {
    return (
        
        <>
            <Banner/>
            <section className='section2'>
                {data.map((card) =>(
                    <Link className='section2-lien' key={`${card.id}`} to={`/Location/${card.id}`}>
                        <Card key={`${card.id}`} cover={card.cover} title={card.title} />
                    </Link>
                ))}
            </section>
        </>

            
 
        
    );
};

export default Home;