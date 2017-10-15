// Importing essentially required packages.
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import './task.css';

// Defining addTask function which will be called when ADD Task button is clicked.
// @params:task
// @retrn:object with properties type and payload
const addTask=(task)=>{
  return{
    type:'ADD_TASK',
    payload:task
  };
}

// Class Definition for creating input box to get the task input from user.
 class TaskBar extends React.Component{
  render(){
    return(
      <div>
          <input type="text" name="todo" id="Taskinput" ref="task" placeholder="Please Type Your Tasks Here"/>
          <button className="btn-primary" onClick={()=>this.props.addTask(this.refs.task.value)}>SUBMIT</button>
      </div>
    );
  }
};
  function mapDispatchToProps(dispatch) {
    return bindActionCreators({addTask}, dispatch);
  };
// connect function to return properties and state to TaskBar component.
  export default connect(()=>{return{};},mapDispatchToProps)(TaskBar);
