// import React from "react";
// import { NavLink } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

// function AdminDashboard() {
//   return (
//     <div className="d-flex" style={{ minHeight: "100vh", backgroundColor: "#ffe082" }}>
      
//       {/* Sidebar */}
//       <div className="bg-dark text-white p-3" style={{ width: "250px" }}>
//         <h3 className="mb-4">Admin Panel</h3>
//         <ul className="nav flex-column">
//           <li className="nav-item mb-2">
//             <NavLink className="nav-link text-white" to="/admin/dashboard">Dashboard</NavLink>
//           </li>
//           <li className="nav-item mb-2">
//             <NavLink className="nav-link text-white" to="/admin/manage-pujas">Manage Pujas</NavLink>
//           </li>
//           <li className="nav-item mb-2">
//             <NavLink className="nav-link text-white" to="/admin/bookings">Bookings</NavLink>
//           </li>
//           <li className="nav-item mb-2">
//             <NavLink className="nav-link text-white" to="/admin/users">Users</NavLink>
//           </li>
//           <li className="nav-item mb-2">
//             <NavLink className="nav-link text-white" to="/admin/feedback">Feedback</NavLink>
//           </li>
//           <li className="nav-item mt-3">
//             <NavLink className="nav-link text-warning" to="/login">Logout</NavLink>
//           </li>
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div className="flex-grow-1 p-4">
//         <h2 className="mb-4">Welcome, Admin 🙏</h2>

//         <div className="row g-4">
//           <div className="col-md-4">
//             <div className="card text-white bg-danger mb-3">
//               <div className="card-body">
//                 <h5 className="card-title">Total Bookings</h5>
//                 <p className="card-text display-6">152</p>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-4">
//             <div className="card text-white bg-warning mb-3">
//               <div className="card-body">
//                 <h5 className="card-title">Total Users</h5>
//                 <p className="card-text display-6">82</p>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-4">
//             <div className="card text-white bg-success mb-3">
//               <div className="card-body">
//                 <h5 className="card-title">Pujas Listed</h5>
//                 <p className="card-text display-6">12</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <h4 className="mt-5">Recent Bookings</h4>
//         <table className="table table-striped mt-3">
//           <thead>
//             <tr>
//               <th>Booking ID</th>
//               <th>User</th>
//               <th>Puja</th>
//               <th>Date</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>#DP001</td>
//               <td>Rahul S.</td>
//               <td>Satyanarayan Puja</td>
//               <td>2025-06-04</td>
//               <td><span className="badge bg-success">Completed</span></td>
//             </tr>
//             <tr>
//               <td>#DP002</td>
//               <td>Anjali M.</td>
//               <td>Griha Pravesh</td>
//               <td>2025-06-05</td>
//               <td><span className="badge bg-warning text-dark">Pending</span></td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default AdminDashboard;




// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { NavLink } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

// function AdminDashboard() {
//   const [stats, setStats] = useState({
//     totalBookings: 0,
//     totalUsers: 0,
//     totalPujas: 0,
//     recentBookings: [],
//   });

//   useEffect(() => {
//     const fetchStats = async () => {
//       try {
//         // 👇 Get JWT token from localStorage
//         const token = localStorage.getItem("token");

//         const res = await axios.get("http://localhost:5000/api/admin/stats", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         setStats(res.data);
//       } catch (err) {
//         console.error("❌ Error fetching stats:", err);
//       }
//     };

//     fetchStats();
//   }, []);

//   return (
//     <div className="d-flex" style={{ minHeight: "100vh", backgroundColor: "#ffe082" }}>
//       <div className="bg-dark text-white p-3" style={{ width: "250px" }}>
//         <h3 className="mb-4">Admin Panel</h3>
//         <ul className="nav flex-column">
//           <li className="nav-item mb-2">
//             <NavLink className="nav-link text-white" to="/admin/dashboard">Dashboard</NavLink>
//           </li>
//           <li className="nav-item mb-2">
//             <NavLink className="nav-link text-white" to="/admin/manage-pujas">Manage Pujas</NavLink>
//           </li>
//           <li className="nav-item mb-2">
//             <NavLink className="nav-link text-white" to="/admin/bookings">Bookings</NavLink>
//           </li>
//           <li className="nav-item mb-2">
//             <NavLink className="nav-link text-white" to="/admin/users">Users</NavLink>
//           </li>
//           <li className="nav-item mb-2">
//             <NavLink className="nav-link text-white" to="/admin/feedback">Feedback</NavLink>
//           </li>
//           <li className="nav-item mt-3">
//             <NavLink className="nav-link text-warning" to="/login">Logout</NavLink>
//           </li>
//         </ul>
//       </div>

