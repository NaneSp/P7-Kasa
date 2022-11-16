const Banner = ({imgBanner, titleBanner}) => {
    return (
            <section className='banner'>
                <div className='banner__masque'>
                    <img src={imgBanner} alt="paysage de montagne"/>
                <h1 className="banner__title">{`${titleBanner}`}</h1> 
                </div>
            </section>
    );
};

export default Banner;