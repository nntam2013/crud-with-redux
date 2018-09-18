import React, {Component} from 'react'
import { connect } from 'react-redux'
import * as action from './../actions/index'
class TaskItem extends Component {
    onUpdateStatus = () =>{
        this.props.onUpdateStatus(this.props.eletask.id);
    }
    onDeleteTask = () => {
        this.props.onDeleteTask(this.props.eletask.id);
    }
    onEditTask = () => {
        this.props.onEditTask(this.props.eletask.id);
    }
    render(){
        var {eletask, index} = this.props;
        var setActive = <span className="label label-info" >Active</span>;
        var setDeactive = <span className="label label-danger">Deactive</span>;
        return(
            <tr>
                <td>{index+1}</td>
                <td>{eletask.name}</td>
                <td 
                className="text-center"
                onClick = {this.onUpdateStatus}
                style = {{cursor:'pointer'}}
                >{eletask.status === true ? setActive : setDeactive}
                </td>
                <td>
                    <button 
                        type="button" 
                        className="btn btn-warning" 
                        style={{marginRight: 10 + 'px'}}
                        onClick={this.onEditTask}
                    >Edit</button>
                    <button 
                    type="button" 
                    className="btn btn-danger" 
                    onClick={this.onDeleteTask} 
                    >Delete</button>
                </td>
            </tr>
        )
    }
}
const mapStateToProps = (state) => {
    return{}
}
const mapDispatchToProps = (dispatch, props) => {
    return{
        onUpdateStatus : (id) =>{
            dispatch(action.updateStatus(id));
        },
        onDeleteTask : (id) =>{
            dispatch(action.deleteTask(id));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(TaskItem)