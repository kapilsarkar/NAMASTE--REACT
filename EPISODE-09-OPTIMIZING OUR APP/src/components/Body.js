const Body = () => {
  return (
    <div className="body">
      <div className="search-filter">
        <div className="search">
          <input className="search-box" placeholder="Search..." type="text" />
          <button className="search-btn">Search</button>
          <button className="allRes-btn">All Restaurants</button>
        </div>
      </div>
      <h2 className="TopHeading" id="TopHeading">
        Top Restaurants
      </h2>
    </div>
  );
};

export default Body;
