import React, { useState, Suspense, useCallback, useMemo } from "react";
import useSWR from "swr";

const UserList = React.lazy(() => import("./components/UserList"));
const UserForm = React.lazy(() => import("./components/AddUserForm"));
const UserDetail = React.lazy(() => import("./components/UserDetail"));

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App() {
  const { data: users, mutate } = useSWR(
    "https://jsonplaceholder.typicode.com/users",
    fetcher
  );

  const [selectedUser, setSelectedUser] = useState(null);

  const userList = useMemo(() => users || [], [users]);

  const handleSelectUser = useCallback((user) => {
    setSelectedUser(user);
  }, []);

  const handleAddUser = useCallback(
    (newUser) => {
      mutate([...userList, { id: Date.now(), ...newUser }], false);
    },
    [mutate, userList]
  );

  if (!users)
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-medium animate-pulse">Loading users...</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white py-4 shadow-md">
        <h1 className="text-2xl font-bold text-center">Optimized User Dashboard</h1>
      </header>

      <main className="p-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {/* Left: Form */}
        <Suspense fallback={<p>Loading Form...</p>}>
          <UserForm onAddUser={handleAddUser} />
        </Suspense>

        {/* Middle: User List */}
        <Suspense fallback={<p>Loading Users...</p>}>
          <UserList users={userList} onSelectUser={handleSelectUser} />
        </Suspense>

        {/* Right: User Details */}
        <Suspense fallback={<p>Loading Details...</p>}>
          {selectedUser ? (
            <UserDetail user={selectedUser} />
          ) : (
            <div className="p-6 border rounded-lg shadow-sm bg-white flex items-center justify-center text-gray-500">
              Select a user to view details
            </div>
          )}
        </Suspense>
      </main>
    </div>
  );
}
