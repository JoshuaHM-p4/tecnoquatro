import React from 'react'
import LandingStudents from '../components/LandingStudents';
import '../styles/Landing.scss'
import { IoMdMenu } from "react-icons/io";
import LandingForms from '../components/LandingForms';
import LandingExtra from '../components/LandingExtra';

const Landing = () => {
  return (
    <div className='landing'>
      {/* absoulute */}
      <header className='header'>
        <nav className='nav'>
            <img src="/images/yellow-logo.png" alt="" className='logo'/>
            <IoMdMenu className='menu-icon'/>
            <ul className='nav-links'>
                <li className='.li'><a href='#'>Home</a></li>
                <li className='.li'><a href='#'>Officers</a></li>
                <li className='.li'><a href="#">Login</a></li>
            </ul>
        </nav>
      </header>
      {/* end absoulute */}
      <main className='intro-page'>
        <div className='intro'>
          <div className='intro-text'>
            <div>TECHNO</div>
            <div className='span'>QUATRO</div>
          </div>
        </div>
      </main>
      <LandingStudents />
      <LandingForms />
      <LandingExtra />
      <main className='login-page'>

      </main>
    </div>
  )
}

export default Landing
