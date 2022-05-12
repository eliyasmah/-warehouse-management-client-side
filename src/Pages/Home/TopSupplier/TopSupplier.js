import React from "react";
import "./TopSupplier.css";

const TopSupplier = () => {
  return (
    <div>
      <h2 className="text-primary text-center mt-5">Our Top Suppliers</h2>
      <hr className="bar" />
      <div>
        <div className="row row-cols-1 row-cols-md-3 g-4 m-4">
          <div className="col">
            <div className="card h-50">
              <img
                className="card-img-top"
                src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1650317917~exp=1650318517~hmac=4868dd66d4535157e1aef3c7ec77689544fbdb61b4ba16657b328cedc1bed943&w=740"
                alt=""
              />
              <div className="card-body bg-primary text-white">
                <h4 className="card-title text-center">Faridul Hasan</h4>
                <h6>Supply: Strawberry, Mango, Orange, Lemon</h6>
                <p className="bg-danger py-2 text-center rounded mt-5 mb-0 fs-5">
                  Ratting: 5
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img
                className="card-img-top"
                src="https://img.freepik.com/free-photo/red-haired-serious-young-man-blogger-looks-confidently_273609-16730.jpg?w=740&t=st=1650320814~exp=1650321414~hmac=4123087d2455b6d83b59ef3a5f71df6d21c585bc578293684ddb15219572aa4a"
                alt=""
              />
              <div className="card-body bg-primary text-white">
                <h4 className="card-title text-center">Faridul Hasan</h4>
                <h6>Supply: Watermelon, Lemon</h6>
                <p className="bg-danger py-2 text-center rounded mt-5 mb-0 fs-5">
                  Ratting: 4.5
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img
                className="card-img-top"
                src="https://img.freepik.com/free-photo/excited-stylish-curly-haired-girl-sunglasses-pointing-right-showing-way_176420-20193.jpg?t=st=1650320840~exp=1650321440~hmac=d13fe40b084e0dae9ac6d23c964ddb0cfed88cbce8fc9a94a019a3143cff1f0e&w=740"
                alt=""
              />
              <div className="card-body bg-primary text-white">
                <h4 className="card-title text-center">Faridul Hasan</h4>
                <h6>Supply: Pineapple, Orange</h6>
                <p className="bg-danger py-2 text-center rounded mt-5 mb-0 fs-5">
                  Ratting: 5
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSupplier;
