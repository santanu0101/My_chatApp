import React from "react";
import User from "./User";
import userGetAllUsers from "../../context/userGetAllUsers";

function Users() {
  const [allUsers, loading] = userGetAllUsers();
  console.log(allUsers);

  if (loading) {
    return <div>Loading...</div>; // Display a loading message while data is being fetched
  }

  if (!Array.isArray(allUsers)) {
    return <div>Error: allUsers is not an array. Received: {JSON.stringify(allUsers)}</div>; // Handle the error case
  }

  return (
    <div
      style={{ maxHeight: "calc(84vh - 1vh)" }}
      className="py-2 flex-san overflow-y-auto"
    >
      {allUsers.map((user, index) => (
        <User key={index} user={user} />
      ))}
    </div>
  );
}

export default Users;
