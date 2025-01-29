import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      userInfo: {
        name: "Dummy",
        location: "Default",
        
      },
    };
    //console.log(this.props.name + "Child Constructor");
  }
  async componentDidMount() {
    //console.log(this.props.name + "Child Component Did Mount")
    //Api call
    const data = await fetch("https://api.github.com/users/kapilsarkar");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }
  render() {
    const { count } = this.state;
    const {name,location,avatar_url} = this.state.userInfo
    return (
      <div className="userCard">
        <h2>React-JS Class Based Component</h2>
        <h2>Count:{count}</h2>
        <button
          onClick={() => {
            //Never Update State variables Directly
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button>
        <img src={avatar_url}/>
        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
        <h3>Contact: @https://x.com/kapil_cena1</h3>
      </div>
    );
  }
}

export default UserClass;
