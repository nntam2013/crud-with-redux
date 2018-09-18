import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as action from './../actions/index'
class TaskForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            id : '',
            name : '',
            status : true
        }
    }
    componentWillMount(){
        if (this.props.task){
            var task= this.props.task;
            this.setState({
                id : task.id,
                name : task.name,
                status : task.status
            });
        }
    }
    componentWillReceiveProps(nextProps){
        if (nextProps && nextProps.task){
            this.setState({
                id : nextProps.task.id,
                name : nextProps.task.name,
                status : nextProps.task.status
            });
        }
    }
    onCloseForm = () => {
        this.props.onCloseForm();
    }
    addTask = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if(name === 'status'){
            value = value === 'false'?false:true;
        }
        this.setState({
            [name]: value
        })
    }
    onSubmit = (event) => {
        event.preventDefault();
        this.props.onAddTask(this.state);
        this.onClear();
        this.onCloseForm();
    }
    onClear = () =>{
        this.setState({
            name: '',
            status : true
        });
    }
    render(){
        var {id}= this.state;
        return(
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <form onSubmit={this.onSubmit}>

                    <div className="panel panel-info">
                        <div className="panel-heading">
                            <h3 className="panel-title">
                                { id !== ''? 'Edit your work' : 'Add more work'} <span 
                                className="fa fa-times-circle text-right" 
                                style={{cursor:'pointer'}} 
                                onClick={this.onCloseForm}>
                                </span>
                            </h3>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Name:</label>
                        <input 
                        type="text" 
                        className="form-control"  
                        placeholder="Type your task name"
                        value = {this.state.name}
                        name = "name"
                        onChange={this.addTask}
                        />
                    </div>

                    <div className="form-group">
                        <label>Status:</label>
                        <select 
                        name="status" 
                        className="form-control" 
                        value = {this.state.status}
                        onChange={this.addTask}
                        >
                            <option value={true}>Active</option>
                            <option value={false}>Deactive</option>
                        </select>
                    </div>

                    <div className="text-center">
                        <button 
                            type="submit" 
                            className="btn btn-primary"
                        >Save</button>&nbsp;
                        <button 
                            type="reset" 
                            className="btn btn-danger"
                            onClick={this.onClear}
                        >Cancel</button>
                    </div>
                
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {

    }
}
const mapDispatchToProps = (dispatch, props) =>{
    return {
        onAddTask : (task) =>{
            dispatch(action.addTask(task));
        },
        onCloseForm : () => {
            dispatch(action.closeForm());
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TaskForm)