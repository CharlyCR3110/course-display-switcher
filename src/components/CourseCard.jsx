import React from 'react';
import '../styles/CourseCard.css';

const CourseCard = ( {courseImage, courseName, courseArea, percentageCompleted } ) => {
	return (
		<section className="card">
			<img src="https://www.open.edu/openlearn/pluginfile.php/3277384/tool_ocwmanage/articletext/0/become_a_student_inline.jpg" alt="Course" className="card-image"/>
			<h3 className="card-name">Curso de React</h3>
			<small className="card-area">React</small>
			<div className="card-progress-bar">
				<div className="card-progress"></div>
			</div>
			
		</section>
	);
}

export default CourseCard;