import React from "react";

const UserList = ({ users, onSelectUser }) => {
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            onClick={() => onSelectUser(user)}
            style={{ cursor: "pointer", margin: "5px 0" }}
          >
            {user.name} ({user.username})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
