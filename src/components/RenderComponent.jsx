import CourseCard from './courseCard'
import CourseListRow from './CourseListRow'
import CourseSummary from './CourseSummary'

const RenderComponent = ({ courseImage, courseName, courseArea, percentageCompleted, displayStyle }) => {
  switch (displayStyle) {
    case 'cards':
      return (
        <CourseCard
          courseImage={courseImage}
          courseName={courseName}
          courseArea={courseArea}
          percentageCompleted={percentageCompleted}
        />
      )
    case 'lists':
      return (<h1>Working on</h1>)
    case 'summary':
      return (<h1>Working on</h1>)
    default:
      return (<h1>DEFAULT</h1>)
  }
}

export default RenderComponent
