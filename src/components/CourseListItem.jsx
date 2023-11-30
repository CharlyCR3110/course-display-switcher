import '../styles/CourseListItem.css'

const CourseListItem = ({ courseImage, courseName, courseArea, percentageCompleted }) => {
  const progressStyles = {
    width: `${percentageCompleted}%`
  }

  return (
    <section className='list'>
      <img src={courseImage} alt='Course' className='list-image' />
      <h3 className='list-name'>{courseName}</h3>
      <small className={`list-area ${courseArea.toLowerCase().replace(' ', '-')}`}>{courseArea}</small>
      <div className='list-progress-bar'>
        <div className='list-progress' style={progressStyles} />
      </div>

    </section>
  )
}

export default CourseListItem
