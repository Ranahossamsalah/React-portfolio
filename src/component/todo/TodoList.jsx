const TodoList = ({ todos, DeleteTodo }) => {
  const todosList =
    todos && todos.length > 0 ? (
      todos.map((todo, i) => {
        return (
          <div key={i}>
            <ul className="w-50 mx-auto">
              <li className="border d-flex">
                <div className="text">
                  <p>Title : {todo.title}</p>
                  <p>Content : {todo.content}</p>
                </div>
              </li>
            </ul>
            <button className="btn-warning w-25" onClick={() => DeleteTodo(i)}>
              x
            </button>
          </div>
        );
      })
    ) : (
      <p className="h5 mx-5 text-muted">no items on the list ..</p>
    );

  return (
    <div className="text-left">
      <h5 className="mx-5 text-muted">Todos List</h5>
      {todosList}
    </div>
  );
};

export default TodoList;
