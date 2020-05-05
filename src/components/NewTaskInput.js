import React, { useState } from 'react';
const NewTaskInput = ({ onSubmit }) => {

  const [newItem, setNewItem] = useState('');

  function setNewTask({target}) {
    setNewItem(target.value);
  }

  function submit(e) {
    e.preventDefault();
    onSubmit(newItem);
  }

  return (
    <div>
      <form onSubmit={submit}>
        <input
          className="Todo-input"
          placeholder="Type a new task"
          onChange={setNewTask}
        />
        <button className="Todo-button" type="submit">
          Add
        </button>
      </form>
    </div>
  )
};

export default NewTaskInput;
