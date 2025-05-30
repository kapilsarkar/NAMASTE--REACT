import { KOLKATA_IMG } from "../utils/constant";
import { DELHI_IMG } from "../utils/constant";
import { BANGALORE_IMG,MUMBAI_IMG,JAIPUR_IMG } from "../utils/constant";
import { Link } from "react-router-dom";
const City = () => {
  return (
    <div className="city-container">
      <h2 className="city-head">Top Food Cities</h2>
      <div className="all-city">
        <Link to="/kolkata" className="kolkata">
          <img className="kolkata-img" src={KOLKATA_IMG} />
          <p className="kolkata-txt">Kolkata</p>
        </Link>
        <Link to="/delhi" className="kolkata">
          <img className="kolkata-img" src={DELHI_IMG} />
          <p className="kolkata-txt">Delhi</p>
        </Link>
        <Link to="/mumbai" className="kolkata">
          <img className="kolkata-img" src={MUMBAI_IMG} />
          <p className="kolkata-txt">Mumbai</p>
        </Link>
        <Link to="/bengaluru" className="kolkata">
          <img className="kolkata-img" src={BANGALORE_IMG} />
          <p className="kolkata-txt">Bengaluru</p>
        </Link>
        <Link to="/jaipur" className="kolkata">
          <img className="kolkata-img" src={JAIPUR_IMG} />
          <p className="kolkata-txt">Jaipur</p>
        </Link>
      </div>
    </div>
  );
};

export default City;