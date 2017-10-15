// Importing essentially required packages.
import React from 'react';
import {connect} from 'react-redux';
import Task from '../task';

// Class Definition for creating TaskList obtained from user.
class TaskList extends React.Component{
  render(){
    return(
      <center>
        <table>
          <thead>
            <tr>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.tasks.map((task,index) => <Task key={index} task={task} />)}
          </tbody>
          </table>
      </center>
    )
  }
}

  function mapStateToProps(state) {
  return{
    tasks:state.tasks,
    date:state.date,
    priority:state.priority,
  };
}


// connect function to return properties and state to TaskList component.
export default connect(mapStateToProps)(TaskList);
