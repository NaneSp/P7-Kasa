import React from 'react';
import Collapse from '../components/Collapse';
import Banner from '../components/Banner';
import dataAbout from '../datas/dataAbout.json';


const About = () => {
    return (
        <>
            <Banner />
            {dataAbout.map((collapses) => (
                <Collapse key={`${collapses.id}`} title={collapses.title} description={collapses.description} />
            ))}
        </>
    );
};

export default About;