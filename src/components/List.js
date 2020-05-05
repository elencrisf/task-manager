import React from 'react';

const List = ({ onChange, index, value }) => {
  return (
    <>
    <div>
    <div>
      {/* <center>
        <h3>Task List</h3>
      </center> */}
    </div>
      <input
        className="Item-field" 
        value={index + "- " + value}
        onChange={onChange}
      />
    </div>
    </>
  );
};

export default List;

/* {tasks.map(({id, value}, index) => (
  <List
    key={id}
    value={value}
    index={index + 1}
    onChange={(event) => editTask(event, index)}
    onDelete={() => deleteTask(index)}
  />
))} */
