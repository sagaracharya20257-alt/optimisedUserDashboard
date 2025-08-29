import React, { useState } from "react";

const AddUserForm = ({ onAddUser, totalUsers }) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // validation
    if (!name || !username || !email) {
      alert("Please fill all fields");
      return;
    }

    // create new user
    const newUser = {
      id: totalUsers + 1,
      name,
      username,
      email,
    };

    onAddUser(newUser);

    // reset inputs
    setName("");
    setUsername("");
    setEmail("");
  };

  return (
    <div>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <br />
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="username">Username:</label>
          <br />
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <button type="submit" style={{ marginTop: "1rem" }}>
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUserForm;
