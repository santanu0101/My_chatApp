import React, { useEffect, useRef } from "react";
import useGetMessage from "../../context/useGetMessage.js";
import Loading from "../../components/Loading.jsx";
import Message from "./Message.jsx";

function Messages() {
  const { loading, messages } = useGetMessage();

  // console.log(messages);
  // console.log(loading);

  const lastMessageRef = useRef();
  useEffect(()=>{
    setTimeout(()=>{
      if(lastMessageRef.current){
        lastMessageRef.current.scrollIntoView({behavior: 'smooth'});
      }
    },100);
  },[messages])
  

  return (
    <>
    {loading ? (<Loading></Loading>):(messages.length>0 && messages.map((message)=>{
      return <Message key={message._id} message={message} />
    }))}
      <div className="" style={{minHeight: "calc(88vh - 10vh)"}}>
      {!loading && messages.length === 0 && 
        <div>
          <p className="text-center mt-[20%]">
            Say! Hi to start the conversation
          </p>
        </div>
      }
        
      </div>
    </>
  );
}

export default Messages;
