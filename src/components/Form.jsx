import React, { useEffect, useState, } from 'react'
import './Form.css'
import { addData } from './Store/StoreSlice/StoreSlice'
import Aos from 'aos'
import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast'


const Form = () => {
  const[data, setData] = useState({
    name : "",
    email : "",
    massage : ""
  });
const formdata = useSelector((state)=> state.store.data);

const dispatch = useDispatch()

  const handleInput = (e)=>{
    const name = e.target.name;
    const value = e.target.value
//  const {name, value} = e.target.value;
 setData((preVal)=>{
return {
  ...preVal,
  [name]: value
 }
 })
 
  };
  const submitData = (e)=>{
    e.preventDefault();
    if(!data.name || !data.email|| !data.massage ){
      toast.error('please fill the form first')
    } else{
      dispatch(addData(data));
      toast.success(`Thank you ${data.name} to contact me. We will you response on your email ${data.email} soon and your massage "${data.massage}" was successful recived.`, {duration: 10000})
      setData({
        name : '',
        email : '',
        massage:''
      })
    }
  }
    useEffect(()=>{
        Aos.init({duration: '2000'})
    },[])
    
  return (
    <div>
    <div className='footer' data-aos="zoom-in-down">
    <div className="footer-right">
          <div className="form">
          <input type="text" placeholder='Name' name='name' value={data.name} className='name' autoComplete='off'  onChange={handleInput}/>
          <input type="email" placeholder='email' name='email' value={data.email} className='email'  autoComplete='off' onChange={handleInput}/>
          <textarea name="massage" id="" rows={10} cols={30} className='massage' value={data.massage}  placeholder='Type your massage here' autoComplete='off' onChange={handleInput}/>
          <button className='button' onClick={submitData} >Submit</button>
          </div>
    </div>
    </div>
    </div>
  )
}

export default Form;
