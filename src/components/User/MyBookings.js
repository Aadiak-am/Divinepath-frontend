import React, { useEffect, useState } from "react";
import axios from "axios";
import apiUrls from "../../utils/apiUrls";

function Bookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchAllBookings = async () => {
      if (!token) {
        setError("User not authenticated.");
        setLoading(false);
        return;
      }

      try {
        const res = await axios.post(apiUrls.userBookings, {}, {
          headers: { Authorization: `Bearer ${token}` },
        });

        console.log("✅ API response:", res.data);

        const data = res.data;
        if (Array.isArray(data.poojas)) {
          setBookings(data.poojas);
        } else {
          setError("Unexpected response format.");
        }
      } catch (err) {
        console.error("❌ Error fetching all bookings:", err);
        setError("Failed to load bookings");
      } finally {
        setLoading(false);
      }
    };

    fetchAllBookings();
  }, [token]);

  if (loading) return <div style={{ padding: "20px" }}>Loading bookings...</div>;
  if (error) return <div style={{ padding: "20px", color: "red" }}>{error}</div>;

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#fde276", padding: "20px", color: "#212529" }}>
      <h3 style={{ fontWeight: "bold" }}>📅 Manage All Bookings</h3>
      {!Array.isArray(bookings) || bookings.length === 0 ? (
        <div style={{ padding: "10px", background: "#fff3cd", borderRadius: "5px" }}>
          No bookings found.
        </div>
      ) : (
        <table className="table" style={{ color: "#212529", backgroundColor: "white", borderRadius: "10px", overflow: "hidden" }}>
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>Pooja</th>
              <th>Temple</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b, idx) => (
              <tr key={b._id || idx} style={{ backgroundColor: idx % 2 === 0 ? "#fff9e6" : "#fff4cc" }}>
                <td>#{(b._id || b.id || "").slice(-5).toUpperCase()}</td>
                <td>{b.poojaType || b.puja || "N/A"}</td>
                <td>{b.temple || b.templeName || "N/A"}</td>
                <td>{b.date ? new Date(b.date).toLocaleDateString() : "N/A"}</td>
                <td>
                  <span
                    style={{
                      backgroundColor:
                        b.status === "Completed"
                          ? "#198754"
                          : b.status === "Pending"
                          ? "#f0ad4e"
                          : "#6c757d",
                      color: b.status === "Pending" ? "#3c2f0c" : "white",
                      padding: "4px 8px",
                      borderRadius: "12px",
                      fontWeight: "600",
                      fontSize: "0.9rem",
                    }}
                  >
                    {b.status || "Unknown"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Bookings;
