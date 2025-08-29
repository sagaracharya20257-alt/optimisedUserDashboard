// import React from "react";

// const UserList = ({ users, onSelectUser }) => {
//   return (
//     <div>
//       <h2>User List</h2>
//       <ul>
//         {users.map((user) => (
//           <li
//             key={user.id}
//             onClick={() => onSelectUser(user)}
//             style={{ cursor: "pointer", margin: "5px 0" }}
//           >
//             {user.name} ({user.username})
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default UserList;

import React from "react";

const UserList = React.memo(({ users, onSelectUser }) => {
  return (
    <div className="p-6 border rounded-lg shadow-sm bg-white">
      <h2 className="text-xl font-semibold mb-4 text-blue-600">Users</h2>
      <ul className="space-y-2 max-h-[500px] overflow-y-auto">
        {users.map((user) => (
          <li
            key={user.id}
            className="p-3 border rounded-lg bg-gray-50 hover:bg-blue-50 hover:border-blue-400 cursor-pointer transition"
            onClick={() => onSelectUser(user)}
          >
            <div className="font-medium">{user.name}</div>
            <div className="text-sm text-gray-600">@{user.username}</div>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default UserList;


