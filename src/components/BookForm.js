import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useUser } from '../Context/userContext';
import apiUrls from '../utils/apiUrls'; // ✅ Import apiUrls

function BookForm() {
  const { state } = useLocation();
  const pooja = state?.pooja;
  const { user_id } = useUser();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gotra: '',
    message: '',
    date: '',
    poojaType: '',
    temple: ''
  });

  const [temples, setTemples] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // ✅ Fetch all temples using apiUrls
    const fetchTemples = async () => {
      try {
        const res = await axios.get(apiUrls.getAllTemples);
        setTemples(res.data);
      } catch (err) {
        console.error("❌ Failed to fetch temples:", err);
      }
    };
    fetchTemples();
  }, []);

  if (!pooja) {
    return <div style={{ textAlign: 'center', marginTop: '50px' }}>❌ No pooja selected!</div>;
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const { name, email, phone, date, poojaType, temple } = formData;

    if (!name || !email || !phone || !date || !poojaType || !temple) {
      setError('⚠️ Please fill all required fields including temple.');
      setLoading(false);
      return;
    }

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("❌ No token found. Please login again.");
        setLoading(false);
        return;
      }

      const payload = {
        ...formData,
        selectedPoojaId: pooja._id,
        selectedPoojaTitle: pooja.title,
        user_id: user_id,
      };

      console.log("📤 API CALL: Booking data being sent:", payload);

      const response = await axios.post(apiUrls.createPooja, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("✅ Booking Submitted Successfully:", response.data);
      alert(`🎉 Pooja booked for ${formData.name}!\nTemple: ${formData.temple}`);
      navigate("/");
    } catch (err) {
      console.error('❌ Booking failed:', err);
      setError(err.response?.data?.message || 'Booking failed, please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const pageStyle = {
    backgroundImage: 'url("/images/back.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  };

  const cardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: '30px',
    borderRadius: '12px',
    maxWidth: '600px',
    width: '100%',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
  };

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <h3>📿 Booking: {pooja.title}</h3>
        <p style={{ color: '#666' }}>{pooja.description}</p>
        <p><strong>Date:</strong> {pooja.date}</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Your Name</label>
            <input type="text" className="form-control" name="name" required onChange={handleChange} />
          </div>

          <div className="mb-3">
            <label>Email Address</label>
            <input type="email" className="form-control" name="email" required onChange={handleChange} />
          </div>

          <div className="mb-3">
            <label>Phone Number</label>
            <input type="tel" className="form-control" name="phone" required onChange={handleChange} />
          </div>

          <div className="mb-3">
            <label>Gotra (Optional)</label>
            <input type="text" className="form-control" name="gotra" onChange={handleChange} />
          </div>

          <div className="mb-3">
            <label>Additional Message</label>
            <textarea className="form-control" name="message" rows="3" onChange={handleChange}></textarea>
          </div>

          <div className="mb-3">
            <label>Select Date for Pooja</label>
            <input type="date" className="form-control" name="date" required onChange={handleChange} />
          </div>

          <div className="mb-3">
            <label>Pooja Type</label>
            <input type="text" className="form-control" name="poojaType" required onChange={handleChange} placeholder="e.g. Rudrabhishek, Satyanarayan" />
          </div>

          <div className="mb-3">
            <label>Select Temple</label>
            <select className="form-control" name="temple" required onChange={handleChange}>
              <option value="">-- Select a Temple --</option>
              {temples.map((temple) => (
                <option key={temple._id} value={temple.name}>
                  {temple.name} ({temple.location})
                </option>
              ))}
            </select>
          </div>

          {error && <div className="alert alert-danger text-center">{error}</div>}

          <button type="submit" className="btn btn-primary w-100" disabled={loading}>
            {loading ? '⏳ Booking...' : '✅ Confirm Booking'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookForm;
