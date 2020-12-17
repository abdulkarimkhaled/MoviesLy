/* Login Reducer
 * handles login states in the app
 */
import createReducer from './createReducer';

const initialState = {
    data: [],
};

export const presistReducer = createReducer(initialState, {
    //Save data
    ["SAVE_PRESIST_REDUCER"](state, action) {
        return {
            ...state,
            data: {
                ...state.data,
                [action.payload.reducerVariable]: action.response,

            },
            localLogin: action.payload.actionType == "LOGIN" ?
                action.payload.extraData
                :
                null
        };
    },

    //Clear data
    ["CLEAR_PRESIST_REDUCER"](state) {
        return {
            ...state,
            data: []
        }
    },


});
