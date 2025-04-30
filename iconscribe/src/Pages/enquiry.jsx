import React, { useEffect, useState } from "react";
import Sidebar from "../components/sidebar";
import { ArrowUpNarrowWide, ListCollapse, ThumbsUp } from "lucide-react";
import "../css/enquiries.css";

function Enquiries() {
  const [enquiries, setEnquiries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortedByDate, setSortedByDate] = useState(false);
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);


  useEffect(() => {
    fetch('http://localhost:5000/api/enquiries')
      .then(res => res.json())
      .then(data => setEnquiries(data))
      .catch(err => console.error("Failed to fetch enquiries:", err));
  }, []);

  const handleUpdateStatus = (id, newStatus) => {
    fetch(`http://localhost:5000/api/enquiries/${id}/status`, {
      method: "PUT",
      body: JSON.stringify({ status: newStatus }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((updatedEnquiry) => {
        setEnquiries(enquiries.map(enquiry =>
          enquiry._id === id ? { ...enquiry, status: updatedEnquiry.status } : enquiry
        ));
      })
      .catch(err => console.error("Failed to update status:", err));
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredEnquiries = enquiries.filter((item) =>
    item.service?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSort = () => {
    const sorted = [...filteredEnquiries].sort((a, b) =>
      sortedByDate
        ? new Date(b.createdAt) - new Date(a.createdAt)
        : new Date(a.createdAt) - new Date(b.createdAt)
    );
    setEnquiries(sorted);
    setSortedByDate(!sortedByDate);
  };

  const openModal = (enquiry) => {
    setSelectedEnquiry(enquiry);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEnquiry(null);
  };

  return (
    <>
      <Sidebar />
      <section className="enquiries-section">
        <h1 className="enquiries-title">Enquiries</h1>

        <div className="enquiries-header">
          <input
            type="text"
            className="search-input"
            placeholder="Search by service"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button className="sort-button" onClick={handleSort}>
            <ArrowUpNarrowWide /> Sort Items
          </button>
        </div>

        <div className="table-container">
          <div className="table-header">
            <div>Enquiry No.</div>
            <div>Service</div>
            <div>Name</div>
            <div>Order Date</div>
            <div>Status</div>
            <div>Action</div>
          </div>

          {filteredEnquiries.map((item, index) => (
            <div key={item._id} className="table-row">
              <div>{index + 1}</div>
              <div>{item.service}</div>
              <div>{item.name}</div>
              <div>{item.date || new Date(item.createdAt).toLocaleDateString()}</div>
              <div className="status">
                <span className="dot" /> {item.status || "In review"}
              </div>
              <div className="action-buttons">
                <button
                  className="view-btn"
                  onClick={() => openModal(item)}
                >
                  <ListCollapse size={20} />
                </button>
                <button
                  className="approve-btn"
                  onClick={() => handleUpdateStatus(item._id, "approved")}
                >
                  <ThumbsUp className="thumbsUp" /> Approve
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && selectedEnquiry && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2>Enquiry Details</h2>
              <button className="close-btn" onClick={closeModal}>×</button>
            </div>

            <div className="modal-body">
              <input type="text" value={selectedEnquiry.name} readOnly placeholder="-Business Name-" />
              <input type="text" value={selectedEnquiry.location} readOnly placeholder="Address" />
              <input type="text" value={selectedEnquiry.contactNumber} readOnly placeholder="Phone" />
              <input type="text" value={selectedEnquiry.email} readOnly placeholder="Email" />

              <div className="upload-section">
                <div className="upload-placeholder">Copy of COR</div>
                <div className="upload-placeholder">Copy of Last Receipt</div>
              </div>

              <textarea
                readOnly
                value={selectedEnquiry.message}
                placeholder="Message"
              />
            </div>

            <div className="modal-footer">
              <button className="approve-btn" onClick={() => handleUpdateStatus(selectedEnquiry._id, "approved")}>
                <ThumbsUp className="thumbsUp" /> Approve
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Enquiries;
