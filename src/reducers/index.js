export default function tasks(state = { tasks: [] }, action) {
  if (action.type === 'CREATE_TASK') {
    return { tasks: state.tasks.concat(action.payload) };
  }
  if (action.type === 'EDIT_TASK') {
    const { payload } = action;
    return {
      tasks: state.tasks.map(task => {
        if(task.id === payload.id) {
          return Object.assign({}, task, payload.params);
        }
        return task;
      }),
    };
  }
  return state;
};
