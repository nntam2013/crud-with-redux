import { combineReducers } from 'redux';
import tasks from './../reducers/tasks'
import DisplayForm from './../reducers/displayForm'
import filter from './filter'
import search from './../reducers/search'
const myReducer = combineReducers({
    tasks,
    DisplayForm,
    filter,
    search
});
export default myReducer;