import './App.css';
import "./styles/GeneralColors.css";
import Bottombar from './components/Bottombar';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { ThemeProvider } from './components/ThemeContext';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">    
      <ThemeProvider>
        <Navbar></Navbar>
        <Home></Home>
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>
        <Footer></Footer>
        <Bottombar></Bottombar>      
      </ThemeProvider>    
       
      </header>
    </div>
  );
}

export default App;