import React, {Component} from 'react'
import Filter from './Filter'
import TaskItem from './TaskItem'
import {connect} from 'react-redux'
import * as action from '../actions/index';
class TaskList extends Component{
    render(){
        var {receiveTask, keyword,filter,} = this.props;
        var filterName = filter.filterName;
        var filterStatus = 0;
        if(keyword){
            receiveTask = receiveTask.filter((task)=>{
                return task.name.toLowerCase().indexOf(keyword) !== -1;
            })
        }
        if(filterName){
            receiveTask = receiveTask.filter((task)=>{
                return task.name.toLowerCase().indexOf(filterName) !== -1;
            });
        }
        if (filterStatus){
            receiveTask = receiveTask.filter((task) => {
                if(filterStatus === -1) 
                    return task;
                else{
                    return task.status === (filterStatus === 1 ? true : false);
                }
            });
        }
        var elements = receiveTask.map((task,index)=>{
                return <TaskItem 
                        key={task.id} 
                        index = {index} 
                        eletask = {task} 
                        deleteTask = {this.deleteTask}
                        onDeleteTask = {this.props.onDeleteTask}
                        onEditTask = {this.props.onEditTask}
                    />
        });
        return(
            <div className="table-responsive">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Index</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Filter/>
                        {elements}
                    </tbody>
                </table>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        receiveTask: state.tasks,
        keyword : state.search,
        filter : state.filter,
    }
};
const mapDispatchToProps = (dispatch,props) =>{
    return{}
};
export default connect(mapStateToProps,mapDispatchToProps)(TaskList)