import React, { useContext } from 'react'
import Context from '../context/context'
import {Link} from 'react-router-dom';
const Navbar = () => {
  const context=useContext(Context);
  let{sidebar,setsidebar}=context;
  function change(){
    setsidebar(!sidebar);
    console.log(sidebar);
  }
  return (
    <div className="CompleteNavbar">
       <div className='design'>
        <div className='designUpper'></div>
        <div className='designLower'></div>
       </div>
        <ul className="LeftUL flex space-x-8 max-md:hidden">
        <Link to='/' className='bef text-lg font-semibold'><a href='#ProjectSection'><li>Home</li></a></Link>
        <a href='#skillSection' className='bef text-lg font-semibold'><li>Skills</li></a>
        <a href='#ProjectSection' className='bef text-lg font-semibold'><li>Projects</li></a>
        </ul>
        <div className='ml-auto flex justify-center items-center mx-4'>
        <Link to='/Contact' className='text-lg font-semibold bg-green-600 p-2 rounded-lg mx-44 max-sm:text-base'>Contact</Link> 
        {/* <div className='hamberger 2xl:hidden mx-3 ml-5' onClick={change}><FontAwesomeIcon icon={faBars} size='2xl' className='hambtn'/></div> */}
        <div className='hamberger 2xl:hidden mx-3 ml-5' onClick={change}><div className='flex flex-col space-y-2' ><div className='ham w-8 bg-white h-1 rounded-sm relative' style={(!sidebar)?{transform:"translateY(5px) rotate(45deg) "}:{}}> </div> <div className={`w-8 bg-white h-1 rounded-sm ${(!sidebar)?`hidden`:null}`}></div> <div className='ham w-8 bg-white h-1 rounded-sm relative' style={(!sidebar)?{transform:"translateY(-1px) rotate(-45deg) "}:{}}></div> </div>  </div>
        </div>
    </div>
  )
}

export default Navbar