//       <div className="flex-grow-1 p-4">
//         <h2 className="mb-4">Welcome, Admin 🙏</h2>

//         <div className="row g-4">
//           <div className="col-md-4">
//             <div className="card text-white bg-danger mb-3">
//               <div className="card-body">
//                 <h5 className="card-title">Total Bookings</h5>
//                 <p className="card-text display-6">{stats.totalBookings}</p>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-4">
//             <div className="card text-white bg-warning mb-3">
//               <div className="card-body">
//                 <h5 className="card-title">Total Users</h5>
//                 <p className="card-text display-6">{stats.totalUsers}</p>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-4">
//             <div className="card text-white bg-success mb-3">
//               <div className="card-body">
//                 <h5 className="card-title">Pujas Listed</h5>
//                 <p className="card-text display-6">{stats.totalPujas}</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <h4 className="mt-5">Recent Bookings</h4>
//         <table className="table table-striped mt-3">
//           <thead>
//             <tr>
//               <th>Booking ID</th>
           
//               <th>Puja</th>
//               <th>Date</th>
//               <th>Status</th>
//             </tr>
//           </thead>
//           <tbody>
//             {stats.recentBookings.map((booking) => (
//               <tr key={booking._id}>
//                 <td>{booking._id}</td>
              
//                 <td>{booking.poojaType}</td>
//                 <td>{new Date(booking.date).toLocaleDateString()}</td>
//                 <td>
//                   <span
//                     className={`badge ${booking.status === "Completed" ? "bg-success" : "bg-warning text-dark"}`}
//                   >
//                     {booking.status}
//                   </span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default AdminDashboard;
 
import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import apiUrls from "../../utils/apiUrls"

function AdminDashboard() {
  const [stats, setStats] = useState({
    totalBookings: 0,
    totalUsers: 0,
    totalPujas: 0,
    recentBookings: [],
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(apiUrls.adminStats, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setStats(res.data);
      } catch (err) {
        console.error("❌ Error fetching stats:", err);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="d-flex" style={{ minHeight: "100vh", backgroundColor: "#ffe082" }}>
      <div className="bg-dark text-white p-3" style={{ width: "250px" }}>
        <h3 className="mb-4">Admin Panel</h3>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <NavLink className="nav-link text-white" to="/admin/dashboard">Dashboard</NavLink>
          </li>
          <li className="nav-item mb-2">
            <NavLink className="nav-link text-white" to="/admin/manage-pujas">Manage Pujas</NavLink>
          </li>
          <li className="nav-item mb-2">
            <NavLink className="nav-link text-white" to="/admin/bookings">Bookings</NavLink>
          </li>
          <li className="nav-item mb-2">
            <NavLink className="nav-link text-white" to="/admin/users">Users</NavLink>
          </li>
          <li className="nav-item mb-2">
            <NavLink className="nav-link text-white" to="/admin/feedback">Feedback</NavLink>
          </li>
          <li className="nav-item mt-3">
            <NavLink className="nav-link text-warning" to="/login">Logout</NavLink>
          </li>
        </ul>
      </div>

      <div className="flex-grow-1 p-4">
        <h2 className="mb-4">Welcome, Admin 🙏</h2>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card text-white bg-danger mb-3">
              <div className="card-body">
                <h5 className="card-title">Total Bookings</h5>
                <p className="card-text display-6">{stats.totalBookings}</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-white bg-warning mb-3">
              <div className="card-body">
                <h5 className="card-title">Total Users</h5>
                <p className="card-text display-6">{stats.totalUsers}</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-white bg-success mb-3">
              <div className="card-body">
                <h5 className="card-title">Pujas Listed</h5>
                <p className="card-text display-6">{stats.totalPujas}</p>
              </div>
            </div>
          </div>
        </div>

        <h4 className="mt-5">Recent Bookings</h4>
        <table className="table table-striped mt-3">
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>Puja</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {stats.recentBookings.map((booking) => (
              <tr key={booking._id}>
                <td>{booking._id}</td>
                <td>{booking.poojaType}</td>
                <td>{new Date(booking.date).toLocaleDateString()}</td>
                <td>
                  <span
                    className={`badge ${booking.status === "Completed" ? "bg-success" : "bg-warning text-dark"}`}
                  >
                    {booking.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminDashboard;
