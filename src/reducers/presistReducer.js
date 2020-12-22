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
        let array
        let fav = state.data.Favorites
        if (state.data && fav) {
            array = fav
            if (fav.some(fav => fav.id == action.response.id)) {
                let index = fav.findIndex(fav => fav.id == action.response.id)
                array.splice(index, 1)
            } else {
                array.push(action.response)
            }
        } else {
            array = []
            array.push(action.response)
        }
        return {
            ...state,
            data: {
                ...state.data,
                [action.payload.reducerVariable]: array,
            }
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
