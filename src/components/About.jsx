import React, { useEffect } from 'react'
import './About.css';
import Ayaz from './data/Images/About/Ayaz.jpg'
import Aos from 'aos';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const About = () => {
  useEffect(()=>{
    Aos.init({duration: '2000'})
  },[]);

  const [typeEffect] = useTypewriter({
    words : [`I'm Ayaz Ahmad`, `I'm front end developer`,`I'm Website Developer (React js)`],
    loop : {},
    typeSpeed : 100,
    deleteSpeed : 50
  })
  return (
    <div className='container about'>
    <h1>Summery</h1>
    <div className="about_main">
      <div className="about_left">
      <div className="about_image" data-aos="zoom-in-up">
        <img src={Ayaz} alt="profile" width={300} height={400} className='about_img' />
      </div>
      </div>
      <div className="about_right" data-aos="zoom-in-up">
      <h2 className='about_heading'>Hello! <br /> {typeEffect}</h2>
      <p className='about_para'>Results-driven React.js Developer with a foundation in web
      development. Freelance experience in creating templates
      using HTML, CSS, Bootstrap, and jQuery, I transitioned to a
      React.js Developer role as a remote intern. Demonstrating
      a keen aptitude for front-end development, I have been
      contributing to dynamic and responsive web applications.
      <br /><br />
      Currently serving as a React.js Intern, Known for my
      attention to detail and problem-solving abilities, I am
      passionate about crafting user-centric solutions that meet
      both technical and business requirements</p>
      </div>
      </div>
      
    </div>
  )
  }

export default About;
