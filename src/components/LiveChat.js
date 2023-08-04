import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { addMessage } from "../utils/chatSlice";
import { useDispatch, useSelector } from "react-redux";
import { generateRandomName, makeRandomMessage } from "../utils/helper";


const LiveChat = () => {
  const dispatch = useDispatch();

  const ChatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // API Polling
      console.log("API Polloing");
      dispatch(
        addMessage({  
          name: generateRandomName(),
          message: makeRandomMessage(20) + " Bye",
        })
      );
    }, 500);
    return () => clearInterval(i);
  }, []);
  return (
    <div className="w-full h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse ">
      {
        // Disclaimer: Do not use indexes as key
        ChatMessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message}/>
        ))
      }
    </div>
  );
};

export default LiveChat;
