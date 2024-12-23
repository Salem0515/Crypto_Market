import React from 'react'
import './Footer.css'
import bloby from '../../Assets/bloby.png';
import bloby2 from '../../Assets/bloby_2.png';
import bloby3 from '../../Assets/bloby_3.png';
import logo from '../../Assets/logo.png';


const Footer = () => {
  return (
    <div>
      <img className='bloby' src={bloby} alt="" />
      <img className='bloby_2' src={bloby2} alt="" />
      <img className='bloby_3' src={bloby3} alt="" />
      <div className="join">
        <h1>Join <br />Gravity Team</h1>
            <p>Join our community of innovators, problem solvers and owners who apply scientific discovery techniques to make crypto markets a better place for everyone. <br /> <br /> As we emphasize it in our name – Gravity Team, we are a team. A team of bright, talented people, each masters of their specialty, curious about the world and eager to solve the new exciting cryptocurrency market problems, build cool stuff and have fun whilst doing so! <span>Learn more about working with us {"->"} </span></p>
      </div>
    <div className="contact">
      <h1>Contact Us</h1>
      <p>We are always open to discuss new value-adding partnerships. Do reach out if you are an exchange or a project looking for liquidity; an algorithmic trader or a software developer looking to improve the markets with us or just have a great idea you can’t wait to share with us!</p>
      <button className='Get'>Get In Touch</button>
    </div>
    <div className="footer">
      <ul>
        <li>Gravity Team</li>
        <li>About Us</li>
        <li>Work with Us</li>
        <span>Terms of Use & Privacy Policy</span>
      </ul>
      <ul>
        <li><img className='bloby' src={logo} alt="" /></li>
        <li>©2022 Gravity Team. All Rights Reserved <br /> <br /> <span>programmed by Mohamed Hussein Salem</span></li>
      </ul>
    </div>


    </div>
  )
}

export default Footer
