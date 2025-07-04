import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function UserPanelPage(){
  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      {/* Sidebar */}
      <div className="bg-dark text-white p-4" style={{ width: "250px",backgroundColor:"black"  }}>
        <h3 className="mb-4 fw-bold">User Panel</h3>
        <ul className="nav flex-column gap-2">
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Dashboard</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">My Bookings</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">Profile</a>
          </li>
          <li className="nav-item mt-4">
            <a className="nav-link text-warning fw-bold" href="#">Logout</a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-grow-1 p-4 bg-warning bg-opacity-75">
        {/* Welcome Heading */}
        <h2 className="fw-bold mb-4">Welcome, User 🙏</h2>
        {/* Cards */}
        <div className="row mb-4">
          <div className="col-md-4 mb-3">
            <div className="card bg-danger text-white shadow">
              <div className="card-body">
                <h5>Total Bookings</h5>
                <h2>5</h2>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card bg-warning text-white shadow">
              <div className="card-body">
                <h5>Upcoming Pujas</h5>
                <h2>2</h2>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card bg-success text-white shadow">
              <div className="card-body">
                <h5>Completed</h5>
                <h2>3</h2>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Bookings Table */}
        <h4 className="fw-bold mb-3">Recent Bookings</h4>
        <div className="table-responsive">
          <table className="table table-bordered bg-white shadow">
            <thead className="table-light">
              <tr>
                <th>Booking ID</th>
                <th>Puja</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#DP101</td>
                <td>Mahamrityunjaya Jaap</td>
                <td>2025-06-18</td>
                <td><span className="badge bg-warning text-dark">Pending</span></td>
              </tr>
              <tr>
                <td>#DP102</td>
                <td>Sundarkand Path</td>
                <td>2025-06-12</td>
                <td><span className="badge bg-success">Completed</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserPanelPage;
