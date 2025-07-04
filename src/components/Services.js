import React from "react";

const Services = () => {
  return (
    <div style={{ backgroundColor: "#fff8dc", minHeight: "100vh" }}>
      <div className="container py-5">
        {/* Page Heading */}
        <h2 className="text-center mb-5 fw-bold text-warning">
          🙏 Our Spiritual Services
        </h2>

        {/* List of Services */}
        <div className="row mb-5">
          <div className="col-md-4">
            <div className="card shadow-sm border-0">
              <div className="card-body text-center">
                <h5 className="card-title">🪔 Daily Pooja</h5>
                <p className="card-text">
                  Experience peace and prosperity by participating in daily worship.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm border-0">
              <div className="card-body text-center">
                <h5 className="card-title">🌙 Dosh Nivaran</h5>
                <p className="card-text">
                  Remove negative energies with personalized dosh nivaran rituals.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm border-0">
              <div className="card-body text-center">
                <h5 className="card-title">🎉 Special Occasion Pooja</h5>
                <p className="card-text">
                  Book customized poojas for birthdays, anniversaries, and other events.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mahakal Worship Video Section */}
        <div className="bg-warning bg-opacity-10 p-4 my-5 rounded shadow text-center">
          <h5 className="mb-3 text-dark fw-semibold">🛕 Live Worship from Mahakaleshwar Temple</h5>

          <video
            width="100%"
            height="400"
            controls
            className="rounded"
          >
            <source src="/images/13201780_1920_1080_25fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <p className="mt-3 text-muted fst-italic">
            Feel the divine energy with real-time aarti visuals from Mahakal Mandir 🙏
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
