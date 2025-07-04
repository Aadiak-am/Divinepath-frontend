import React, { useEffect, useState } from "react";
import axios from "axios";
import apiUrls from "../../utils/apiUrls";
import { useUser } from "../../Context/userContext";

const UserDashboard = () => {
  const [totalBookings, setTotalBookings] = useState(0);
  const [upcomingCount, setUpcomingCount] = useState(0);

  const { user_id, name, role, email } = useUser();
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await axios.post(apiUrls.userBookings, {}, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const bookings = res.data.poojas || [];

        setTotalBookings(bookings.length);
        setUpcomingCount(bookings.filter((b) => b.status === "Upcoming").length);
      } catch (err) {
        console.error("❌ Error loading bookings:", err);
      }
    };

    fetchBookings();
  }, [token]);

  console.log("context is set just after login", user_id, name, role, email);

  return (
    <div style={{ backgroundColor: "#fffbe6", minHeight: "100vh", padding: "20px" }}>
      <h4 className="mb-4">Welcome, {name || "User"} 👋</h4>
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card border-primary shadow h-100">
            <div className="card-body text-center">
              <h5 className="card-title">📖 Total Bookings</h5>
              <p className="fs-3 text-primary fw-bold">{totalBookings}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-warning shadow h-100">
            <div className="card-body text-center">
              <h5 className="card-title">🛕 Upcoming Pujas</h5>
              <p className="fs-3 text-warning fw-bold">{upcomingCount}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card border-success shadow h-100">
            <div className="card-body text-center">
              <h5 className="card-title">👤 Manage Profile</h5>
              <p className="text-success">Update your details</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
