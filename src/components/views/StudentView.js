import React from "react";
import { Link } from "react-router-dom";
import { AddCampusToStudentContainer } from "../containers"

const StudentView = (props) => {
    let campus;
    console.log(props.student.campus);
    if (props.student.campus) {
        campus = <Link to={`/campuses/${props.student.campus.id}`}>{props.student.campus.name}</Link>
    } else {
        campus = <p>Not enrolled at a campus.</p>
    }

    return (
        <>
            <div className="card text-center mt-3 mb-3 text-dark" key={props.student.id} style={{ width: 30 + "rem" }}>
                <div className="card-header">
                    <h3>{props.student.firstName} {props.student.lastName}</h3>
                </div>
                <div className="card-body">
                    <img src={props.student.imageUrl} alt={props.student.firstName} />
                    <h6>{props.student.email}</h6>

                    <hr class="my-4" />
                    <p>{props.student.gpa} GPA</p>
                    {campus}

                    <hr class="my-4" />
                    <AddCampusToStudentContainer studentId={props.student.id}
                        handleEnrollInCampus={props.handleEnrollInCampus}/>
                </div>
                <div className="card-footer">
                    <Link className="btn btn-warning mr-1" to={`/students/${props.student.id}/edit`}>
                        Edit
                    </Link>
                    <button className="btn btn-danger ml-1" onClick={() => props.handleDelete(props.student.id)}>
                        Delete
                    </button>
                </div>
            </div>
        </>
    );
}

export default StudentView;