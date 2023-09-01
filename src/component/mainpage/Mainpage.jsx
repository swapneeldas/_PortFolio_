import React from 'react'
import Home from '../Home';
import Sidebar from '../sidebar';
import Skills from '../Skills';
import Project from '../project';
const Mainpage = () => {
  return (
    <div>
      <Sidebar/>
      <div className='AppInnerItems max-2xl:w-11/12'>
      <Home/>
      <Skills/>
      <Project/>
    </div>
    </div>
  )
}

export default Mainpage