import { useState } from "react";
import { CONTACT_IMG } from "../utils/constant";

const Contact = () => {
  const [msg, setMsg] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setMsg(true);
  };
  return (
    <div className=" w-full flex flex-wrap justify-evenly mt-1 overflow-y-hidden">
      <h1 className="mt-3 font-bold text-2xl">Contact Us</h1>
      <div className="flex items-center flex-col justify-between">
        <form
          className="flex flex-col items-center justify-center p-5"
          onSubmit={handleSubmit}
        >
          <input
            className="w-full m-3 p-2 shadow-2xl border-2 box-border"
            type="text"
            placeholder="Name"
            required
          />
          <input
            className="w-full m-3 p-2 shadow-2xl border-2 box-border"
            type="email"
            placeholder="Email"
            required
          />
          <textarea
            className="w-full m-3 p-2 shadow-2xl border-2 box-border"
            placeholder="Type Your Message here..."
            required
          ></textarea>
          <button
            className="cursor-pointer text-white bg-orange-600 border-none rounded-b-xs rounded-t-xs p-1.5 ml-2 font-bold shadow-2xl"
            type="submit"
          >
            Submit
          </button>
          {msg}
        </form>
      </div>
      <div className="contact-left">
        <img src={CONTACT_IMG} />
      </div>
    </div>
  );
};

export default Contact;
