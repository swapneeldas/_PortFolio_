import React, { useContext } from 'react'
import Context from '../context/context';
const Sidebar = () => {
  const context=useContext(Context);
  let{sidebar,setsidebar}=context;
  // max-2xl:hidden
  return (
    <div className={`sidebar space-y-8 ${(sidebar)?`max-2xl:left-[-100%]`:'right-[5%]'}  max-xl:w-1/3 max-lg:w-2/5 max-sm:w-8/12`}>
    <div className='my-10 mb-20 mx-3 pb-8 pt-4 rounded-md innersidebar'>
    <div className='flex flex-col sidebarhome'>
    <p className='my-3 mx-3 text-xl font-medium'>Navigation</p>
    <hr className=' w-5/6 mx-3'/>
    <div className='text-white space-y-8 space-x-5 '>
        <p></p>
        <p className='cursor-pointer text-lg relative bottom-0 transition-all duration-200 hover:text-pink-300  hover:bottom-1 hover:scale-105'><a href='#Home'><i className="fa-solid fa-house w-5 text-lg"></i> Home</a></p>
        <p className='cursor-pointer text-lg relative bottom-0 transition-all duration-200 hover:text-pink-300  hover:bottom-1 hover:scale-105'><a href='#skillSection'><i className="fa-solid fa-book w-5 text-lg"></i> Skills</a></p>
        <p className='cursor-pointer text-lg relative bottom-0 transition-all duration-200 hover:text-pink-300  hover:bottom-1 hover:scale-105'><a href='#ProjectSection'><i className="fa-regular fa-bars-progress w-5 text-lg"></i> Project</a></p>
    </div>
    <p className='my-3 mx-3 mt-12 text-xl font-medium'>Socials</p>
    <hr className=' w-5/6 mx-3'/>
    <div className='text-white space-y-8 space-x-5'>
        <p></p>
        <p className='cursor-pointer text-lg relative bottom-0 transition-all duration-200 hover:text-pink-300  hover:bottom-1 hover:scale-105'><span><i className="fa-brands fa-square-instagram w-5 text-lg"></i>Instagram</span> </p>
        <p className='cursor-pointer text-lg relative bottom-0 transition-all duration-200 hover:text-pink-300  hover:bottom-1 hover:scale-105'><span><i className="fa-brands fa-linkedin w-5 text-lg"></i> Linkedin</span></p>
        <p className='cursor-pointer text-lg relative bottom-0 transition-all duration-200 hover:text-pink-300  hover:bottom-1 hover:scale-105'><span><i className="fa-brands fa-github w-5 text-lg"></i> GitHub</span></p>
    </div>
    <p className='my-3 mx-3 mt-12 text-xl font-medium'>Projects</p>
    <hr className=' w-5/6 mx-3'/>
    <div className='text-white space-y-8 space-x-5'>
        <p></p>
        <p className='cursor-pointer text-lg relative bottom-0 transition-all duration-200 hover:text-pink-300  hover:bottom-1 hover:scale-105'><span><i className="fa-solid fa-keyboard w-5 text-lg mr-1"></i> Typing Website</span></p>
        <p className='cursor-pointer text-lg relative bottom-0 transition-all duration-200 hover:text-pink-300  hover:bottom-1 hover:scale-105'><span><i className="fa-solid fa-clipboard w-5 text-lg"></i> KeepNote</span></p>
        <p className='cursor-pointer text-lg relative bottom-0 transition-all duration-200 hover:text-pink-300  hover:bottom-1 hover:scale-105'><span><i className="fa-solid fa-gamepad w-5 text-lg"></i> Simon</span></p>
        <p className='cursor-pointer text-lg relative bottom-0 transition-all duration-200 hover:text-pink-300  hover:bottom-1 hover:scale-105'><span><i className="fa-solid fa-calculator w-5 text-lg"></i> Calculator</span></p>
        <p className='cursor-pointer text-lg relative bottom-0 transition-all duration-200 hover:text-pink-300  hover:bottom-1 hover:scale-105'><span><i className="fa-solid fa-stopwatch w-5 text-lg"></i> Stop Watch</span></p>
    </div>
    </div>
    </div>
    </div>
    
  )
}

export default Sidebar;