
import './App.css';
import Header from './components/Header';
import Home from './components/home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Services from './components/Services/Services';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Skills />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
