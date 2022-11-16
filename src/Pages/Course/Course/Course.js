import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetails from '../CourseDetails/CourseDetails';
import Details from '../CourseDetails/Details';

const Course = () => {
    const courses = useLoaderData();

    return (
        <div>

            {
                courses.map(course => <CourseDetails
                    key={course.id}
                    course={course}
                ></CourseDetails>)
            }

        </div>
    );
};
export default Course;
