import {
	CHANGE_SEARCH_FIELD,
	REQUSET_ROBOTS_PENDING,
	REQUSET_ROBOTS_SUCCESS,
	REQUSET_ROBOTS_FAILED,
} from "./constants.js";

const initialStateSearch = {
    searchField: ''
}

export const searchRobots = (state = initialStateSearch, action = {}) => {
	switch (action.type) {
		case CHANGE_SEARCH_FIELD:
			return Object.assign({}, state, { searchField: action.payload });
		default:
			return state;
	}
};

const initialStateRobots = {
    isPending: false,
    robots: [],
    error: ''
}

export const requestRobots = (state = initialStateRobots, action = {}) => {
	switch (action.type) {
		case REQUSET_ROBOTS_PENDING:
			return Object.assign({}, state, { isPending: true });
		case REQUSET_ROBOTS_SUCCESS:
			return Object.assign({}, state, { robots: action.payload, isPending: false });
		case REQUSET_ROBOTS_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending: false });
        default:
            return state;
	}
};