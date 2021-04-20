import './App.css';
import Navigation from './components/Nav';
import About from './components/About'
import Qualifications from './components/Qualifications'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <div>
      <Navigation />
      <About />
      <Qualifications />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
