// Importing essential Packages.
import{combineReducers} from 'redux';

// Class Definition for tasksReducer which decides the Action Type obtained from user.
const tasksReducer =(state=[], action,task)=>{

// switch statement acts based on the action type.
  switch (action.type) {
    case 'ADD_TASK':
      state=state.concat(action.payload);
      // Checking whether Task inputi is empty or not.
      if ((document.getElementById('Taskinput').value)==""){
        alert("Please Enter Your Tasks in Task Bar!!! Dont Leave it Blank!!");
      }
      break;
    case 'DELETE_TASK':
      state=state.slice();
      state.splice(state.indexOf(action.payload),1);
      break;
  }
  return state;
},
//Creating a reducers object.
reducers=combineReducers({
  tasks:tasksReducer
});

// Exporting reducers component as default.
export default reducers;
