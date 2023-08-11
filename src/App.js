import './App.css';
import Navbar from './component/navbar';
import Home from './component/Home';
import Skills from './component/Skills';
import Project from './component/project';
import Contact from './component/Contact';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='AppInnerItems'>
      <Home/>
      <Skills/>
      <Project/>
      <Contact/>
      </div>
    </div>
  );
}

export default App;
