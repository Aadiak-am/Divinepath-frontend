import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-warning bg-opacity-50 d-flex flex-column flex-md-row align-items-center justify-content-between p-5 text-center text-md-start">
      <img
        src="/images/gl.png"
        alt="Ganesh"
        className="img-fluid mb-4 mb-md-0"
        style={{ maxWidth: "200px", height: "auto" }}
      />
      <div className="ms-md-5">
        <h2 className="display-5 fw-bold text-danger">Experience Spiritual Serenity</h2>
        <p className="lead mt-3">Book your pooja with ease and convenience</p>
        <button className="btn btn-danger mt-3">Book a Pooja</button>
      </div>
    </section>
  );
};

export default HeroSection;
