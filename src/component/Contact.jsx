import React from 'react'

const Contact = () => {
  return (
    <section id="Contact">
    <h1>Contact</h1>
    <div>
        <form className='ContactForm'>
            <input type='text' placeholder='Enter your Name' id='name'/>
            <input type='Email' placeholder='Enter your Email' id='Email'/>
            <textarea rows="50" placeholder='Enter your message' id='message'/>
        <button className='formbtn'>Send</button>
        </form>
    </div> 
    </section>
  )
}

export default Contact