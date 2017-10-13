import{combineReducers} from 'redux';

// Class Definition for tasksReducer which decides the Action Type obtained from user.
const tasksReducer =(state=[], action,task)=>{

// switch statement acts based on the action type.
  switch (action.type) {
    case 'ADD_TASK':
      state=state.concat(action.payload);
      break;
    case 'DELETE_TASK':
      state=state.slice();
      // Deleting the task based on the TaskId.
      state.splice(state.indexOf(action.payload),1);
      break;
  }
  return state;
},

reducers=combineReducers({
  tasks:tasksReducer
});

// Exporting reducers component as default.
export default reducers;
