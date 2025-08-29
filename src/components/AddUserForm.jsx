// import React, { useState } from "react";

// const AddUserForm = ({ onAddUser, totalUsers }) => {
//   const [name, setName] = useState("");
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // validation
//     if (!name || !username || !email) {
//       alert("Please fill all fields");
//       return;
//     }

//     // create new user
//     const newUser = {
//       id: totalUsers + 1,
//       name,
//       username,
//       email,
//     };

//     onAddUser(newUser);

//     // reset inputs
//     setName("");
//     setUsername("");
//     setEmail("");
//   };

//   return (
//     <div>
//       <h2>Add User</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="name">Name:</label>
//           <br />
//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />
//         </div>

//         <div>
//           <label htmlFor="username">Username:</label>
//           <br />
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </div>

//         <div>
//           <label htmlFor="email">Email:</label>
//           <br />
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>

//         <button type="submit" style={{ marginTop: "1rem" }}>
//           Add User
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddUserForm;


import React from "react";
import { useForm } from "react-hook-form";

const AddUserForm = ({ onAddUser }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    onAddUser(data);
    reset();
  };

  return (
    <div className="p-6 border rounded-lg shadow-sm bg-white">
      <h2 className="text-xl font-semibold mb-4 text-blue-600">Add New User</h2>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            {...register("name", { required: true })}
            placeholder="Enter full name"
            className="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Username</label>
          <input
            {...register("username", { required: true })}
            placeholder="Choose a username"
            className="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            {...register("email", { required: true })}
            placeholder="Enter email address"
            type="email"
            className="w-full p-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default React.memo(AddUserForm);

