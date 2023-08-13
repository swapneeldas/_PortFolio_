import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import {faHouse,faBook,faBarsProgress,faLinkedin} from '@fortawesome/free-solid-svg-icons'
const Sidebar = () => {
  return (
    <div className='space-y-8 sidebar'>
    <div className='my-14 mx-3 pb-8 pt-4 rounded-md innersidebar'>
    <div className='flex flex-col sidebarhome'>
    <p className='my-3 mx-3'>Navigation</p>
    <hr className=' w-5/6 mx-3'/>
    <div className='text-white space-y-8 space-x-5'>
        <p></p>
        <p className='cursor-pointer'><a href='#Home'><FontAwesomeIcon icon={faHouse} style={{color: "#afd2d9",}} /> Home</a></p>
        <p className='cursor-pointer'><a href='#skillSection'><FontAwesomeIcon icon={faBook} style={{color: "#afd2d9",}}/> Skills</a></p>
        <p className='cursor-pointer'><a href='#ProjectSection'><FontAwesomeIcon icon={faBarsProgress} style={{color: "#afd2d9",}}/> Project</a></p>
    </div>
    <p className='my-3 mx-3 mt-12'>Socials</p>
    <hr className=' w-5/6 mx-3'/>
    <div className='text-white space-y-8 space-x-5'>
        <p></p>
        <p className='cursor-pointer'><i class="fa-brands fa-square-instagram"></i> Instagram</p>
        <p className='cursor-pointer'><i class="fa-brands fa-linkedin"></i> Linkedin</p>
        <p className='cursor-pointer'><i class="fa-brands fa-github"></i> GitHub</p>
    </div>
    <p className='my-3 mx-3 mt-12'>Projects</p>
    <hr className=' w-5/6 mx-3'/>
    <div className='text-white space-y-8 space-x-5'>
        <p></p>
        <p className='cursor-pointer'><i class="fa-solid fa-keyboard"></i> Typing Website</p>
        <p className='cursor-pointer'><i class="fa-solid fa-clipboard"></i> KeepNote</p>
        <p className='cursor-pointer'><i class="fa-solid fa-gamepad"></i> Simon</p>
        <p className='cursor-pointer'><i class="fa-solid fa-calculator"></i> Calculator</p>
        <p className='cursor-pointer'><i class="fa-solid fa-stopwatch"></i> Stop Watch</p>
    </div>
    </div>
    </div>
    </div>
    
  )
}

export default Sidebar;