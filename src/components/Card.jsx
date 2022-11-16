const Card = ({cover, title}) => {
    return (
            <article className='section2-lien-card'>
                <h2>{title}</h2>
                <img src={cover} alt="location disponible"/>
            </article>
    );
};

export default Card;
