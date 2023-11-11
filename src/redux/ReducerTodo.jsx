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
          completed: true,
        },
      ];
      break;
      case "delete-element":
        newstate.tasks= newstate.tasks.filter((t,i)=>i!=action.payload)
        break;
      case "modify-element":
        newstate.tasks= newstate.tasks.map((t,i)=>action.payload!=i ? t : {...t, completed:!t.completed})
  }
  return newstate;
};
export default ReducerTodo;
