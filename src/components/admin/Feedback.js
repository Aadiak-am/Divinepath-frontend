import React, { useEffect, useState } from "react";
import axios from "axios";
import apiUrls from "../../utils/apiUrls"

function Feedback() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    try {
      const res = await axios.get(apiUrls.feedbacks);
      setFeedbacks(res.data.feedbacks);
    } catch (error) {
      console.error("❌ Error fetching feedbacks:", error);
    }
  };

  return (
    <div className="p-4" style={{ minHeight: "100vh", backgroundColor: "#fde276", color: "#212529" }}>
      <h3 className="fw-bold">📝 User Feedback</h3>
      <ul className="list-group mt-3">
        {feedbacks.map((fb, index) => (
          <li
            key={fb._id}
            className="list-group-item"
            style={{
              backgroundColor: index % 2 === 0 ? "#fff9e6" : "#fff4cc",
              border: "none",
              borderRadius: "8px",
              marginBottom: "10px",
            }}
          >
            <strong>{fb.user}:</strong> {fb.message}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Feedback;
