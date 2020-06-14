import React from "react";
import "./styles/StudentNameListView.css";
import { Link } from "react-router-dom";

const StudentNameListView = (props) => {
  console.log(props);
  if (!props.students) {
    return <p>There are no students enrolled</p>;
  }
  return (
    <>
      <div>
        <p>{props.students.length} Students</p>
          {props.students.map((student) => (
            <div key={student.id} className="student-name">
              <Link to={`/students/${student.id}`}>{student.firstName}</Link>
            </div>
          ))}
      </div>
    </>
  );
};

export default StudentNameListView;
