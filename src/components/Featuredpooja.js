import React from "react";

const FeaturedPoojas = () => {
  return (
    <section className="bg-light p-5">
      <h3 className="h2 fw-bold text-danger mb-4 text-center text-md-start">Featured Pujas</h3>
      <div className="row g-4">
        {/* Griha Pravesh */}
        <div className="col-12 col-md-4">
          <div className="card h-100 shadow">
            <img src="/images/gp1.jpg" className="card-img-top" alt="Griha Pravesh" />
            <div className="card-body">
              <h5 className="card-title">Griha Pravesh</h5>
              <p className="card-text">
                A sacred ritual performed before entering a new home to purify the space and invite positive energy.
              </p>
            </div>
          </div>
        </div>

        {/* Satyanarayan Puja */}
        <div className="col-12 col-md-4">
          <div className="card h-100 shadow">
            <img src="/images/st1.webp" className="card-img-top" alt="Satyanarayan Pooja" />
            <div className="card-body">
              <h5 className="card-title">Satyanarayan Pooja</h5>
              <p className="card-text">
                Performed to seek blessings for prosperity, peace, and harmony in the family.
              </p>
            </div>
          </div>
        </div>

        {/* Ganesh Pooja */}
        <div className="col-12 col-md-4">
          <div className="card h-100 shadow">
            <img src="/images/ganeshji.jpg" className="card-img-top" alt="Ganesh Pooja" />
            <div className="card-body">
              <h5 className="card-title">Ganesh Pooja</h5>
              <p className="card-text">
                Ganesh Puja is performed to remove obstacles and bring success in new beginnings or ventures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPoojas;
