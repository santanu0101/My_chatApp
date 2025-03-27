import React, { useEffect } from "react";
import Chatuser from "./Chatuser";
import Messages from "./Messages";
import Type from "./Type";
import useConversation from "../../statemanage/useConversation.js";
import { useAuth } from "../../context/AuthProvider.jsx";

export default function Right() {
  const { selectedConversation, setSelectedConversation } = useConversation();
  useEffect(() => {
    return setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="w-full bg-slate-900 text-white">
    <div>
      {!selectedConversation ? (
        <Nochat></Nochat>
      ) : (
        <>
            <Chatuser></Chatuser>
            <div
              className="py-2 flex-san overflow-y-auto"
              style={{ maxHeight: "calc(88vh - 8vh)" }}
            >
              <Messages></Messages>
            </div>
            <Type></Type>
        </>
      )}
      </div>
    </div>
  );
}

const Nochat = () => {
  const [authUser] = useAuth();
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <h1 className="text-center font-semibold text-xl">Welcome <span>{authUser?.user?.name}</span><br></br> 
          Select a conversation to start a chat.
        </h1>
      </div>
    </>
  );
};
