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
  const [displayMode, setDisplayMode] = useState('Card')
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
          <button onClick={() => handleDisplayChange('Card')}>Card</button>
          <button onClick={() => handleDisplayChange('List')}>List</button>
        </div>
      </div>
      <CourseList courses={courses} displayMode={displayMode} />
    </section>
  )
}

export default App
