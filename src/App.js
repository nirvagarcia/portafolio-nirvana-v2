import './App.css';
import Bottombar from './components/Bottombar';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <header className="App-header">        
        <Navbar></Navbar>
        <Home></Home>
        <Projects></Projects>
        <Skills></Skills>
        <Contact></Contact>
        <Bottombar></Bottombar>
      </header>
    </div>
  );
}

export default App;