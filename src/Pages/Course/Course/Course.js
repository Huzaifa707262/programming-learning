import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

import CourseDetails from '../CourseDetails/CourseDetails';

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
