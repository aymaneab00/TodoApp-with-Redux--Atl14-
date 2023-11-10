const initial_state = {
  tasks: [
    {
      id: 1,
      task: "Reviser Javascript",
      completed: false,
    },
    {
      id: 2,
      task: "Reviser Javas",
      completed: true,
    },
    {
      id: 3,
      task: "Reviser Python",
      completed: false,
    },
  ],
};
const ReducerTodo = (state = initial_state, action) => {
  let newstate = { ...state };
  switch (action.type) {
    case "add-tache":
      newstate.tasks = [
        ...newstate.tasks,
        {
          id: newstate.tasks.length + 1,
          task: action.payload,
          completed: false,
        },
      ];
      break;
  }
  //the error for not being aded is
  // 's' mising on newstate.tasks
  // another error is dispatch name was incorrect missing 'e'
  return newstate;
};
export default ReducerTodo;
