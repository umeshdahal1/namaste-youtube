import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { addMessage } from "../utils/chatSlice";
import { useDispatch, useSelector } from "react-redux";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [LiveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const ChatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20) + " Bye",
        })
      );
    }, 2000);
    return () => clearInterval(i);
  },
  //  []
   );
  return (
    <>
      <div className="w-full h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse ">
        <div>
          {
            // Disclaimer: Do not use indexes as key
            ChatMessages.map((c, i) => (
              <ChatMessage key={i} name={c.name} message={c.message} />
            ))
          }
        </div>
      </div>

      <form
        className="w-full p-2 ml-2 border border-black flex"
        onSubmit={(e) => {
          e.preventDefault();
          // console.log("On form Submit", LiveMessage);
          dispatch(
            addMessage({
              name: "Umesh Dahal",
              message:  LiveMessage,
            })
          );
          setLiveMessage ("");
        }}
      >
        <input
          className="w-96 px-2"
          type="text"
          value={LiveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className=" px-2 mx-2 bg-green-100">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
