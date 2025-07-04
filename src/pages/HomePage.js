import React from "react";
import { useNavigate } from "react-router-dom"; // 👈

export default function DivinePathHomePage() {
  const navigate = useNavigate(); // 👈

  return (
    <div className="font-serif">
      {/* Hero Section */}
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
          <button className="btn btn-danger mt-3" onClick={() => navigate("/book-pooja")}>
            Book a Pooja
          </button>
        </div>
      </section>

      {/* Featured Pujas */}
      <section className="bg-light p-5">
        <h3 className="h2 fw-bold text-danger mb-4 text-center text-md-start">Featured Poojas</h3>
        <div className="row g-4">
          {/* Griha Pravesh */}
          <div className="col-12 col-md-4">
            <div className="card h-100 shadow">
              <img src="/images/gp1.jpg" className="card-img-top" alt="Griha Pravesh" />
              <div className="card-body">
                <h5 className="card-title">Griha Pravesh</h5>
                <p className="card-text">A sacred ritual performed before entering a new home to purify the space and invite positive energy.</p>
              </div>
            </div>
          </div>

          {/* Satyanarayan Puja */}
          <div className="col-12 col-md-4">
            <div className="card h-100 shadow">
              <img src="/images/st1.webp" className="card-img-top" alt="Satyanarayan Pooja" />
              <div className="card-body">
                <h5 className="card-title">Satyanarayan Pooja</h5>
                <p className="card-text">Performed to seek blessings for prosperity, peace, and harmony in the family.</p>
              </div>
            </div>
          </div>

          {/* Ganesh Puja */}
          <div className="col-12 col-md-4">
            <div className="card h-100 shadow">
              <img src="/images/ganeshji.jpg" className="card-img-top" alt="Ganesh pooja" />
              <div className="card-body">
                <h5 className="card-title">Ganesh Pooja</h5>
                <p className="card-text">Ganesh Puja is performed to remove obstacles and bring success in new beginnings or ventures.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-warning bg-opacity-50 p-4">
        <blockquote className="blockquote mb-0 text-center text-md-start">
          <p>“Booking a pooja was so simple and the entire process was seamless. Will definitely use DivinePath again!”</p>
          <footer className="blockquote-footer mt-2">Ananya S.</footer>
        </blockquote>
      </section>

      {/* Call to Action */}
      <section className="bg-dark text-white text-center p-5">
        <h3 className="h2 mb-3">Ready to Book Your Pooja?</h3>
        <p className="lead">Get started on your spiritual journey today</p>
      
      </section>
    </div>
  );
}



