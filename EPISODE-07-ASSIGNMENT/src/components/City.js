import { KOLKATA_IMG } from "../utils/constant";
import { DELHI_IMG } from "../utils/constant";
import { BANGALORE_IMG,MUMBAI_IMG } from "../utils/constant";
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
        <a href="#delhi" className="kolkata">
          <img className="kolkata-img" src={DELHI_IMG} />
          <p className="kolkata-txt">Delhi</p>
        </a>
        <a href="#bengaluru" className="kolkata">
          <img className="kolkata-img" src={BANGALORE_IMG} />
          <p className="kolkata-txt">Bengaluru</p>
        </a>
        <a href="#bengaluru" className="kolkata">
          <img className="kolkata-img" src={MUMBAI_IMG} />
          <p className="kolkata-txt">Mumbai</p>
        </a>
        <a href="#bengaluru" className="kolkata">
          <img className="kolkata-img" src={BANGALORE_IMG} />
          <p className="kolkata-txt">Jaipur</p>
        </a>
      </div>
    </div>
  );
};

export default City;