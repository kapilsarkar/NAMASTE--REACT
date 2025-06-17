import { useEffect } from "react";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  useEffect(() => {
    const i = setInterval(() => {
        //Api Polling
        console.log("Api Polling")
    }, 2000);
    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <div className="w-full  bg-slate-200 rounded-lg">
      <h2 className=" font-bold text-xl p-2">Live Chat</h2>
      <ChatMessage name="Kapil Sarkar" message="React-JS" />
    </div>
  );
};

export default LiveChat;
