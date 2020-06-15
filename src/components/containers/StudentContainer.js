import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStudentThunk, deleteStudentThunk, /*enrollStudentThunk*/ } from "../../thunks";
import { StudentView } from "../views";

class StudentContainer extends Component {
    componentDidMount() {
        this.props.fetchStudent(this.props.match.params.id);
    }

    handleDelete = (id) => {
        this.props.deleteStudent(id);
        this.props.history.push("/students");
    };

    handleEnrollInCampus = (studentId, campusId) => {
        // this.props.enrollInCampus(studentId, campusId);
    }

    render() {
        return (
            <StudentView 
                student={this.props.student} 
                handleDelete={this.handleDelete}
                handleEnrollInCampus={this.handleEnrollInCampus}
            />
        );
    }
}

// map state to props
const mapState = (state) => {
    return {
        student: state.student,
    };
};

const mapDispatch = (dispatch) => {
    return {
        fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
        deleteStudent: (id) => dispatch(deleteStudentThunk(id)),
        // enrollInCampus: (studentId, campusId) =>
        //     dispatch(enrollInCampusThunk(studentId, campusId)),
    };
};

export default connect(mapState, mapDispatch)(StudentContainer);
