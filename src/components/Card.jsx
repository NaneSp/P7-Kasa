const Card = ({cover, title}) => {
    return (
            <article className="card__link__object">
                <h2 className="title__card">{title}</h2>
                <img src={cover} className="img__card"alt="location disponible"/>
            </article>
    );
};

export default Card;
