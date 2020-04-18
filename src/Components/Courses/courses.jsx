import React, { useState } from 'react';

const Courses = ({ onSubmitCourse }) => {
  const [name, setName] = useState('');
  return (
    <div>
      <h3>Courses</h3>
      <form className="w-50">
        <div className="row">
          <div className="col">
            <div className="form-group">
              <label htmlFor="courseName">Name</label>
              <input
                type="text"
                className="form-control"
                id="courseName"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                setName('');
                onSubmitCourse(name);
              }}
            >
              Add Course
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Courses;
