import Axios from "axios";

// ACTION TYPES
const FETCH_ALL_STUDENTS = "FETCH_ALL_STUDENTS";

// ACTION CREATORS
const fetchAllStudents = (students) => {
    return {
        type: FETCH_ALL_STUDENTS,
        payload: students,
    }
};

// THUNKS
export const fetchAllStudentsThunk = () => (dispatch) => {
    return Axios
        .get("/api/students")
        .then((res) => res.data)
        .then((students) => dispatch(fetchAllStudents(students)))
        .catch((error) => console.log(error));
};

// REDUCERS
const reducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_ALL_STUDENTS:
            return action.payload;
        default:
            return state;
    }
};

export default reducer;
