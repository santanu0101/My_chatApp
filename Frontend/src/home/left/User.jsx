import React from "react";
import useConversation from "../../statemanage/useConversation.js";

function User({ user }) {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === user._id;
  return (
    <div
      className={`hover:bg-slate-600 duration-300 
      ${isSelected ? "bg-slate-700" : ""}`}
      onClick={() => setSelectedConversation(user)}
    >
      <div className="flex space-x-4 px-8 py-7 hover:bg-slate-600 duration-300 cursor-pointer">
        <div className="avatar online">
          <div className="w-14 rounded-full">
            <img src="https://yt3.googleusercontent.com/39UF-aSJO01Dx53gXtCJq3RAnLiNCmu_CRpJkOZAr_PL9OwmNh-rqfegd6sYlAlBAh4nEfRn8sA=s900-c-k-c0x00ffffff-no-rj" />
          </div>
        </div>
        <div>
          <h1 className="font-bold">{user.name}</h1>
          <span>{user.email}</span>
        </div>
      </div>
    </div>
  );
}

export default User;
