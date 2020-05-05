import React from 'react';

const ListItem = ({ onChange, onDelete, value }) => {
  return (
    <div className="Item-container">
      <input
        className="Item-field"
        value={value}
        onChange={onChange}
      />
      <button className="Todo-button" onClick={onDelete}>Delete</button>
    </div>
  );
};

export default ListItem;

// {tasks.map(({id, value}, index) => (
//   <ListItem
//     key={id}
//     value={value}
//     onChange={(event) => editTask(event, index)}
//     onDelete={() => deleteTask(index)}
//   />
// ))} */}