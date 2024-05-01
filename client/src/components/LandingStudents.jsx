import React, { useState, useEffect } from 'react';
import '../styles/LandingStudents.scss'

const LandingStudents = () => {
    const [category, setCategory] = useState('All');
    const [studentData, setStudentsData] = useState([]);

    // State variables to manage category and student data
    const [category, setCategory] = useState('All'); // Default category is 'All'
    const [studentData, setStudentsData] = useState([]); // Initially, no student data

    // Fetch student data when the component mounts
    useEffect(() => {
      fetch('./students.json') // Fetch the JSON file
        .then(response => response.json()) // Parse the JSON response
        .then(data => {
          // Set the fetched data to the state variable studentsData
          setStudentsData(data);
        })
        .catch(error => {
          // Log any errors that occur during fetching
          console.error('Error fetching JSON data:', error);
        });
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
          United, we Celestial Kins form an unstoppable cosmic force achieving greatness beyond mere ideas
        </p>
      </div>

      <nav className='students-category-nav'>
        {/* Display the category buttons */}
        <ul>
          <li onClick={() => handleCategoryClick('All')}>All</li>
          <li onClick={() => handleCategoryClick('Solar')}>Solar</li>
          <li onClick={() => handleCategoryClick('Nebula')}>Nebula</li>
          <li onClick={() => handleCategoryClick('Stardust')}>Stardust</li>
          <li onClick={() => handleCategoryClick('Vortex')}>Vortex</li>
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
