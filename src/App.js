import './App.css';
import './input.css'
import Navbar from './component/navbar';
import Home from './component/Home';
import Skills from './component/Skills';
import Project from './component/project';
import Contact from './component/Contact';
import Sidebar from './component/sidebar';
import State from './context/state';

function App() {
  return (
    <State>
    <div className="App">
      <Navbar/>
      <Sidebar/>
      <div className='AppInnerItems max-2xl:w-11/12'>
      <Home/>
      <Skills/>
      <Project/>
      <Contact/>
      </div>
    </div>
    </State>
  );
}

export default App;
