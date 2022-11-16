import React from 'react';


const Host = ({host}) => {
    return (
            <>
                <div className="host-container">
                    <span className="host-tags-rating-container-name">{host.name}</span>
                    <img className="host-tags-rating-container-picture"src={host.picture} alt={host.name} />
                </div>
            </>  
 
    );
};

export default Host;