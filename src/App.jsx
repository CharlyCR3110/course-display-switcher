import { useState } from 'react'
import './styles/App.css'
import CourseList from './components/CourseList'

function App () {
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

  return (
    <section className='courses'>
      <CourseList courses={courses} />
    </section>
  )
}

export default App
