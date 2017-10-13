// Defining addTask function to perform Task Addition.
// @params: task
// @return: object containing type and payload property.

const addTask=(task)=>{
  return{
    type:'ADD_TASK',
    payload:task
  };
},

// Defining deleteTask function to perform Task Deletion..
// @params: task
// @return: object containing type and payload property.

deleteTask=(taskId)=>{
  return{
    type:'DELETE_TASK',
    payload:taskId
  };
};

export default(addTask, deleteTask);
