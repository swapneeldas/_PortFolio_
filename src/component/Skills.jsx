import React from 'react'
let SkillCardStyle={
backgroundSize: "cover",
backgroundPosition: 'center',
backgroundRepeat: "no-repeat"}
let skills=[{
  Name:'HTML',
  Star:"⭐⭐⭐⭐",
  backgroundImage : "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJXdub1xRPoFYM7op8N-ylpIOYw5eeHszO04q0bg7e1FEVLm136t169XMSw-Ljbq4f17M&usqp=CAU)",
},
{
  Name:'CSS',
  Star:"⭐⭐⭐⭐",
  backgroundImage : "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJXdub1xRPoFYM7op8N-ylpIOYw5eeHszO04q0bg7e1FEVLm136t169XMSw-Ljbq4f17M&usqp=CAU)",
},
{
  Name:'JavaScript',
  Star:"⭐⭐⭐⭐",
  backgroundImage : "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJXdub1xRPoFYM7op8N-ylpIOYw5eeHszO04q0bg7e1FEVLm136t169XMSw-Ljbq4f17M&usqp=CAU)",
},
{
  Name:'NodeJs',
  Star:"⭐⭐⭐⭐",
  backgroundImage : "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJXdub1xRPoFYM7op8N-ylpIOYw5eeHszO04q0bg7e1FEVLm136t169XMSw-Ljbq4f17M&usqp=CAU)",
},
{
  Name:'React',
  Star:"⭐⭐⭐⭐",
  backgroundImage : "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJXdub1xRPoFYM7op8N-ylpIOYw5eeHszO04q0bg7e1FEVLm136t169XMSw-Ljbq4f17M&usqp=CAU)",
},
{
  Name:'Express',
  Star:"⭐⭐⭐⭐",
  backgroundImage : "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJXdub1xRPoFYM7op8N-ylpIOYw5eeHszO04q0bg7e1FEVLm136t169XMSw-Ljbq4f17M&usqp=CAU)",
},
{
  Name:'bootStrap',
  Star:"⭐⭐⭐⭐",
  backgroundImage : "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJXdub1xRPoFYM7op8N-ylpIOYw5eeHszO04q0bg7e1FEVLm136t169XMSw-Ljbq4f17M&usqp=CAU)",
},
{
  Name:'TailWind',
  Star:"⭐⭐⭐⭐",
  backgroundImage : "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJXdub1xRPoFYM7op8N-ylpIOYw5eeHszO04q0bg7e1FEVLm136t169XMSw-Ljbq4f17M&usqp=CAU)",
},

]
const Skills = () => {

  return (
    <section id='skillSection'>
    <h1>Skills</h1>
    <div className='Skills'>
    {skills.map((item)=>{
      return(
        <div className='SkillCard' style={{...SkillCardStyle,backgroundImage :item.backgroundImage}}>
        <h1>{item.Name}</h1>
        <p>{item.Star}</p>
    </div>
      );
    })
    }
    </div>
    </section>
  )
}

export default Skills