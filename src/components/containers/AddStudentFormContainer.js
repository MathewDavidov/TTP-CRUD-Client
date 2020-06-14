import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { AddStudentFormView } from "../views";
import { addStudentThunk } from "../../thunks";

class AddStudentFormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            gpa: "",
            imageUrl: "",
            // isValidName: false,
            // errors: {},
        };
    }

    handleChange = (event) => {
        if (event.target.name === "firstName") {
            this.setState({ firstName: event.target.value }/*, this.validateFirstName*/);
        } else {
            this.setState({
                [event.target.name]: event.target.value,
            });
        }
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addStudent(this.state);
    };

    render() {
        return (
            <>
                {/* Can potentially be extracted into its own ErrorMessage component */}
                {/* {this.state.isValidName ? "" : this.state.errors.name} */}
                <AddStudentFormView
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    email={this.state.email}
                    gpa={this.state.gpa}
                    imageUrl={this.state.imageUrl}
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                />
            </>
        );
    }
}

const mapDispatch = (dispatch, ownProps) => {
    return {
        addStudent: (student) => dispatch(addStudentThunk(student, ownProps)),
    };
};

AddStudentFormContainer.propTypes = {
    addStudent: PropTypes.func.isRequired,
};

export default connect(null, mapDispatch)(AddStudentFormContainer);
