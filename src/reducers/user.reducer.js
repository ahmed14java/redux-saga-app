import { GET_USERS_REQUEST , GET_USERS_SUCCESS } from '../actions/types';
const initialState = {
    items: []
};
// eslint-disable-next-line
export default (state = initialState , action) => {
    switch (action.type) {
        case GET_USERS_REQUEST:
            return {
                ...state
            }
        case GET_USERS_SUCCESS:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;
    }
}