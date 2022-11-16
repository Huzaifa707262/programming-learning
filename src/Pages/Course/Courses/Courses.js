import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Details from '../CourseDetails/Details';

const Courses = () => {
    const course = useLoaderData();
    console.log('courses details', course)
    return (
        <div>
            {
                course.map(c => <Details
                    key={c.id}
                    c={c}
                ></Details>)
            }
        </div>
    );
};

export default Courses;