import React from 'react'

const Home = () => {
  return (
    <section id="Home" className='flex max-2xl:flex-col-reverse'>
    <div className="HomeText overflow-hiddenrs max-md:my-10 max-2xl:mx-auto">
        <p className='text-left font-bold text-6xl my-8 mx-20 max-sm:text-center max-sm:mx-auto'> <p className='mt-auto'>Hi, </p><p>My name is <p className='text-yellow-400 font-semibold my-80'>Swapneel</p> </p><p>and I am a </p><p>Web Developer</p></p>
       
    </div>
 
        <img  className='min-w-[30rem] h-[30rem] mx-auto mr-85 text-5xl max-sm:min-w-[15rem] max-sm:max-h-[19rem]' src='https://byteparity.com/sites/default/files/styles/service_detail_one/public/2020-01/Laravel-Development.png?itok=S59RwYu5'></img>
    </section>
  )
}

export default Home