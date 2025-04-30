import React, { useState } from 'react';
import Header from '../components/header';
import '../css/atp.css';
import { BadgeCheck } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import atp from '../assets/atp.png';
import axios from 'axios';

function ATP() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    contactNumber: '',
    location: '',
    service: 'Official Receipts',
    date: new Date().toLocaleDateString(),
    message: '',
    corFile: null,
    lastReceiptFile: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prev) => ({ ...prev, [name]: files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name: formData.name,
      email: formData.email,
      businessName: formData.businessName,
      contactNumber: formData.contactNumber,
      location: formData.location,
      service: formData.service,
      date: formData.date,
      message: formData.message,
    };

    try {
      const response = await axios.post('http://localhost:5000/api/enquiries', data);
      if (response.status === 201) {
        setShowModal(true);
        setTimeout(() => {
          navigate('/atp'); 
        }, 2500);
      }
    } catch (error) {
      console.error('Error submitting enquiry:', error);
      alert('Failed to submit');
    }
  };

  return (
    <>
      <Header />
      <div className="atp-container">
        <Link to="/dashboard" className='btn-back'>&lt; Back</Link>

        <div className="atp-title-section">
          <h2>Inquire</h2>
        </div>

        <div className="atp-content">
          <div className="atp-image">
            <h2>Official Receipts (ATP)</h2>
            <p>-Description-</p>
            <img src={atp} alt="Official Receipt" />
          </div>

          <div className="atp-form-section">
            <form className="atp-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <div className='form-name'>
                  <label>Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" />
                </div>
                <div className='form-email'>
                  <label>Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
                </div>
              </div>

              <div className="form-group">
                <div className='form-bname'>
                  <label>Business Name</label>
                  <input type="text" name="businessName" value={formData.businessName} onChange={handleChange} placeholder="Business name" />
                </div>
                <div className='form-number'>
                  <label>Contact Number</label>
                  <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} placeholder="Phone number" />
                </div>
              </div>

              <div className='form-bottom'>
                <div className='bottom-left'>
                  <div className="form-group single">
                    <div className='form-loc'>
                      <label>Location</label>
                      <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Enter your exact location" />
                    </div>
                  </div>

                  <div className="form-group single">
                    <div className='form-cor'>
                      <label>Photocopy of COR</label>
                      <input type="file" name="corFile" onChange={handleFileChange} />
                    </div>
                  </div>

                  <div className="form-group single">
                    <div className='form-last'>
                      <label>Photocopy of Last Receipt</label>
                      <input type="file" name="lastReceiptFile" onChange={handleFileChange} />
                    </div>
                  </div>
                </div>

                <div className='bottom-right'>
                  <div className="form-group single">
                    <div className='form-message'>
                      <label>Message (optional)</label>
                      <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Enter message"></textarea>
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-footer">
                <p>If applying for a rush job, please contact <span>#09123456789</span></p>
                <button type="submit">Request</button>
              </div>
            </form>
          </div>
        </div>
      </div>


      {showModal && (
        <div className="modal-overlay">
          <div className="approval-modal">
            <div className="modal-content">
              <p className="modal-message">Waiting for approval...</p>
                <div className='check-icon'>
                <BadgeCheck  size={200}/>
                </div>
              <p className='bottom-msg'>You will be notify through email or text message </p>
              <button type='submit' className='notif-btn' onClick={() => setShowModal(false)}> Continue </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ATP;
