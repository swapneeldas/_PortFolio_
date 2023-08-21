import React from 'react'
let SkillCardStyle={
  backgroundSize: "cover",
  backgroundPosition: 'center',
  backgroundRepeat: "no-repeat"}
let projects=[{Name:"Typing App",img:""},{Name:"Simon Game",img:""},{Name:`Calculator`,img:""}]
const Project = () => {
  return (
    <section id='ProjectSection'>
    <h1 className='text-2xl font-bold text-white mt-14 mb-8 mx-3'>project</h1> 
    <div className='Skills max-xl:flex max-xl:overflow-y-auto max-xl:flex-nowrap'>
    {projects.map((item)=>{
      return(
        <div className='SkillCard' style={{...SkillCardStyle,backgroundImage :item.backgroundImage}}>
        <h1>{item.Name}</h1>
        <p>{item.Star}</p>
    </div>
      );})}
    </div>
    </section>
  )
}

export default Project