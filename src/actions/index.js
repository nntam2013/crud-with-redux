import * as types from './../constants/ActionTypes';

export const listAll = () =>{
    return {
        type : types.LIST_ALL
    }
};
export const addTask = (task) =>{
    return{
        type : types.ADD_TASK,
        task
    }
};
export const toggleForm = () =>{
    return{
        type : types.TOGGLE_FORM,
    }
};
export const closeForm = () =>{
    return{
        type : types.CLOSE_FORM,
    }
};
export const openForm = () =>{
    return{
        type : types.OPEN_FORM,
    }
};
export const updateStatus = (id) =>{
    return {
        type: types.CHANGE_STATUS,
        id
    }
};
export const deleteTask = (id) =>{
    return {
        type : types.DETELE_TASK,
        id
    }
};
export const editTask = (id) =>{
    return {
        type : types.EDIT_TASK,
        id
    }
};
export const filterTask = (filter) =>{
    return {
        type : types.FILTER_TASKS,
        filter
    }
};
export const searchTask = (keyword) => {
    return {
        type : types.SEARCH_TASKS,
        keyword 
    }
};