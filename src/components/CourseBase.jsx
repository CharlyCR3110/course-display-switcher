import React from 'react'

const CourseBase = ({ courseImage, courseName, courseArea, percentageCompleted, containerClass, imageClass, nameClass, areaClass, progressBarClass, progressClass }) => {
  const progressStyles = {
    width: `${percentageCompleted}%`
  }

  return (
    <section className={containerClass + ' common-style'}>
      <img src={courseImage} alt='Course' className={imageClass + ' common-image'} />
      <h3 className={nameClass}>{courseName}</h3>
      <small className={`${areaClass} ${courseArea.toLowerCase().replace(' ', '-')} common-area`}>{courseArea}</small>
      <div className={progressBarClass + ' common-progress-bar'}>
        <div className={progressClass + ' common-progress'} style={progressStyles} />
      </div>
    </section>
  )
}

export default CourseBase
