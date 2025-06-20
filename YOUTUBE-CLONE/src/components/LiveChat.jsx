/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, randomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      //Api Polling
      //console.log("Api Polling");

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: randomMessage(20),
        })
      );
    }, 2000);
    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <>
      <div className="w-full dark:bg-gray-900 text-black dark:text-white  bg-slate-200 rounded-lg overflow-y-scroll h-[26rem] flex flex-col-reverse shadow-lg">
        {chatMessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
        <h2 className=" font-bold text-xl p-2">Live Chat</h2>
      </div>
      <form
        className="w-full p-2 media338:ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Kapil sarkar",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="w-64 p-2 dark:bg-gray-900 text-black dark:text-white dark:border-white border-border-black"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className=" px-2 mt-2 bg-green-500 text-white font-bold">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
