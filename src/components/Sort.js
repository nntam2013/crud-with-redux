import React, {Component} from 'react'

class Sort extends Component {
    constructor(props){
        super(props);
        this.state = {
            name : 'name',
            value : 1
        }
    }
    onClick = (sortBy, sortValue) => {
        this.setState({
            name : sortBy,
            value : sortValue
        });
        this.props.onClick(sortBy, sortValue);
    }
    render(){
        return(
            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <div className = "dropdown">
                    <div className="row">
                        <button 
                            type="button" 
                            className="form-control btn btn-primary dropdown-toggle"
                            id = "dropdownMenu"
                            data-toggle = "dropdown"
                            aria-haspopup = "true"
                            aria-expanded = "true"
                        >
                            <i className="fa fa-sort" aria-hidden="true"></i> Sort
                        </button>
                        <ul className =" dropdown-menu " aria-labelledby="dropdownMenu">
                            <li onClick = { () => this.onClick('name',1)}>
                                <a role = "button" className = "sort_selected">
                                    <span className = "fa fa-sort-alpha-asc">
                                    Sort by A-Z
                                    </span>
                                </a>
                            </li>
                            <li onClick = {() => this.onClick ('name', -1)}>
                                <a role = "button">
                                    <span className = "fa fa-sort-alpha-desc">
                                    Sort by Z-A
                                    </span>
                                </a>
                            </li>
                            <li className = "divider"></li>
                            <li onClick = {() =>this.onClick ('status', 1)}>
                                <a role = "button">
                                    Sort by Active
                                </a>
                            </li>
                            <li onClick = {() => this.onClick('status', -1)}>
                                <a role = "button">
                                    Sort by Deactive
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default Sort