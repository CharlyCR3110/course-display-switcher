import RenderComponent from './RenderComponent'
import '../styles/CourseList.css'

const CourseList = ({ courses, displayStyle }) => {
  const sectionClassName = 'course-list ' + displayStyle.toLowerCase()

  return (
    <section className={sectionClassName}>
      <h1 className='course-list-title'>Courses display in {displayStyle}</h1>
      {courses.map((course) => (
        <RenderComponent
          key={course.id}
          courseImage={course.image}
          courseName={course.name}
          courseArea={course.area}
          percentageCompleted={course.percentage}
          displayStyle={displayStyle}
        />
      ))}
    </section>
  )
}

export default CourseList
