import { KOLKATA_IMG } from "../utils/constant";

const City = () => {
  return (
    <div className="city-container">
      <h3>Top City</h3>
      <div className="all-city">
        <div className="kolkata">
          <img className="kolkata-img" src={KOLKATA_IMG} />
          <p className="kolkata-txt">Kolkata</p>
        </div>

        <div className="kolkata">
          <img className="kolkata-img" src={KOLKATA_IMG} />
          <p className="kolkata-txt">Delhi</p>
        </div>
        <div className="kolkata">
          <img className="kolkata-img" src={KOLKATA_IMG} />
          <p className="kolkata-txt">Bangalore</p>
        </div>
        <div className="kolkata">
          <img className="kolkata-img" src={KOLKATA_IMG} />
          <p className="kolkata-txt">Mumbai</p>
        </div>
        <div className="kolkata">
          <img className="kolkata-img" src={KOLKATA_IMG} />
          <p className="kolkata-txt">Pune</p>
        </div>
      </div>
    </div>
  );
};

export default City;
