import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Carousel from './components/carousel';
import Nosotros from './components/nosotros'
import Footer from './components/footer'
import BarraDeCalendario from './components/barraDeCalendario';
import InfoHoteles from './components/infoHoteles';

function App() {
  return (
    <div>
     <Header></Header>
     <Carousel></Carousel>
     <BarraDeCalendario></BarraDeCalendario> 
     <InfoHoteles></InfoHoteles> 
     <Nosotros></Nosotros>
     <Footer></Footer>
    </div>
  );
}

export default App;
