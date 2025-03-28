import React from "react";
import Search from "./Search";
import Users from "./Users";

function left() {
  return (
    <div className="w-[30%] bg-black text-white">
      <h1 className="font-bold text-3xl p-2 px-11">Chat App</h1>
      <Search></Search>
      <hr />
      <Users></Users>
    </div>
  );
}

export default left;
