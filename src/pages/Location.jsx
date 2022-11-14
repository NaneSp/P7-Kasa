import React from 'react';
import {useParams} from 'react-router-dom';
import Carrousel from "../components/Carrousel";
import Host from '../components/Host';
import data from '../datas/data';


const Location = () => {
    const {id} =useParams();
    const showLocation = data.find ((location) => location.id === id);
    
    if(showLocation !== undefined) {
        const {pictures} = showLocation;

        return(
            <>
                 <Carrousel pictures={pictures} />
                 <Host />
            </>
        )


    }else{
        window.location.href="/Error";
    }
   
    
    
        
    

    //fin du return final
};//fin const LOCATION

export default Location;