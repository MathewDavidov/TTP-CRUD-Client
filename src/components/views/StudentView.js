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
            <img src={props.student.imageUrl} alt={props.student.firstName} />
            <h1>{props.student.firstName} {props.student.lastName}</h1>
            <h3>{props.student.email}</h3>
            <p>{props.student.gpa}</p>
            {campus}
        </>
    );
}

export default StudentView;