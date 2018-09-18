import React, {Component} from 'react'
import { connect } from 'react-redux'
import * as action from './../actions/index'
class Filter extends Component{
    constructor(props){
        super(props);
        this.state = {
            filterName : '',
            filterStatus : -1
        }
    }
    onChange = (event) =>{
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState ({
            [name] : value
        });
        this.props.onPropsChange(this.state);      
    }
    render(){
        return(
            <tr>
                <td></td>
                <td>
                    <input 
                        type="text" 
                        name="filterName"  
                        className="form-control" 
                        value={this.props.filterName}
                        onChange = {this.onChange}/>
                </td>
                <td>
                    <select 
                        name="filterStatus"  
                        className="form-control" 
                        value={this.props.filterStatus} 
                        onChange = {this.onChange}
                    >
                        <option value={-1}>All</option>
                        <option value={0}>Deactive</option>
                        <option value={1}>Active</option>
                    </select>
                </td>
                <td></td>
            </tr>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return{
        onPropsChange : (filter) =>{
            dispatch(action.filterTask(filter));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Filter)