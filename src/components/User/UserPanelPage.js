import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import apiUrls from "../../utils/apiUrls";
import { useUser } from "../../Context/userContext";

const UserPanelPage = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");
  const { name } = useUser();

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await axios.post(apiUrls.userBookings, {}, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setBookings(res.data.poojas || []);
      } catch (err) {
        console.error("❌ Error fetching bookings:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [token]);

  const totalBookings = bookings.length;
  const upcomingCount = bookings.filter((b) => b.status === "Upcoming").length;
  const completedCount = bookings.filter((b) => b.status === "Completed").length;

  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <div
        className="text-white p-4"
        style={{ width: "250px", backgroundColor: "black" }}
      >
        <h3 className="mb-4 fw-bold">User Panel</h3>
        <ul className="nav flex-column gap-3 fs-5">
          <li><Link className="nav-link text-white" to="/user/dashboard">Dashboard</Link></li>
          <li><Link className="nav-link text-white" to="/user/bookings">My Bookings</Link></li>
          <li><Link className="nav-link text-white" to="/user/profile">Profile</Link></li>
          <li className="mt-4"><Link className="nav-link text-warning fw-bold" to="/login" onClick={() => localStorage.removeItem("token")}>Logout</Link></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 p-4" style={{ backgroundColor: "#F5F5F5" }}>
        <h2 className="fw-bold text-dark mb-4">Welcome, {name || "User"} 🙏</h2>

        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            {/* Stats Cards */}
            <div className="row mb-4">
              <div className="col-md-4">
                <div className="card text-white" style={{ background: "#6A67CE" }}>
                  <div className="card-body">
                    <h5 className="card-title">My Bookings</h5>
                    <h2 className="card-text">{totalBookings}</h2>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card text-white" style={{ background: "#FF9472" }}>
                  <div className="card-body">
                    <h5 className="card-title">Upcoming Pujas</h5>
                    <h2 className="card-text">{upcomingCount}</h2>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card text-white" style={{ background: "#00C897" }}>
                  <div className="card-body">
                    <h5 className="card-title">Completed</h5>
                    <h2 className="card-text">{completedCount}</h2>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Bookings Table */}
            <h4 className="fw-bold text-secondary mb-3">My Recent Bookings</h4>
            <div className="table-responsive">
              <table className="table table-bordered shadow-sm bg-white">
                <thead style={{ backgroundColor: "#6A67CE", color: "white" }}>
                  <tr>
                    <th>Booking ID</th>
                    <th>Puja</th>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.slice(0, 5).map((b) => (
                    <tr key={b._id}>
                      <td>#{(b._id || "").slice(-5).toUpperCase()}</td>
                      <td>{b.poojaType || "N/A"}</td>
                      <td>{b.date ? new Date(b.date).toLocaleDateString() : "N/A"}</td>
                      <td>
                        <span
                          className={`badge ${b.status === "Completed" ? "bg-success" : b.status === "Upcoming" ? "bg-warning text-dark" : "bg-secondary"}`}
                        >
                          {b.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                  {bookings.length === 0 && (
                    <tr>
                      <td colSpan="4" className="text-center">No bookings found.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UserPanelPage;
