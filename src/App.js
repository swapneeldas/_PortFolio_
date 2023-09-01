import './App.css';
import './input.css';
import './Contacts.css';
import State from './context/state';
import Mainpage from './component/mainpage/Mainpage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Contact from './component/mainpage/Contact';
import Navbar from './component/navbar';
function App() {
  return (
    <Router>
    <State>
    <Navbar/>
    <div className="App">
    <Routes>
      <Route exact path='/' element={<Mainpage/>}/>
      <Route exact path='/Contact' element={<Contact/>}/>

    
   
      {/* <Navbar/>
      <Sidebar/>
      <div className='AppInnerItems max-2xl:w-11/12'>
      <Home/>
      <Skills/>
      <Project/>
      <Contact/>
      </div> */}
      </Routes>
    </div>
    </State>
    </Router>
  );
}

export default App;
