import React from 'react'
import '../styles/Landing.scss'

const Landing = () => {
  return (
    <div className='landing'>
      {/* absoulute */}
      <header className='header'>
        <nav className='nav'>
            <img src="/yellow-logo.png" alt="" className='logo'/>
            <ul className='nav-links'>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Officers</a></li>
                <li><a href="#">Login</a></li>
            </ul>
        </nav>
      </header>
      {/* end absoulute */}
      <main className='intro-page'>
        <div className='intro'>
          <h1>Beyond Imagination</h1>
          <h1>Within Reach </h1>
        </div>
      </main>
      <main className='students-page'>

      </main>
      <main className='login-page'>

      </main>
    </div>
  )
}

export default Landing
