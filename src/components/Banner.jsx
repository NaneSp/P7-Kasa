import React from 'react';
import '../styles/components/_banner.scss';

const Banner = ({imgBanner, titleBanner}) => {
    return (
            <section className='section1'>
                <div className='section1-masque1'>
                    <img src={imgBanner} alt="paysage de montagne"/>
                <h1>{`${titleBanner}`}</h1> 
                </div>
            </section>
    );
};

export default Banner;