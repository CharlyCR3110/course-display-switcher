import React from 'react'
import CourseBase from './CourseBase'
import '../styles/Common.css'

const CourseCard = ({ courseImage, courseName, courseArea, percentageCompleted }) => {
  return (
    <CourseBase
      courseImage={courseImage}
      courseName={courseName}
      courseArea={courseArea}
      percentageCompleted={percentageCompleted}
      containerClass='card'
      imageClass='card-image'
      nameClass='card-name'
      areaClass='card-area'
      progressBarClass='card-progress-bar'
      progressClass='card-progress'
    />
  )
}

export default CourseCard
