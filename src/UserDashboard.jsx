// import React, { useState, useEffect } from "react";
// import UserList from "./components/UserList";
// import UserDetails from "./components/UserDetail";
// import AddUserForm from "./components/AddUserForm";

// const UserDashboard = () => {
//   const [users, setUsers] = useState([]);
//   const [selectedUser, setSelectedUser] = useState(null);

//   // fetch users from API
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((data) => setUsers(data))
//       .catch((err) => console.error(err));
//   }, []);

//   // add new user
//   const handleAddUser = (newUser) => {
//     setUsers([...users, newUser]);
//   };

//   return (
//     <div style={{ display: "flex", gap: "2rem" }}>
//       <UserList users={users} onSelectUser={setSelectedUser} />
//       <UserDetails user={selectedUser} />
//       <AddUserForm onAddUser={handleAddUser} totalUsers={users.length} />
//     </div>
//   );
// };

// export default UserDashboard;
