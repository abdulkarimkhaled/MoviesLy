/**
 * Loading reducer made seperate for easy blacklisting
 * Avoid data persist
 */
import createReducer from './createReducer';

const initialState = {
    Loading: [],
    data: []
};

export const generalReducer = createReducer(initialState, {


    //Loaders
    ["ENABLE_LOADER"](state, action) {
        return {
            ...state,
            Loading: { ...state.Loading, [action.apiType]: true }
        };
    },
    ["DISABLE_LOADER"](state, action) {
        return { ...state, Loading: { ...state.Loading, [action.apiType]: false } };
    },

    ["CLEAR_PRESIST_REDUCER"](state) {
        return {
            ...state,
            data: []
        }
    },

    //Save data
    ["SAVE_GENERAL_REDUCER"](state, action) {


        if (action.payload.page > 1) {


            let old_data = state.data[action.payload.reducerVariable]
            let newData = action.response


            if (action.payload.reducerVariable == "otherUserReceipe") {
                old_data = old_data[action.payload.reducerVariableID]
                console.log("EhabHi", old_data)
            }

            if (action.payload.page > old_data.pages_num) {
                return {
                    ...state,
                };
            }


            if (action.response.data) {
                for (let i = 0; i < newData.data.length; i++) {
                    old_data.data.push(newData.data[i])
                }

            }
            else {
                for (let i = 0; i < newData.length; i++) {
                    old_data.push(newData)
                }
            }

            if (action.payload.reducerVariable == "otherUserReceipe") {

                let old = state.data[action.payload.reducerVariable]
                if (old == null) {
                    old = []
                }
                old[action.payload.reducerVariableID] = old_data
                return {
                    ...state,
                    data: {
                        ...state.data,
                        [action.payload.reducerVariable]: old
                    }
                };
            }
            else {
                return {
                    ...state,
                    data: {
                        ...state.data,
                        [action.payload.reducerVariable]: old_data
                    }
                };
            }



        }
    },
});
