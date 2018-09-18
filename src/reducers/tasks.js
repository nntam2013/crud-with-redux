import * as types from './../constants/ActionTypes'
var randomstring = require("randomstring");
var data = JSON.parse(localStorage.getItem('taskData'));
var initialState = data ? data : []
var findIndex = (tasks, id) => {
    var result = -1;
    tasks.forEach((task, index)=>{
        if (task.id === id) {
            result = index;
        }
    });
    return result;
}
var tasks = (state = initialState, action) => {
    switch(action.type){
        case types.LIST_ALL:
            return state;
        case types.ADD_TASK:
            var newTask = {
                id : randomstring.generate(7),
                name : action.task.name,
                status : action.task.status === 'true' ? true : false
            };
            state.push(newTask);
            localStorage.setItem('taskData',JSON.stringify(state));
            return [...state];
        case types.CHANGE_STATUS:
            var id = action.id;
            var index = findIndex(state,id);
            state[index] = {
                ...state[index],
                status : !state[index].status
            };
            localStorage.setItem('taskData',JSON.stringify(state));
            return [...state];
        case types.DETELE_TASK:
            var id = action.id;
            var index = findIndex(state,id);
            if (index !== -1){
                state.splice(index,1);
            }
            localStorage.setItem('taskData',JSON.stringify(state));
            return [...state];
        default : 
            return state;
    }
}
export default tasks;