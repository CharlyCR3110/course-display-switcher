import React from 'react'
import '../styles/CourseCard.css'

const CourseCard = ({ courseImage, courseName, courseArea, percentageCompleted }) => {
  const progressStyles = {
    width: `${percentageCompleted}%`
  }

  return (
    <section className='card'>
      <img src={courseImage} alt='Course' className='card-image' />
      <h3 className='card-name'>{courseName}</h3>
      <small className={`card-area ${courseArea.toLowerCase().replace(' ', '-')}`}>{courseArea}</small>
      <div className='card-progress-bar'>
        <div className='card-progress' style={progressStyles} />
      </div>

    </section>
  )
}

export default CourseCard
