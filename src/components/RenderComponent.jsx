import CourseCard from './courseCard'
import CourseListItem from './CourseListItem'

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
      return <CourseListItem courseImage={courseImage} courseName={courseName} courseArea={courseArea} percentageCompleted={percentageCompleted} />
    default:
      return (<h1>DEFAULT</h1>)
  }
}

export default RenderComponent
