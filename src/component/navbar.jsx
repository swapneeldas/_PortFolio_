import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
  return (
    <div className="CompleteNavbar">
       <div className='design'>
        <div className='designUpper'></div>
        <div className='designLower'></div>
       </div>
        <ul className="LeftUL flex space-x-8">
        <a href='#Home'><li>Home</li></a>
        <a href='#skillSection'><li>Skill</li></a>
        <a href='#ProjectSection'><li>Projects</li></a>
        <a href='#Contact'><li>Contact</li></a> 
        </ul>
        <div className='hamberger 2xl:hidden'><FontAwesomeIcon icon={faBars} size='2xl' className='hambtn'/></div>
    </div>
  )
}

export default Navbar