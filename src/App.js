import React, { Component } from 'react'
import './App.css'
import AddWork from './components/AddWork'
import Search from './components/Search'
import Sort from './components/Sort'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import {connect} from 'react-redux'
import * as action from './actions/index'
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            taskEditing: null,
            sort : {
                sortBy: 'name',
                sortValue : ''
            }
        };
    }
    openForm=()=>{
        this.props.onToggleForm();
    }
    // onEditTask = (id)=>{
    //     var {tasks} = this.state;
    //     var index = this.findIndex(id);
    //     var taskEditing = tasks[index];
    //     this.setState({
    //         taskEditing : taskEditing
    //     });
    //     this.openForm(true);
    // }
    // onSort = (sortBy, sortValue) =>{
    //     this.setState ({
    //         sort: {
    //             sortBy : sortBy,
    //             sortValue : sortValue
    //         }
    //     })
    // }
    render(){
        var { taskEditing, sort}= this.state;
        var {isDisplayForm} = this.props;
        // if(filter){
        //     if(filter.name){
        //         tasks = tasks.filter((task)=>{
        //             return task.name.toLowerCase().indexOf(filter.name) !== -1;
        //         });
        //         // tasks = filter( tasks, (task) =>{
        //         //     return task.name.toLowerCase().indexOf(filter.name) !== -1;
        //         // } );
        //     }
        //     tasks = tasks.filter((task) => {
        //         if(filter.status === -1) 
        //             return task;
        //         else{
        //             return task.status === (filter.status === 1 ? true : false);
        //         }
        //     });
        // }
        // if(sort.sortBy === 'name'){
        //     tasks.sort((a,b)=>{
        //         if (a.name > b.name){
        //             return sort.sortValue;
        //         } else if (a.name < b.name){
        //             return -sort.sortValue;
        //         } else{
        //             return 0;
        //         }
        //     })
        // }
        // else{
        //     tasks.sort((a,b)=>{
        //             if (a.status > b.status){
        //                 return -sort.sortValue;
        //             } else if (a.status < b.status){
        //                 return sort.sortValue;
        //             } else{
        //                 return 0;
        //             }
        //         }
        //     )
        // }
        
        var eletaskform = isDisplayForm ? <TaskForm task = {taskEditing} /> : '';
        return(
            <div className="container">
                <div className="page-header text-center">
                    <h1>To-do List</h1>
                </div>
                <div className="row">
                    {eletaskform}
                    <div className= {isDisplayForm ? 'className="col-xs-8 col-sm-8 col-md-8 col-lg-8"' : ''} >
                        <AddWork onReceiveData={this.openForm}/>
                        <div className="row">
                                <Search/>
                                <Sort onClick = {this.onSort}/>
                        </div>
                        <TaskList
                        onEditTask = {this.onEditTask}
                        onFilter = {this.onFilter}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        isDisplayForm : state.DisplayForm
    }
}
const mapDispatchToProps =(dispatch, props) =>{
    return{
        onToggleForm : () =>{
            dispatch(action.toggleForm());
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
