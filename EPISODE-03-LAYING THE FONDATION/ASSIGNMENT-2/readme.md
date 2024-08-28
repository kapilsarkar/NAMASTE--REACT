### Create a Header Component from scratch using Functional Component 🚀 with JSX ➡️ 

- Add a Logo on Left.

- Add a search bar in middle.

- Add User icon on right.

- Add CSS to make it look nice.

### CODE :

```
const HeaderComponent = () => {
  return (
    <div id="container">
       
      <div className="logo">
        <img src={logo} id="imgLogo" alt="logo" />
      </div>
      <div className="searchBox">
        <input type="text" className="search" placeholder="Search" />
        <button type="submit" id="btnSubmit">Submit</button>
      </div>
      <div className="userIcon">
        <img src={user} id="user" alt="user"/>
      </div>
    </div>
  );
};
```

### LINK OF THE ASSIGNMENT :

[LIVE LINK](https://searchbarreactassignment.netlify.app/)
