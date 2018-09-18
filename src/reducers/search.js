import * as types  from './../constants/ActionTypes'
var initialState = '';
var search = (state = initialState, action) => {
    switch(action.type){
        case types.SEARCH_TASKS:
            state = action.keyword;
            return state;
        default:
            return state;
    }
}
export default search;