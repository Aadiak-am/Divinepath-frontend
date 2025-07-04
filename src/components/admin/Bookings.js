import React, { useEffect, useState } from "react";
import axios from "axios";
import apiUrls from "../../utils/apiUrls"// 👈 import karo
import "bootstrap/dist/css/bootstrap.min.css";

function Bookings() {
  const [bookings, setBookings] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await axios.get(apiUrls.adminBookings, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBookings(res.data.bookings);
    } catch (error) {
      console.error("❌ Error fetching bookings:", error);
    }
  };

  const backgroundColor = "#fde276";
  const tableStyle = {
    color: "#212529",
    backgroundColor: "white",
    borderRadius: "10px",
    overflow: "hidden",
  };
  const stripedRowStyle = (index) => ({
    backgroundColor: index % 2 === 0 ? "#fff9e6" : "#fff4cc",
  });

  return (
    <div style={{ minHeight: "100vh", backgroundColor, padding: "20px", color: "#212529" }}>
      <h3 style={{ fontWeight: "bold" }}>📅 Manage Bookings</h3>
      <table className="table" style={tableStyle}>
        <thead>
          <tr>
            <th>Booking ID</th>
            <th>User</th>
            <th>Puja</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((b, idx) => (
            <tr key={b._id} style={stripedRowStyle(idx)}>
              <td>#{b._id.substring(0, 6).toUpperCase()}</td>
              <td>{b.bookedBy ? b.bookedBy.name : "N/A"}</td>
              <td>{b.poojaType}</td>
              <td>{b.date ? b.date.split("T")[0] : "N/A"}</td>
              <td>
                {b.status === "Completed" ? (
                  <span
                    style={{
                      backgroundColor: "#198754",
                      color: "white",
                      padding: "4px 8px",
                      borderRadius: "12px",
                      fontWeight: "600",
                      fontSize: "0.9rem",
                    }}
                  >
                    Completed
                  </span>
                ) : (
                  <span
                    style={{
                      backgroundColor: "#f0ad4e",
                      color: "#3c2f0c",
                      padding: "4px 8px",
                      borderRadius: "12px",
                      fontWeight: "600",
                      fontSize: "0.9rem",
                    }}
                  >
                    Pending
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Bookings;
