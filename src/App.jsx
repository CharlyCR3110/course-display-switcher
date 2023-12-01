import './styles/App.css'
import CourseList from './components/CourseList'
import { useState } from 'react'

const courses = [
  {
    id: 1,
    image: 'https://www.open.edu/openlearn/pluginfile.php/3277384/tool_ocwmanage/articletext/0/become_a_student_inline.jpg',
    name: 'REACT COURSE',
    area: 'Web Development',
    percentage: 0
  },
  {
    id: 2,
    image: 'https://www.open.edu/openlearn/pluginfile.php/3277384/tool_ocwmanage/articletext/0/become_a_student_inline.jpg',
    name: 'LINEAR ALGEBRA',
    area: 'Mathematics',
    percentage: 81
  },
  {
    id: 3,
    image: 'https://www.open.edu/openlearn/pluginfile.php/3277384/tool_ocwmanage/articletext/0/become_a_student_inline.jpg',
    name: 'PYTHON COURSE',
    area: 'Programming',
    percentage: 21
  },
  {
    id: 4,
    image: 'https://www.open.edu/openlearn/pluginfile.php/3277384/tool_ocwmanage/articletext/0/become_a_student_inline.jpg',
    name: 'DATA SCIENCE',
    area: 'Data Analysis',
    percentage: 40
  },
  {
    id: 5,
    image: 'https://www.open.edu/openlearn/pluginfile.php/3277384/tool_ocwmanage/articletext/0/become_a_student_inline.jpg',
    name: 'DATA STRUCTURES',
    area: 'Programming',
    percentage: 100
  }
]

function App () {
  const [displayMode, setDisplayMode] = useState('cards')
  const [showDropdown, setShowDropdown] = useState(false)

  const handleDisplayChange = (mode) => {
    setDisplayMode(mode)
  }

  const dropbtnClassName = showDropdown ? 'dropbtn active' : 'dropbtn'
  const dropdownContentClassName = showDropdown ? 'dropdown-content show' : 'dropdown-content'

  return (
    <section className='courses'>
      <div className='dropdown'>
        <button className={dropbtnClassName} onClick={() => setShowDropdown(!showDropdown)}>Display Mode</button>
        <div className={dropdownContentClassName}>
          <button onClick={() => handleDisplayChange('cards')} className='dropdown-item'>Card</button>
          <button onClick={() => handleDisplayChange('lists')} className='dropdown-item'>List</button>
        </div>
      </div>
      <CourseList courses={courses} displayStyle={displayMode} />
    </section>
  )
}

export default App
