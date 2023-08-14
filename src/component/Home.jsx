import React from 'react'

const Home = () => {
  return (
    <section id="Home" className='flex max-2xl:flex-col-reverse'>
    <div className="HomeText overflow-hiddenrs max-2xl:mx-auto">
        <h1 className='text-center font-bold text-2xl'> cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque</h1>
        <p className='text-center text-lg'>nisi porta lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget felis eget nunc lobortis mattis aliquam faucibus purus in massa tempor nec feugiat nisl pretium fusce id velit ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt</p>
    </div>
    <div className='HomeImage mx-auto w-fit max-2xl:w-full max-2xl:flex max-2xl:justify-center'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVa3RfAx2l8nUyfhKkYlfr7egFbloYmgh-V3DhNGuW4w&s'></img>
    </div>
    </section>
  )
}

export default Home