import React, {Component} from 'react'

class AddWork extends Component {
    onReceiveData = () =>{
        this.props.onReceiveData();
    }
    render(){
        return(
            <div className="row">
                <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                    <button 
                    type="button" 
                    className="btn btn-large btn-block btn-primary"
                    onClick={this.onReceiveData}
                    >
                    <i className="fa fa-plus" aria-hidden="true"></i> More Work
                    </button>
                </div>
            </div>
        )
    }
}
export default AddWork