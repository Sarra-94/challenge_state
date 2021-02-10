import React from "react";

const ListItem = ({ listItems, handleDelete }) => {
  return (
    <div>
      <h2>List Of Items</h2>
      {listItems.map((element, i) => (
        <ul>
          <li>{element}</li>
          <button onClick={() => handleDelete(i)}>Delete</button>
        </ul>
      ))}
    </div>
  );
};

export default ListItem;
