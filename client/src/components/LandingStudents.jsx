import React from 'react'
import '../styles/LandingStudents.scss'

const LandingStudents = () => {

  const mockData = [
    {
      img: '/images/cesca.jpg',
      name: 'Cesca',
      role: 'Purcom'
    },
    {
      img: '/images/cesca.jpg',
      name: 'Cesca',
      role: 'Purcom'
    },
    {
      img: '/images/cesca.jpg',
      name: 'Cesca',
      role: 'Purcom'
    },
    {
      img: '/images/cesca.jpg',
      name: 'Cesca',
      role: 'Purcom'
    },
    {
      img: '/images/cesca.jpg',
      name: 'Cesca',
      role: 'Purcom'
    },
    {
      img: '/images/cesca.jpg',
      name: 'Cesca',
      role: 'Purcom'
    },
    {
      img: '/images/cesca.jpg',
      name: 'Cesca',
      role: 'Purcom'
    },
    {
      img: '/images/cesca.jpg',
      name: 'Cesca',
      role: 'Purcom'
    },
    {
      img: '/images/cesca.jpg',
      name: 'Cesca',
      role: 'Purcom'
    },
    {
      img: '/images/cesca.jpg',
      name: 'Cesca',
      role: 'Purcom'
    },
    {
      img: '/images/cesca.jpg',
      name: 'Cesca',
      role: 'Purcom'
    }
  ]

  return (
    <main className='landing-students'>
      <div className='students-intro-text-container'>
        <p className='students-intro-head'>Greet the Quatro Celestials:</p>
        <p className='students-intro-text1'>
          Our diverse TecnoQuatro Extraterrestrials transcends boundaries, fusing celestial talents.
        </p>
        <p className='students-intro-text2'>
          United, we Celestial Kins form an unstoppable cosmic force achieving greatness beyond mere ideas
        </p>
      </div>
      <nav className='students-category-nav'> 
        <ul>
          <li className='students-category'>All</li>
          <li className='students-category'>Solar</li>
          <li className='students-category'>Nebula</li>
          <li className='students-category'>Stardust</li>
          <li className='students-category'>Vortex</li>
        </ul>
      </nav>
      <div className='students-avatars-grid'>
        {mockData.map((item) => (
        <div className='students-avatar'>
          <img src={item.img} alt="" />
          <div className='student-info-container'>
            <p className='student-name'>{item.name}</p>
            <p className='student-role'>{item.role}</p>
          </div>
        </div>
        ))}
      </div>
    </main>
  )
}

export default LandingStudents
