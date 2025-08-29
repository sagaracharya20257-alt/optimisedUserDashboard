import React from "react";

const UserDetail = ({ user }) => {
  if (!user) return <p>Select a user to see details</p>;

  return (
    <div>
      <h2>User Details</h2>
      <p><b>Name:</b> {user.name}</p>
      <p><b>Username:</b> {user.username}</p>
      <p><b>Email:</b> {user.email}</p>
    </div>
  );
};

export default UserDetail;
