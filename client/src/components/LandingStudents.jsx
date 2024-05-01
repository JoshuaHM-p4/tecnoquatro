import React, { useState, useEffect } from 'react';
import '../styles/LandingStudents.scss'

// Store description data
const descriptionData = {
  "default": "United, we <strong>Celestial Kins</strong> form an unstoppable cosmic force achieving greatness beyond mere ideas.",
  "Solar": "The <span style='color: #FFAA05; font-weight: bold;'>Solar</span> class officers are our guiding stars, illuminating the path for our cosmic endeavors with their leadership and vision.",
  "Nebula": "The <span style='color: #FB4BFF; font-weight: bold;'>Nebula</span> creators craft visuals and presence, meticulously documenting our cosmic knowledge and moderating our celestial discourse.",
  "Stardust": "The <span style='color: #27D8FF; font-weight: bold;'>Stardust</span> are the diligent curators, meticulously documenting our cosmic knowledge and moderating our celestial discourse.",
  "Vortex": "The <span style='color: #06FA76; font-weight: bold;'>Vortex</span> subject masters, with their cosmic domains, wielding their expertise to tackle the most complex celestial challenges."
};

const LandingStudents = () => {
    // State variables to manage category and student data
    const [category, setCategory] = useState('All'); // Default category is 'All'
    const [studentData, setStudentsData] = useState([]); // Initially, no student data
    // Fetch student data when the component mounts
    useEffect(() => {
        const fetchStudentsData = async () => {
          try {
            const res = await fetch('./students.json');
            const data = await res.json();
            setStudentsData(data);
          } catch (error) {
            console.error('Error fetching JSON data:', error);
          }
        }
        fetchStudentsData();
    }, []); // Empty dependency array ensures this runs only once when the component mounts


    const handleCategoryClick = (category) => {
      setCategory(category); // Update the category state with the clicked category
    };

    const findMembersByCategory = (category) => {
      // If the selected category is 'All', return all members except those with empty names
      if (category === 'All') {
        // Filter out students with empty names
        return studentData.filter(student => student.name.trim() !== "");
      } else {
        // Otherwise, return members whose categories include the selected category

        // Go through each student
        return studentData.map(student => {
          // Check if the student's categories include the selected category
          if (student.categories.includes(category)) {
            // If the student belongs to the selected category, modify their data

            // Find the index of the selected category in the student's categories
            const index = student.categories.indexOf(category);

            // Get the role that corresponds to the selected category
            // Put it in an array because our function expects an array of roles
            const filteredRoles = student.roles[index] ? [student.roles[index]] : [];

            // Return the student's data with roles filtered for the selected category
            return {
              ...student, // Keep all original student data
              roles: filteredRoles, // Update roles to include only the role for the selected category
              categories: [category] // Update categories to only include the selected category
            };
          } else {
            // If the student doesn't belong to the selected category, ignore them
            return null;
          }
        }).filter(Boolean); // Remove any students that were not part of the selected category
      }
    };

    // Get the members to show based on the selected category
    const membersToShow = findMembersByCategory(category);

    console.log(membersToShow);



  return (
    <main className='landing-students'>

      <div className='students-intro-text-container'>
        <p className='students-intro-head'>Greet the Quatro Celestials:</p>
        <p className='students-intro-text1'>
          Our diverse TecnoQuatro Extraterrestrials transcends boundaries, fusing celestial talents.
        </p>
        <p className='students-intro-text2'>
          <p className='students-intro-text2' dangerouslySetInnerHTML={{ __html: descriptionData[category] || descriptionData.default }} />
        </p>
      </div>

      <nav className='students-category-nav'>
        {/* Display the category buttons */}
        <ul>
          <li className={category === 'All' ? 'active All' : 'All'} onClick={() => handleCategoryClick('All')}>All</li>
          <li className={category === 'Solar' ? 'active Solar' : 'Solar'} onClick={() => handleCategoryClick('Solar')}>Solar</li>
          <li className={category === 'Nebula' ? 'active Nebula' : 'Nebula'} onClick={() => handleCategoryClick('Nebula')}>Nebula</li>
          <li className={category === 'Stardust' ? 'active Stardust' : 'Stardust'} onClick={() => handleCategoryClick('Stardust')}>Stardust</li>
          <li className={category === 'Vortex' ? 'active Vortex' : 'Vortex'} onClick={() => handleCategoryClick('Vortex')}>Vortex</li>
        </ul>
      </nav>

      {/* Display the members */}
      <div className='students-avatars-grid'>
        {membersToShow.map((student, index) => (
            <div key={index} className='students-avatar'>
              {/* Display student avatar */}
              <img src={student.img} alt='' />
              <div className='student-info-container'>
                {/* Display student name */}
                <p className='student-name'>{student.name}</p>
                {/* Display student roles based on the selected category */}
                <p className='student-role'>
                  {/* Display all roles if category is 'All', otherwise display roles for the selected category */}
                  {category === 'All' ? student.roles.join(', ') : student.roles.filter(role => student.categories.includes(category)).join(', ')}
                </p>
          </div>
        </div>
        ))}
      </div>
    </main>
  )
}

export default LandingStudents
