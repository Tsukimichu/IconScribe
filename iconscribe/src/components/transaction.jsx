import React from "react";
import "../css/transaction.css";
import phone from '../assets/Phone.png'

function Transaction() {
  return (
    <div className="transaction-page">
      <h2 className="transaction-title">Transactions</h2>
      <div className="transaction-content">
      <div className="project-summary">
          <h3>Project Summary</h3>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Date Ordered</th>
                  <th>Urgency</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Official Receipts</td>
                  <td>04/11/2025</td>
                  <td><span className="urgency minor">Minor</span></td>
                  <td><span className="status review">In review</span></td>
                  <td>
                    <div className="action-button">
                      <button className="call-btn"><img src={phone} alt="Call" /></button>
                      <button className="details-btn">View Details</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>


        <div className="notifications">
          <h3>Notifications</h3>
          <ul>
            <li><span>Official Receipts</span><span>04/11/2025</span></li>
            <li><span>Book</span><span>04/11/2025</span></li>
            <li><span>Service Approved</span><span>04/11/2025</span></li>
            <li className="notif-green"><span>Completed</span><span>04/11/2025</span></li>
            <li className="notif-yellow"><span>Out for Delivery</span><span>04/11/2025</span></li>
            <li className="notif-pink"><span>Book</span><span>04/11/2025</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Transaction;