import { KOLKATA_IMG } from "../utils/constant";
import { DELHI_IMG } from "../utils/constant";
import { BANGALORE_IMG } from "../utils/constant";
const City = () => {
  return (
    <div className="city-container">
      <h2 className="city-head">Top Food Cities</h2>
      <div className="all-city">
        <a href="#kolkata" className="kolkata">
          <img className="kolkata-img" src={KOLKATA_IMG} />
          <p className="kolkata-txt">Kolkata</p>
        </a>
        <a href="#delhi" className="kolkata">
          <img className="kolkata-img" src={DELHI_IMG} />
          <p className="kolkata-txt">Delhi</p>
        </a>
        <a href="#bengaluru" className="kolkata">
          <img className="kolkata-img" src={BANGALORE_IMG} />
          <p className="kolkata-txt">Bengaluru</p>
        </a>
      </div>
    </div>
  );
};

export default City;
