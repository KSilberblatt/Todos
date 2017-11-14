export const allTodos = (state) => {
  const todoIds = Object.keys(state.todos);
  const todos = todoIds.map( id => state.todos[id]);
  return todos;
};
