import React from "react";

const StudentView = (props) => {
    let campus;
    if (props.student.campus) {
        campus = (
            <p>{props.student.campus.name}</p>
        );
    } else {
        campus = <p>The student does not have a campus.</p>;
    }

    return (
        <>
            <div className="card text-center mt-3 mb-3 text-dark" key={campus.id} style={{ width: 30 + "rem" }}>
                <div className="card-header">
                    <h3>{props.student.firstName} {props.student.lastName}</h3>
                </div>
                <div className="card-body">
                    <img src={props.student.imageUrl} alt={props.student.firstName} />
                    <h6>{props.student.email}</h6>
                    <p>{props.student.gpa}</p>
                </div>
                <div className="card-footer">
                    {campus}
                    {/* <button className="btn btn-danger" onClick={() => props.handleDelete(campus.id)}>
                        Delete
                    </button> */}
                </div>
            </div>
        </>
    );
}

export default StudentView;