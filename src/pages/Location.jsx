import { useParams, useNavigate } from "react-router-dom";// import hook useParams pr récup l'id + useNavigate pour gérer les routes 
import { useEffect, useState } from "react"; //import hook useState pr gére l'état du composant + useEffect Hook d'effet
import Carrousel from "../components/Carrousel";
import Host from "../components/Host";
import Tags from "../components/Tags";
import Rating from "../components/Rating";
import Collapse from "../components/Collapse";
import data from "../datas/data";

const Location = () => {
	const idLocation = useParams();
	//console.log("ENVOI L'ID DU LOGEMENT SELECTIONNÉ",idLocation);//retourne bien l'id 
	const navigate = useNavigate();// à utiliser avec un hook d'effet 
	
	const [appart, setAppart] = useState();//initialisation de l'état de départ en attente (on attend que setAppart soit implémenté pr avoir la valeur à ce moment là)
	//console.log(appart.title);
	//console.log(appart.cover);

	
	useEffect(() => {
		const getAppartInfos = () => {
			const getIdLocation = data.find(({ id }) => id === idLocation.id)//recherche de l'id 
			//console.log(getIdLocation);//retourne le détail du logement par l'id sélectionné
			//mappage et vérification de l'état si mon id n'est pas défini alors renvoie vers la page d'erreur
			data.map(() => setAppart(getIdLocation))
			if (getIdLocation === undefined) {
				navigate('/404', { state: { message: 'Error' } })
			}
		}
		getAppartInfos();
		// eslint-disable-next-line
	},[]);//tableau de dépendances vide pr effet unique après le render de mon composant 

	/*Tags*/
	const tagsLocation = appart && appart.tags;//contrôle qu'on a bien une valeur, le state initial est màj grâce au setAppart. à chaque clic de card on récup les infos, on les stock ds le state une seule x(tableau de dép vide useEffect) et on peut ainsi aller chercher les infos dedans quand on veut 
	//console.log(tagsLocation);

	/*Equipments*/
	const equipmentsLocation =
		appart &&
		appart.equipments.map((equipments, index) => {
			return (
				<li key={index} className="open__collapse__text__list">
					{equipments}
				</li>
			)
		})

	return (
		appart && (
			<section className="set__location" key={appart.id}>
				<Carrousel pictures={appart.pictures} />
				<article className="location">
					<div className="location__title">
						<div className="location__title__tags">
							<h1 className="title">{appart.title}</h1>
							<h2 className="locationh2">{appart.location}</h2>
							<div className="tags">
								<div className="tags__container">
									{tagsLocation.map((tag) => (
										<Tags tags={tag} key={tag} />
									))}
								</div>
							</div>
						</div>
						<div className="host__rating">
							<Host host={appart.host} />
							<Rating rating={appart.rating} />
						</div>
					</div>
					<div className="descritpion__equipments">
						<div className="description">
							<Collapse title="Description" description={appart.description} />
						</div>
						<div className="equipments">
							<Collapse title="Équipements" description={equipmentsLocation} />
						</div>
					</div>
				</article>
			</section>
		)
	)
}

export default Location
