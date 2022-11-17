import {Link} from "react-router-dom";
import Card from "../components/Card";
import Banner from "../components/Banner";
import imgBanner from "../assets/bannerHomeD.png";
//appel du fichier JSON local (maquette de l'API)
import data from "../datas/data";



const Home = () => {
    return (
            <>
                <Banner imgBanner={imgBanner} titleBanner="Chez vous, partout et ailleurs"/>
                <section className='card'>
                    {data.map((card) =>(
                        <div className="card__location">
                            <Link className='card__location__link' key={`${card.id}`} to={`/Location/${card.id}`}>
                                <Card key={`${card.id}`} cover={card.cover} title={card.title} />
                            </Link>
                        </div>
                    ))}
                </section>
            </>       
    );
};

export default Home;