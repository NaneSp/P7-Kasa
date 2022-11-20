import Collapse from "../components/Collapse";
import Banner from "../components/Banner";
import imgBannerAbout from "../assets/bannerAProposD.png";
import dataAbout from "../datas/dataAbout.json";


const About = () => {
    return (
        <>
            <Banner imgBanner={imgBannerAbout} titleBanner=""/>
            {dataAbout.map((collapses, index) => (
                <Collapse key={index} title={collapses.title} description={collapses.description} />
            ))}
        </>
    );
};

export default About;