import React from 'react';
//composants de navigation qui va gérer les routes 
//BrowserRouter englobe toutes l'application à l'intérieur un autre composant Routes puis nos routes réelles route 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from'./components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Location from './pages/Location';
import Error from './pages/Error';
import Footer from'./components/Footer';
import "./styles/_settings.scss";



const App = () => {
  return (
    <BrowserRouter className="App">
      <main className='container'>
      <Header />
      
      <Routes>
       {/*Route si ton chemin est l'accueil du site(=/) tu vas me fournir un composant (=accueil) */} 
        <Route path="/"element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Location/:id" element={<Location />} />
      {/*Si l'url ne correspond à rien de déclarer si dessus alors va à la page d'erreur 404*/}
        <Route path="*"element={<Error />} />
      </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;