import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://cdn-icons-png.freepik.com/256/958/958170.png?semt=ais_hybrid"
        />
        <h3 className="food-heading">Food App</h3>
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const resObj = {
  id: "745861",
  imageId:
    "MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Shake.png",
  action: {
    link: "https://www.swiggy.com/collections/83673?collection_id=83673&tags=layout_CCS_Shakes&type=rcv2",
    text: "Shake",
    type: "WEBLINK",
  },
  entityType: "BANNER",
  accessibility: {
    altText: "restaurants curated for shakes",
    altTextCta: "open",
  },
  entityId: "swiggy://collectionV2?collection_id=83673&tags=layout_CCS_Shakes",
  frequencyCapping: {},
  externalMarketing: {},
  description: "Shake",
};


const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard
          resName="Meghna Foods"
          cuisine="Hyderabadi, Pizzas, Fast Food, Cafe"
          rating="5 star"
          time="40-50mins"
        />
        <RestaurantCard
          resName="KFC"
          cuisine="Burger,Fast Food"
          rating="4.8 star"
          time="20-30 mins"
        />
      </div>
    </div>
  );
};
const RestaurantCard = (props) => {
  const { resName, cuisine, rating, time } = props; //Destructuring
  console.log(props);
  return (
    <div className="res-card">
      <img
        alt="card"
        className="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/26/93808d5a-96a3-4547-9115-b490b9950cc6_931944.jpg"
      />
      <h3>{resName}</h3>
      <p>{cuisine}</p>
      <p>{rating}</p>
      <p>{time}</p>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
