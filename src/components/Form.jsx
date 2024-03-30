import React, { useEffect } from 'react'
import './Form.css'
import Aos from 'aos'
const Form = () => {
    useEffect(()=>{
        Aos.init({duration: '2000'})
    },[])
    
  return (
    <div>
    <div className='footer' data-aos="zoom-in-down">
    <div className="footer-right">
          <div className="form">
          <input type="text" placeholder='Name' className='name' autoComplete='off' />
          <input type="email" placeholder='email' className='email'  autoComplete='off'/>
          <textarea name="massage" id="" rows={10} cols={30} className='massage' placeholder='Type your massage here' autoComplete='off '></textarea>
          <button className='button' >Submit</button>
          </div>
    </div>
    </div>
    </div>
  )
}

export default Form;
