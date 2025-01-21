import React from "react";

class UserClass extends React.Component {
  constructor(props){
    super(props)
    this.state={
      count :0,
    }
  }
  render() {
    const {name,location} = this.props;
    const {count} = this.state;
    return (
      <div className="userCard">
        <h2>React-JS Class Based Component</h2>
        <h2>Count:{count}</h2>
        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
        <h3>Contact: @https://x.com/kapil_cena1</h3>
      </div>
    );
  }
}

export default UserClass;
