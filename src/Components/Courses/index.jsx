import React from 'react';
import { connect } from 'react-redux';
import Courses from './courses';
import { createCourse } from '../../Redux/Actions/courseActions';
import { nanoid } from 'nanoid';
import CoursesList from './coursesList';

const Index = ({ onSubmit, courses }) => {
  return (
    <>
      <Courses onSubmitCourse={onSubmit} />
      <div className="mt-3">
        <CoursesList courses={courses} />
      </div>
    </>
  );
};

const mapStateToProps = (state, props) => {
  return {
    courses: state.courses.courses,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (courseName) =>
      dispatch(
        createCourse({
          id: nanoid(),
          name: courseName,
        })
      ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
