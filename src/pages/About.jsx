import React, { Fragment } from 'react';
import Collapse from '../components/Collapse';
import Banner from '../components/Banner';


const About = () => {
    return (
        <Fragment>
            <Banner />
             <Collapse /> 
             <Collapse />
             <Collapse />
             <Collapse />
             
        </Fragment>
    );
};

export default About;