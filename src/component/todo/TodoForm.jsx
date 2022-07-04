import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmission = (e) => {
    e.preventDefault();
    addTodo({ title, content });
    setTitle("");
    setContent("");
  };

  return (
    <div>
      <h3 className="text-muted mb-4 bg-light">Add a TODO</h3>

      <form className="border w-50 mx-auto" onSubmit={handleSubmission}>
        Title <br />
        <input
          className="w-50"
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        Content <br />
        <textarea
          className="w-50 "
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <br />
        <button
          className="my-4 btn btn-warning w-50  btn-sm px-4"
          type="submit"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
