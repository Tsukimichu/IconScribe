import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import '../css/Contact.css';

function Contact() {
  return (
    <section className="contact-section">
      <div className="container">
        <h2 className="contact-title">Contact us</h2>

        <div className="contact-info">
          <div className="info-block">
            <Mail size={32} />
            <h3>Email Address</h3>
            <p>iconscopyprints@email.com</p>
          </div>
          <div className="info-block">
            <Phone size={32} />
            <h3>Phone Number</h3>
            <p>0994081412</p>
          </div>
          <div className="info-block">
            <MapPin size={32} />
            <h3>Office Location</h3>
            <p>Bantad Boac Marinduque</p>
          </div>
          <div className="info-block">
            <Clock size={32} />
            <h3>Work Day</h3>
            <p>Mon–Fri: 8:00am–5:00pm</p>
          </div>
        </div>

        <div className="contact-bottom">
          <div className="left-text">
            <h3>Get in touch with us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <form className="contact-form">
            <div className="row">
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
            </div>
            <div className="row">
              <input type="text" placeholder="Phone Number" />
              <input type="text" placeholder="Subject" />
            </div>
            <textarea placeholder="Message" rows="5" required></textarea>
            <button type="submit" className='contact-button react'>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
