import React, { Fragment } from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import {Link} from'react-router-dom';
import Card from '../components/Card';
//appel du fichier JSON local (maquette de l'API)
import data from'../datas/data';


const Accueil = () => {
    return (
        
        <Fragment>
            <Header />
            <Banner />
            <section className='section2'>
                {data.map((card) =>(
                    <Link className='section2-lien' key={`${card.id}`} to={`/Location/${card.id}`}>
                        <Card key={`${card.id}`} cover={card.cover} title={card.title} />
                    </Link>
                ))}
            </section>
        </Fragment>

            
 
        
    );
};

export default Accueil;