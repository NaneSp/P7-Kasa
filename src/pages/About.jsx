import React from 'react';
import Collapse from '../components/Collapse';
import Banner from '../components/Banner';
import imgBannerAbout from"../assets/bannerAProposM.png";
import dataAbout from '../datas/dataAbout.json';


const About = () => {
    return (
        <>
            <Banner imgBanner={imgBannerAbout} titleBanner=""/>
            {dataAbout.map((collapses) => (
                <Collapse key={`${collapses.id}`} title={collapses.title} description={collapses.description} />
            ))}
        </>
    );
};

export default About;