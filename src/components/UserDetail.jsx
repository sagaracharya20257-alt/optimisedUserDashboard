// import React from "react";

// const UserDetail = ({ user }) => {
//   if (!user) return <p>Select a user to see details</p>;

//   return (
//     <div>
//       <h2>User Details</h2>
//       <p><b>Name:</b> {user.name}</p>
//       <p><b>Username:</b> {user.username}</p>
//       <p><b>Email:</b> {user.email}</p>
//     </div>
//   );
// };

// export default UserDetail;

import React from "react";

const UserDetail = React.memo(({ user }) => {
  return (
    <div className="p-6 border rounded-lg shadow-sm bg-white">
      <h2 className="text-xl font-semibold mb-4 text-blue-600">User Details</h2>
      <div className="space-y-2 text-gray-700">
        <p><span className="font-medium">Name:</span> {user.name}</p>
        <p><span className="font-medium">Username:</span> {user.username}</p>
        <p><span className="font-medium">Email:</span> {user.email}</p>
        {user.address && (
          <p>
            <span className="font-medium">Address:</span> {user.address.street}, {user.address.city}
          </p>
        )}
        {user.phone && (
          <p><span className="font-medium">Phone:</span> {user.phone}</p>
        )}
        {user.website && (
          <p><span className="font-medium">Website:</span> {user.website}</p>
        )}
      </div>
    </div>
  );
});

export default UserDetail;

