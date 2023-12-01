// components/CourseListItem.js
import React from 'react'
import CourseBase from './CourseBase'
import '../styles/Common.css'

const CourseListItem = ({ courseImage, courseName, courseArea, percentageCompleted }) => {
  return (
    <CourseBase
      courseImage={courseImage}
      courseName={courseName}
      courseArea={courseArea}
      percentageCompleted={percentageCompleted}
      containerClass='list'
      imageClass='list-image'
      nameClass='list-name'
      areaClass='list-area'
      progressBarClass='list-progress-bar'
      progressClass='list-progress'
    />
  )
}

export default CourseListItem
