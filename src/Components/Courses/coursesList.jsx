import React from 'react';

const Course = ({ index, name }) => {
  return (
    <li className="list-group-item">
      {index} - {name}
    </li>
  );
};

const CoursesList = ({ courses }) => {
  return (
    <div>
      <ul className="list-group">
        {courses.map((item, index) => (
          <Course name={item.name} key={item.id} index={index + 1} />
        ))}
      </ul>
    </div>
  );
};

export default CoursesList;
