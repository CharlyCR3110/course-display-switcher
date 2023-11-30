import CourseCard from './courseCard'
import '../styles/CourseList.css'

const CourseList = ({ courses }) => {
  return (
    <section className='course-list'>
      <h2 className='course-list-title'>Courses</h2>
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          courseImage={course.image}
          courseName={course.name}
          courseArea={course.area}
          percentageCompleted={course.percentage}
        />
      ))}
    </section>
  )
}

export default CourseList
