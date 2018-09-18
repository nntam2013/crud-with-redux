import * as types  from './../constants/ActionTypes'
var initialState = {
    filterName : '',
    filterStatus : -1 // -1: all, 1: active, 0: deactive
};
var filter = (state = initialState, action) => {
    switch(action.type){
        case types.FILTER_TASKS:
            var filter = action.filter;
            var filterName = filter.filterName;
            var filterStatus = filter.filterStatus
            if(filterName){
                state.filterName = filterName;
            }
            if (filterStatus){
                state.filterStatus = parseInt(filterStatus, 10);
            }
            console.log(state);
            return state;
        default:
            return state;
    }
}
export default filter;