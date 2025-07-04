import React from "react";
import { NavLink } from "react-router-dom";
import pageRoutes from "../utils/pageRoutes"; // ✅ import kiya

const AdminSidebar = () => {
  return (
    <>
      <style>
        {`
        /* ✅ Tumhara existing CSS, same as before */
        `}
      </style>

      <div className="admin-layout">
        {/* Sidebar */}
        <aside className="admin-sidebar">
          <h2 className="sidebar-title">Admin Panel</h2>
          <ul className="sidebar-nav">
            <li><NavLink to={pageRoutes.adminDashboard} activeclassname="active">Dashboard</NavLink></li>
            <li><NavLink to={pageRoutes.managePujas} activeclassname="active">Manage Pujas</NavLink></li>
            <li><NavLink to={pageRoutes.bookings} activeclassname="active">Bookings</NavLink></li>
            <li><NavLink to={pageRoutes.users} activeclassname="active">Users</NavLink></li>
            <li><NavLink to={pageRoutes.feedback} activeclassname="active">Feedback</NavLink></li>
            <li className="logout"><NavLink to={pageRoutes.login}>Logout</NavLink></li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="admin-content">
          <h2 className="mb-4">Welcome, Admin 🙏</h2>

          <div className="card-grid">
            <div className="card red">
              <h5>Total Bookings</h5>
              <p>152</p>
            </div>
            <div className="card yellow">
              <h5>Total Users</h5>
              <p>82</p>
            </div>
            <div className="card green">
              <h5>Pujas Listed</h5>
              <p>12</p>
            </div>
          </div>

          <h4 className="mt-5">Recent Bookings</h4>
          <table className="styled-table">
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
              <tr>
                <td>#DP001</td>
                <td>Rahul S.</td>
                <td>Satyanarayan Puja</td>
                <td>2025-06-04</td>
                <td><span className="badge success">Completed</span></td>
              </tr>
              <tr>
                <td>#DP002</td>
                <td>Anjali M.</td>
                <td>Griha Pravesh</td>
                <td>2025-06-05</td>
                <td><span className="badge warning">Pending</span></td>
              </tr>
            </tbody>
          </table>
        </main>
      </div>
    </>
  );
};

export default AdminSidebar;
