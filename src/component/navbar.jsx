import React from 'react'

const Navbar = () => {
  return (
    <div className="CompleteNavbar">
        <ul className="LeftUL">
        <a href='#Home'><li>Home</li></a>
        <a href='#skillSection'><li>Skill</li></a>
        <a href='#ProjectSection'><li>Projects</li></a>
        <a href='#Contact'><li>Contact</li></a> 
        </ul>
    </div>
  )
}

export default Navbar