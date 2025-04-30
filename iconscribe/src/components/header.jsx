import logo from '../assets/ICONS.png';
import '../css/header.css';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react'; 

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);

        setTimeout(() => {
            navigate('/');
        }, 1500);
    };

    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMenuOpen(false);
        }
    };

    return (
        <header className="header">
            <div className="header-container">
                <div className="loGo">
                    <img src={logo} alt="Logo" />
                </div>
                
                <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X size={28} color="white" /> : <Menu size={28} color="white" />}
                </div>

                <div className={`left-nav ${menuOpen ? 'open' : ''}`}>
                    <nav className="nav-container">
                        <Link to="/" onClick={(e) => { e.preventDefault(); handleScroll("home"); }}>
                            Home
                        </Link>
                        <Link to="/" onClick={(e) => { e.preventDefault(); handleScroll("services"); }}>
                            Services
                        </Link>
                        <Link to="/" onClick={(e) => { e.preventDefault(); handleScroll("transactions"); }}>
                            Transactions
                        </Link>
                        <Link to="/" onClick={(e) => { e.preventDefault(); handleScroll("about"); }}>
                            About Us
                        </Link>
                        <Link to="/" onClick={(e) => { e.preventDefault(); handleScroll("contact"); }}>
                            Contact Us
                        </Link>
                    </nav>

                    {isLoggedIn ? (
                        <div className="auth-button">
                            <button onClick={handleLogout}>Logout</button>
                        </div>
                    ) : (
                        <Link to="/login">
                            <div className="auth-button">
                                <button>Login/Register</button>
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
