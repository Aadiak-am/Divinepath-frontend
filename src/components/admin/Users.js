import React, { useEffect, useState } from "react";
import axios from "axios";
import apiUrls from "../../utils/apiUrls"

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(apiUrls.getAllUsers, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUsers(res.data.users);
      } catch (error) {
        console.error("❌ Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="p-4" style={{ minHeight: "100vh", backgroundColor: "#fde276", color: "#212529" }}>
      <h3 className="fw-bold">👥 Manage Users</h3>
      <table className="table table-bordered mt-3 shadow-sm" style={{ backgroundColor: "#fff" }}>
        <thead style={{ backgroundColor: "#12192b", color: "white" }}>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, idx) => (
            <tr
              key={u._id}
              style={{
                backgroundColor: idx % 2 === 0 ? "#fff9e6" : "#fff4cc",
              }}
            >
              <td>{idx + 1}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
