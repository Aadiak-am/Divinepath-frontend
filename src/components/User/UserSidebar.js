import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const UserSideBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname.startsWith(path);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div
      className="d-flex flex-column justify-content-between p-3"
      style={{
        width: "250px",
        minHeight: "100vh",
        backgroundColor: "#000",
        color: "#fff",
        fontFamily: "Segoe UI",
      }}
    >
      <style>
        {`
          .user-link {
            display: block;
            padding: 10px 15px;
            color: white;
            text-decoration: none;
            margin: 8px 0;
            border-radius: 5px;
            transition: background-color 0.3s, color 0.3s;
          }

          .user-link.active {
            background-color: white;
            color: black;
            font-weight: bold;
          }

          .user-link:hover {
            background-color: #444;
            color: white;
          }

          .logout-btn {
            background-color: #dc3545;
            border: none;
            padding: 10px;
            color: white;
            font-weight: bold;
            border-radius: 5px;
            cursor: pointer;
          }

          .logout-btn:hover {
            background-color: #b02a37;
          }
        `}
      </style>

      <div>
        <h4 className="text-center">User Panel</h4>
        <ul className="nav flex-column mt-3">
          <li className="nav-item">
            <Link
              to="/user/dashboard"
              className={`user-link ${isActive("/user/dashboard") ? "active" : ""}`}
            >
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/user/bookings"
              className={`user-link ${isActive("/user/bookings") ? "active" : ""}`}
            >
              My Bookings
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/user/profile"
              className={`user-link ${isActive("/user/profile") ? "active" : ""}`}
            >
              Profile
            </Link>
          </li>
        </ul>
      </div>

      <button className="logout-btn mt-3" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserSideBar;
