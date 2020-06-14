import React from "react";
import { Link } from "react-router-dom";

const AllStudentsView = (props) => {
    if (!props.allStudents.length) {
        return (
            <>
                <Link to="/students/new" className="btn btn-success">
                    New Student
                </Link>
                <div>There are no students</div>
            </>
        );
    }

    return (
        <div className="jumbotron mt-5">
            <h1 className="display-4 text-dark">Students:</h1>
            {props.allStudents.map((student) => (
                <div key={student.id}>
                    <Link to={`/students/${student.id}`}>
                        <p>{student.firstName} {student.lastName}</p>
                    </Link>
                </div>
            ))}
            <Link to="/students/new" className="btn btn-success">
                New Student
            </Link>
        </div>
    )
}

export default AllStudentsView;