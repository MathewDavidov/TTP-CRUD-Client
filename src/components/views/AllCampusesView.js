import React from "react";
import "./styles/AllCampusesView.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllCampusesView = (props) => {
  if (!props.allCampuses.length) {
    return (
      <>
        <Link to="/campuses/new" className="btn btn-success">
          New Campus
        </Link>
        <div className="all-campuses">There are no campuses</div>
      </>
    );
  }

  return (
    <div className="all-campuses">
      <h1 className="display-4">Campuses:</h1>
      {props.allCampuses.map((campus) => (
        <div className="card text-center mt-5 mb-5" key={campus.id} style={{ width: 45 + "rem" }}>
          <div className="card-header">
            <Link to={`/campuses/${campus.id}`}>
              <h3>{campus.name}</h3>
            </Link>
          </div>
          <div className="card-body">
            <img src={campus.imageUrl} width="200px" alt={campus.name} />
            <p>{campus.students.length} students</p>
          </div>
          <div className="card-footer">
            <button className="btn btn-danger" onClick={() => props.handleDelete(campus.id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
      <Link to="/campuses/new" className="btn btn-success mt-5 mb-5">
        New Campus
      </Link>
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;
