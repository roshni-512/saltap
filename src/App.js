
import './App.css';
import NavBar from './components/NavBar';
import Landing from './components/Landing';
// import TextComponent from './components/TextComponent';
import Featurecomponent from './components/Featurecomponent';
import Featurecomponent2 from './components/Featurecomponent2';
import Scroll from './components/SmoothScrolling';
import Fearurecomponent3 from './components/Fearurecomponent3';
import Gallerycomponent from './components/Gallerycomponent';
import Pricing from './components/Pricing';
import Commitment from './components/Commitment';
import Gallery from './components/Gallery';
import Offercomponent from './components/Offercomponent';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TextComponent from './components/TextComponent';
function App() {
  return (
    <div>
    
     
     <NavBar/>
     <Scroll/>
     <Landing/>
     <TextComponent/>
     <Featurecomponent/>
     <Featurecomponent2/>
     <Fearurecomponent3/>
     <Gallerycomponent/>
     <Pricing/>
     <Commitment/>
     <Offercomponent/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
