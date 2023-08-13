import React from 'react'
let SkillCardStyle={
backgroundSize: "cover",
backgroundPosition: 'center',
backgroundRepeat: "no-repeat"}
let Frontendskills=[{
  Name:'HTML',
  backgroundImage : "url(https://png.pngtree.com/thumb_back/fh260/background/20220211/pngtree-html-html-internet-code-photo-image_2685721.jpg)",
},
{
  Name:'CSS',
  backgroundImage : "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO0hWe64Xy9hmQQug2OkWqEJjbyT0rlBEOZw&usqp=CAU)",
},
{
  Name:'JavaScript',
  backgroundImage : "url(https://e0.pxfuel.com/wallpapers/316/193/desktop-wallpaper-javascript.jpg)",
},

{
  Name:'React',
  backgroundImage : "url(https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png)",
},
{
  Name:'bootStrap',
  backgroundImage : "url(https://user-images.githubusercontent.com/34319922/39473646-82767980-4d58-11e8-90a9-696182b80751.png)",
},
{
  Name:'TailWind',
  backgroundImage : "url(https://vercel.com/api/dynamic-og?title=Tailwind%20CSS)",
},

]
let Backendskills=[
  {
    Name:'NodeJs',
    backgroundImage : "url(https://i0.wp.com/css-tricks.com/wp-content/uploads/2022/01/node-js-logo.png?fit=1200%2C600&ssl=1)",
  },
  {
    Name:'MongoDb',
    backgroundImage : "url(https://pbs.twimg.com/profile_images/1452637606559326217/GFz_P-5e_400x400.png)",
  },
  {
    Name:'Express',
    backgroundImage : "url(https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png)",
  },
]
let devtolls=[{
  Name:'Git/GitHub',
  backgroundImage : "url(https://cdn.hashnode.com/res/hashnode/image/upload/v1620225137412/xCsadQY1f.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp)",
},]
const Skills = () => {

  return (
    <section id='skillSection'>
    <h1 className="text-3xl font-bold text-white mt-14 mb-8 mx-3">Frontend</h1>
    <div className='Skills'>
    {Frontendskills.map((item)=>{
      return(
        <div className='SkillCard' style={{...SkillCardStyle,backgroundImage :item.backgroundImage}}>
        <h1>{item.Name}</h1>
        <p>{item.Star}</p>
    </div>
      );
    })
    }
    </div>
    <h1 className="text-3xl font-bold text-white mt-14 mb-8 mx-3">Backend</h1>
    <div className='Skills'>
    {Backendskills.map((item)=>{
      return(
        <div className='SkillCard' style={{...SkillCardStyle,backgroundImage :item.backgroundImage}}>
        <h1>{item.Name}</h1>
        <p>{item.Star}</p>
    </div>
      );
    })
    }
    </div>
    <h1 className="text-3xl font-bold text-white mt-14 mb-8 mx-3">Tolls</h1>
    <div className='Skills'>
    {devtolls.map((item)=>{
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