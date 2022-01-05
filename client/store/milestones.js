import axios from 'axios';

// ACTION TYPES
const GET_MILESTONES = 'GET_MILESTONES';
const CREATE_MILESTONE = 'CREATE_MILESTONE';
const DELETE_MILESTONE = 'DELETE_MILESTONE';
const UPDATE_MILESTONE = 'UPDATE_MILESTONE';


// ACTION CREATORS
const _getMilestones = (milestones) => ({ type: GET_MILESTONES, milestones });
const _createMilestone = (milestone) => ({ type: CREATE_MILESTONE, milestone });
const _deleteMilestone = (milestone) => ({ type: DELETE_MILESTONE, milestone });
const _updateMilestone = (milestone) => ({ type: UPDATE_MILESTONE, milestone });


// THUNK CREATORS
export const getMilestones = () => {
    return async (dispatch) => {
        const { data: milestones } = await axios.get('/api/milestones');
        dispatch(_getMilestones(milestones));
    };
};

export const createMilestone = (milestone, history) => {
    return async (dispatch) => {
        const { data: created } = await axios.post('/api/milestones', milestone);
        dispatch(_createMilestone(created));
        history.push('/milestones');
    };
};

export const deleteMilestone = (milestone, history) => {
    return async (dispatch) => {
        await axios.delete(`/api/milestones/${milestone.id}`);
        dispatch(_deleteMilestone(milestone));
        history.push('/milestones');
    };
};

export const updateMilestone = (milestone, history) => {
    return async (dispatch) => {
        const { data: updated } = await axios.put(`/api/milestones/${milestone.id}`, milestone);
        dispatch(_updateMilestone(updated));
        history.push(`/milestones/${milestone.id}`)
    };
};


// REDUCER
export default function (state = [], action) {
    switch (action.type) {
        case GET_MILESTONES:
            return action.milestones;
        case CREATE_MILESTONE:
            return [...state, action.milestone];
        case DELETE_MILESTONE:
            return state.filter((milestone) => milestone.id !== action.milestone.id);
        case UPDATE_MILESTONE:
            return state.map((milestone) => milestone.id === action.milestone.id ? 
            action.milestone : milestone);
        default:
            return state;
    }
  }