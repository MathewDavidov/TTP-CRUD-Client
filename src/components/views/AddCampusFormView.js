import React from "react";
import PropTypes from "prop-types";

const AddCampusFormView = (props) => {
  return (
    <div className="jumbotron text-dark mt-5">
      <p className="lead">Add a New Campus</p>
      <form onSubmit={props.handleSubmit}>
        <div className="form-group">
          Name:{" "}
          <input
            value={props.name}
            name="name"
            onChange={props.handleChange}
            required
          ></input>
        </div>
        <div className="form-group">
          Address:{" "}
          <input
            value={props.address}
            name="address"
            onChange={props.handleChange}
            required
          ></input>
        </div>
        <div className="form-group">
          Description:{" "}
          <input
            value={props.description}
            name="description"
            onChange={props.handleChange}
            required
          ></input>
        </div>
        <div className="form-group">
          Image Url:{" "}
          <input
            value={props.imageUrl}
            name="imageUrl"
            onChange={props.handleChange}
            required
          ></input>
        </div>
        <button className="btn btn-success">Create Campus</button>
      </form>
    </div>
  );
};

AddCampusFormView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default AddCampusFormView;
