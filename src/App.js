import React from 'react';
//composants de navigation qui va gérer les routes 
//BrowserRouter englobe toutes l'application à l'intérieur un autre composant Routes puis nos routes réelles route 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Apropos from './pages/Apropos';
import Logement from './pages/Logements';
import Erreur from './pages/Erreur';
import "./styles/_settings.scss";
import Logements from './pages/Logements';


const App = () => {
  return (
    <BrowserRouter className="App">
      <Routes>
       {/*Route si ton chemin est l'accueil du site(=/) tu vas me fournir un composant (=accueil) */} 
      <Route path="/"element={<Accueil />} />
      <Route path="/Apropos" element={<Apropos />} />
      <Route path="/Logement" element={<Logements />} />
      {/*Si l'url ne correspond à rien de déclarer si dessus alors va à la page d'erreur 404*/}
      <Route path="*"element={<Erreur />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;