import React from "react";
import { Link } from "react-router-dom";

const HomeView = () => {
    return (
        <div className="jumbotron">
            <div className="display-4 text-dark">
                Welcome to the Campuses and Students CRUD APP
            </div>
            <Link to="/campuses" className="btn btn-primary mt-3 mr-1">
                View all Campuses
            </Link>
            <Link to="/students" className="btn btn-primary mt-3 ml-1">
                View all Students
            </Link>
        </div>
    );
}

export default HomeView;