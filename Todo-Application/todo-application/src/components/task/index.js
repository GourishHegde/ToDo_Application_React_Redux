//Importing essentially required packages.
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import './index.css';
import deleteTask from  '../../actions/';
// importing dateformat package to display date.
var dateFormat = require('dateformat');
var now = new Date();
// Class Definition for displaying task list.
class Task extends React.Component{
  render(){
    return(
        <tr cellSpacing="14">
          <td cellSpacing="14">
            {dateFormat(now, "dd/mm/yy")}
          </td>
          <td cellSpacing="14">
            {this.props.task}
          </td>
          <td>
            <button className="button" onClick={()=>{this.props.deleteTask(this.props.task)}}>Delete</button>
          </td>
        </tr>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({deleteTask}, dispatch);
}
// connect function to return properties and state to Task component.
export default connect(()=>{return{};},mapDispatchToProps)(Task);
