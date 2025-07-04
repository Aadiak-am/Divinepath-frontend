import React, { useEffect, useState } from "react";
import axios from "axios";
import apiUrls from "../../utils/apiUrls"
import "bootstrap/dist/css/bootstrap.min.css";

const ManagePujas = () => {
  const [pujas, setPujas] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingPuja, setEditingPuja] = useState(null);
  const [newPuja, setNewPuja] = useState({
    poojaType: "",
    temple: "",
    price: "",
    category: "",
  });
  const [message, setMessage] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchPujas();
  }, []);

  const fetchPujas = async () => {
    try {
      const res = await axios.get(apiUrls.getAllPujas, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPujas(res.data);
    } catch (err) {
      console.error("❌ Error fetching pujas:", err);
    }
  };

  const handleChange = (e) => {
    setNewPuja({ ...newPuja, [e.target.name]: e.target.value });
  };

  const handleAddOrUpdate = async () => {
    try {
      if (editingPuja) {
        await axios.put(apiUrls.updatePuja(editingPuja._id), newPuja, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setMessage("✅ Puja updated successfully!");
      } else {
        await axios.post(apiUrls.createPuja, newPuja, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setMessage("✅ Puja added successfully!");
      }
      fetchPujas();
      setNewPuja({ poojaType: "", temple: "", price: "", category: "" });
      setShowModal(false);
      setEditingPuja(null);
    } catch (err) {
      console.error("❌ Error:", err);
      setMessage("❌ Something went wrong!");
    }
  };

  const handleEdit = (puja) => {
    setEditingPuja(puja);
    setNewPuja({
      poojaType: puja.poojaType,
      temple: puja.temple || "",
      price: puja.price || "",
      category: puja.category || "",
    });
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(apiUrls.deletePuja(id), {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessage("✅ Puja deleted successfully!");
      fetchPujas();
    } catch (err) {
      console.error("❌ Error deleting puja:", err);
      setMessage("❌ Failed to delete puja!");
    }
  };

  return (
    <div className="p-4" style={{ backgroundColor: "#fde276", minHeight: "100vh", color: "#212529" }}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="fw-bold">📿 Manage Pujas</h3>
        <button
          className="btn btn-danger"
          onClick={() => {
            setShowModal(true);
            setEditingPuja(null);
            setNewPuja({ poojaType: "", temple: "", price: "", category: "" });
          }}
        >
          + Add Puja
        </button>
      </div>

      {message && (
        <div className="alert alert-info text-center" role="alert">
          {message}
        </div>
      )}

      <table className="table table-bordered shadow-sm" style={{ backgroundColor: "#fff" }}>
        <thead style={{ backgroundColor: "#12192b", color: "white" }}>
          <tr>
            <th>#</th>
            <th>Puja Name</th>
            <th>Temple</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {pujas.map((puja, index) => (
            <tr key={puja._id} style={{ backgroundColor: index % 2 === 0 ? "#fff9e6" : "#fff4cc" }}>
              <td>{index + 1}</td>
              <td>{puja.poojaType}</td>
              <td>{puja.temple}</td>
              <td>
                <button className="btn btn-sm btn-warning me-2" onClick={() => handleEdit(puja)}>
                  Edit
                </button>
                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(puja._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && (
        <div className="modal show fade d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{editingPuja ? "Edit Puja" : "Add New Puja"}</h5>
                <button type="button" className="btn-close" onClick={() => { setShowModal(false); setEditingPuja(null); }}></button>
              </div>
              <div className="modal-body">
                <input
                  type="text"
                  name="poojaType"
                  className="form-control mb-2"
                  placeholder="Puja Name"
                  value={newPuja.poojaType}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="temple"
                  className="form-control mb-2"
                  placeholder="Temple Name"
                  value={newPuja.temple}
                  onChange={handleChange}
                />
                {!editingPuja && (
                  <>
                    <input
                      type="number"
                      name="price"
                      className="form-control mb-2"
                      placeholder="Price"
                      value={newPuja.price}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      name="category"
                      className="form-control mb-2"
                      placeholder="Category"
                      value={newPuja.category}
                      onChange={handleChange}
                    />
                  </>
                )}
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => { setShowModal(false); setEditingPuja(null); }}>Cancel</button>
                <button className="btn btn-danger" onClick={handleAddOrUpdate}>
                  {editingPuja ? "Update Puja" : "Add Puja"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManagePujas;
