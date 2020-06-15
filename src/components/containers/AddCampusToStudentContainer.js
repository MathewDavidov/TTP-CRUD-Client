import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllCampusesThunk } from "../../thunks";

class AddCampusToStudentContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { campusId: "" };
    }
    componentDidMount() {
        this.props.fetchAllCampuses();
    }

    // when the enroll student button is clicked
    // send a put request for the student
    // change the campus id to the id of the campus we are on

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleEnrollInCampus(this.props.studentId, this.state.campusId);
    };

    render() {
        console.log(this.props);
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <select name="campusId" onChange={this.handleChange}>
                        <option value="">Please select a campus</option>
                        {this.props.allCampuses
                            .filter((s) => s.studentId !== this.props.studentId)
                            .map((campus) => {
                                return (
                                    <option value={campus.id} key={campus.id}>
                                        {campus.name}
                                    </option>
                                );
                            })}
                    </select>
                    <div>
                        <button type="submit" className="btn btn-primary">Enroll In Campus</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapState = (state) => {
    return { allCampuses: state.allCampuses };
};

const mapDispatch = (dispatch) => {
    return {
        fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
    };
};

export default connect(mapState, mapDispatch)(AddCampusToStudentContainer);
