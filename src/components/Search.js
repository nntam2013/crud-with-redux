import React, {Component} from 'react'
import * as action from './../actions/index'
import {connect} from 'react-redux'
class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            keyword : ''
        }
    }
    onChange = (event)=>{
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name]: value
        })
    }
    onSearch = () =>{
        console.log(this.state.keyword);
        this.props.onSearch(this.state.keyword);
    }
    render(){
        var {keyword} = this.state;
        return(
            <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                <form className="navbar-form">
                    <div className ="form-group">
                        <input 
                            type="search" 
                            name="keyword" 
                            className="form-control" 
                            placeholder="Type here"
                            value = {keyword}
                            onChange ={this.onChange}
                        />
                    </div>
                    <button 
                        type="button" 
                        className="form-control btn btn-primary"
                        onClick = {this.onSearch}
                    ><i className="fa fa-search"></i> Search</button>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{};
}
const mapDispatchToProps = (dispatch,props) =>{
    return{
        onSearch : (keyword) =>{
            dispatch(action.searchTask(keyword));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Search)