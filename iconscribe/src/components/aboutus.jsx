import logo from '../assets/ICONS.png';
import '../css/about.css';

function About() {
    return (
        <section className="about-section">
            <h1>About us</h1>
            <div className="about-content">
                <div className="about-text">
                    <h2>Our Story</h2>
                    <p className='justify'>
                        ICONS is a printing shop located in Bantad, Boac, Marinduque, owned and operated by Lusera Osinsao and Ronald Osinsao.
                        Mr. Ronald started working in printing shops in Manila in his early 20s to provide for his family and save to start his own printing business.
                        <br /><br />
                        When ICONS first opened, it only offered photocopy services, then got accredited by the B.I.R. to print business receipts.
                        The services they now offer include printing of business receipts, yearbooks, coffee table books, calendars, brochures, and more.
                        They accommodate walk-in clients and also communicate through Messenger.
                    </p>
                </div>
                <div className="about-logo">
                    <img src={logo} alt="ICONS Logo" />
                </div>
            </div>
        </section>
    );
}

export default About;
