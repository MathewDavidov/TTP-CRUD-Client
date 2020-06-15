import React from "react";
import PropTypes from "prop-types";

const EditCampusFormView = (props) => {
  return (
    <div className="jumbotron text-dark mt-5">
      <p className="lead">Edit Campus Information</p>
      <form onSubmit={props.handleSubmit}>
        <div className="form-group">
          Name:{" "}
          <input
            value={props.name}
            name="name"
            onChange={props.handleChange}
          ></input>
        </div>
        <div className="form-group">
          Address:{" "}
          <input
            value={props.address}
            name="address"
            onChange={props.handleChange}
          ></input>
        </div>
        <div className="form-group">
          Description:{" "}
          <input
            value={props.description}
            name="description"
            onChange={props.handleChange}
          ></input>
        </div>
        <div className="form-group">
          Image Url:{" "}
          <input
            value={props.imageUrl}
            name="imageUrl"
            onChange={props.handleChange}
          ></input>
        </div>
        <button className="btn btn-success">Edit Campus</button>
      </form>
    </div>
  );
};

EditCampusFormView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default EditCampusFormView;
