import React, { useContext } from 'react'
import Context from '../context/context'
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
        <a href='#Home' className='text-lg font-semibold'><li>Home</li></a>
        <a href='#skillSection' className='text-lg font-semibold'><li>Skill</li></a>
        <a href='#ProjectSection' className='text-lg font-semibold'><li>Projects</li></a>
        </ul>
        <div className='ml-auto flex justify-center items-center mx-4'>
        <a href='#Contact' className='text-lg font-semibold bg-green-600 p-2 rounded-lg mx-44 max-sm:text-base'>Contact</a> 
        {/* <div className='hamberger 2xl:hidden mx-3 ml-5' onClick={change}><FontAwesomeIcon icon={faBars} size='2xl' className='hambtn'/></div> */}
        <div className='hamberger 2xl:hidden mx-3 ml-5' onClick={change}><div className='flex flex-col space-y-2' ><div className='ham w-8 bg-white h-1 rounded-sm relative' style={(!sidebar)?{transform:"translateY(5px) rotate(45deg) "}:{}}> </div> <div className={`w-8 bg-white h-1 rounded-sm ${(!sidebar)?`hidden`:null}`}></div> <div className='ham w-8 bg-white h-1 rounded-sm relative' style={(!sidebar)?{transform:"translateY(-1px) rotate(-45deg) "}:{}}></div> </div>  </div>
        </div>
    </div>
  )
}

export default Navbar