import { CONTACT_IMG } from "../utils/constant";
import { useState } from "react";

const Contact = ()=>{
    const [msg, setMsg] = useState(false);
    const handleSubmit = (e) => {
      e.preventDefault();
      setMsg(true);
    };
    return(
        <div className="contact-container">
        <h1 className="contact-head">Contact Us</h1>
        <div className="contact-right">
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Type Your Message here..." required></textarea>
            <button type="submit">Submit</button>
            {msg}
          </form>
        </div>
        <div className="contact-left">
          <img src={CONTACT_IMG} />
        </div>
      </div>
    )
}

export default Contact