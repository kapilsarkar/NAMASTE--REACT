import { useState } from "react";

const User = (props) => {
  const [count,setCount] = useState(0);
  const [count2,setCount2] = useState(1);
  const {name} = props;
  return (
    <div className="userCard">
      <h2>React-JS-Functional Component</h2>
      <h2>Count:{count}</h2>
      <h2>Count-2nd:{count2}</h2>
      <h2>Name:{name}</h2>
      <h3>Location:Asansol</h3>
      <h3>Contact: @https://x.com/kapil_cena1</h3>
    </div>
  );
};

export default User;
