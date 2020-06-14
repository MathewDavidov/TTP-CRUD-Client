import React from "react";
import { Link } from "react-router-dom";
import {
  StudentNameListContainer,
  AddStudentToCampusContainer,
} from "../containers";

const CampusView = (props) => {
  return (
    <>
      <div className="card text-center mt-3 mb-3 text-dark" key={props.campus.id} style={{ width: 45 + "rem" }}>
        <div className="card-header">
          <h1>{props.campus.name}</h1>
        </div>
        <div className="card-body">
          <img src={props.campus.imageUrl} alt={props.campus.name} />
          <h3>{props.campus.address}</h3>

          <hr className="my-4" />
          <p>{props.campus.description}</p>

          <hr className="my-4" />
          <StudentNameListContainer students={props.campus.students} />

          <hr className="my-4" />
          <AddStudentToCampusContainer
            campusId={props.campus.id}
            handleEnrollStudent={props.handleEnrollStudent}
          />
        </div>
        <div className="card-footer">
          <Link className="btn btn-warning" to={`/campuses/${props.campus.id}/edit`}>
            Edit
          </Link>
          <button className="btn btn-danger" onClick={() => props.handleDelete(props.campus.id)}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default CampusView;
