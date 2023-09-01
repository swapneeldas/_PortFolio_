import React from 'react'
const Contact = () => {
  return (
    <section >
    <div className='h-[100vh] flex items-center justify-center'>
        <form className='ContactForm p-12 rounded-xl  border-green-500 border-[5px] outline-none max-sm:w-full'>
            <p className='text-2xl font-bold mb-4 mx-1'>GET IN TOUCH</p>
            <span className='relative w-full h-fit my-1'>
            <lable className='lable'>Name:</lable>
            <input type='text' className='input-text p-3 w-full' id='name'  placeholder='Enter your Name'/>
            </span>
            <div className='relative w-full h-fit my-2'>
            <lable className='lable'>Email:</lable>
            <input type='Email'className='input-text p-3 w-full' placeholder='Enter your Email' id='Email'/>
            </div>
            <div className='relative w-full h-fit my-1'>
            <lable className='lable'>Message:</lable>
            <textarea  className="input-text texta p-3 w-full"  placeholder='Enter your message' id='message'/>
            </div>
      
              <button className='formbtn w-fit p-3'>Send</button>
        </form>
    </div> 
    </section>
  )
}

export default Contact