import React from "react";
import warehouse from "../../images/banner/wirehouse.jpg";

const AboutPage = () => {
  return (
    <div className="w-75 mx-auto m-5">
      <h2 className="text-center text-primary">About Booking</h2>
      <hr className="bar" />
      <p className="text-center">
        Committed to providing the best fruits in Bangladesh.
      </p>
      <div className="d-md-flex mx-auto mt-4">
        <div className="border p-3 rounded shadow mb-4 mx-md-4 text-primary">
          <p>
            We understand that our customers demand and possible the best
            policy.
          </p>
          <p>
            Booking For:
            <br />
            <span>a) 10 days 10tk/kg</span>
            <br />
            <span>b) 1 month 15tk/kg</span>
            <br />
            <span>c) 3 months 25tk/kg</span>
            <br />
            <span>d) 6 months 30tk/kg</span>
          </p>
        </div>
        <div>
          <img className="img-fluid rounded shadow" src={warehouse} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
