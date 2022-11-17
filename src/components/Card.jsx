const Card = ({cover, title}) => {
    return (
            <article className="card__location__link__global">
                <img src={cover} className="card__location__link__global__img"alt="location disponible"/>
                <div className="card__location__link__global__title">
                    <h2 className="title__card">{title}</h2>
                </div>
            </article>
    );
};

export default Card;
