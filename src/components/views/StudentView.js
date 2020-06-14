import React from "react";

const StudentView = (props) => {
    return (
        <>
            <div className="card text-center mt-3 mb-3 text-dark" key={props.student.id} style={{ width: 30 + "rem" }}>
                <div className="card-header">
                    <h3>{props.student.firstName} {props.student.lastName}</h3>
                </div>
                <div className="card-body">
                    <img src={props.student.imageUrl} alt={props.student.firstName} />
                    <h6>{props.student.email}</h6>
                    <p>{props.student.gpa}</p>
                </div>
                <div className="card-footer">
                    {/* <Link className="btn btn-warning" to={`/campuses/${props.campus.id}/edit`}>
                        Edit
                    </Link> */}
                    <button className="btn btn-danger" onClick={() => props.handleDelete(props.student.id)}>
                        Delete
                    </button>
                </div>
            </div>
        </>
    );
}

export default StudentView;