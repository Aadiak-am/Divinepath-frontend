import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../Context/userContext";
import axios from "axios";
import apiUrls from "../../utils/apiUrls";

const ProfilePage = () => {
  const navigate = useNavigate();
  const { name, setName, email, setEmail, role, setRole } = useUser();

  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [myBookings, setMyBookings] = useState([]);
  const [selectedBooking, setSelectedBooking] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(apiUrls.getUserProfile, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = res.data;
        setForm({ name: data.name, email: data.email, password: "" });
        setName(data.name);
        setEmail(data.email);
        setRole(data.role);
      } catch (err) {
        setMessage("❌ Failed to load profile");
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(apiUrls.updateUserProfile, form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessage("✅ Profile updated successfully");
    } catch (err) {
      setMessage("❌ Update failed");
    }
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete your account?")) {
      try {
        await axios.delete(apiUrls.deleteUser, {
          headers: { Authorization: `Bearer ${token}` },
        });
        alert("Account deleted.");
        navigate("/login");
      } catch {
        alert("❌ Could not delete account");
      }
    }
  };

  const handleDeletePooja = async (id) => {
    if (window.confirm("Delete this booking?")) {
      try {
        await axios.delete(apiUrls.deletePooja(id), {
          headers: { Authorization: `Bearer ${token}` },
        });
        setMyBookings(myBookings.filter((b) => b._id !== id));
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleUpdatePooja = async (e) => {
    e.preventDefault();
    try {
      await axios.put(apiUrls.updatePooja(selectedBooking._id), {
        date: selectedBooking.date,
        poojaType: selectedBooking.poojaType,
      }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMyBookings(myBookings.map((b) => b._id === selectedBooking._id ? selectedBooking : b));
      setSelectedBooking(null);
      setMessage("✅ Booking updated");
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <div className="p-5 text-center">Loading profile...</div>;

  return (
    <div className="container py-5" style={{ backgroundColor: "#fefbe9" }}>
      <div className="p-4 rounded shadow bg-white">
        <h3 className="text-primary mb-3">👤 User Profile</h3>
        {message && <div className="alert alert-warning">{message}</div>}

        <form onSubmit={handleUpdate} className="row g-3">
          <div className="col-md-6">
            <label>Name</label>
            <input type="text" className="form-control" name="name" value={form.name} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label>Email</label>
            <input type="email" className="form-control" name="email" value={form.email} onChange={handleChange} required />
          </div>
          <div className="col-md-6">
            <label>Password</label>
            <input type="password" className="form-control" name="password" value={form.password} onChange={handleChange} />
          </div>
          <div className="col-12">
            <button className="btn btn-success me-2">Update</button>
            <button type="button" className="btn btn-outline-danger" onClick={handleDelete}>Delete Account</button>
          </div>
        </form>

        {/* You can keep bookings table code here if needed (currently not fetching in this file) */}
      </div>
    </div>
  );
};

export default ProfilePage;
