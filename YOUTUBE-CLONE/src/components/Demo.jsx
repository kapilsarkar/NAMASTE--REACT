import { useState } from "react";

const Demo = () => {
  const [text, setText] = useState("");
  //console.log("Rendering");
  //Heavy Operation
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  return (
    <>
      <div
        className={
          "m-3 p-3 w-96 h-96 border border-black " +
          (isDarkTheme && "bg-gray-900 text-white")
        }
      >
       
        <div>
          <button
            className="m-1 p-5 bg-green-500"
            onClick={() => setIsDarkTheme(!isDarkTheme)}
          >
            Toggle
          </button>
        </div>
        <div>
          <input
            className=" border border-black w-72 px-2"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>
    </>
  );
};

export default Demo;
