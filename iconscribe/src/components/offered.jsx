import React from "react";
import { Link } from "react-router-dom";

function Offered({ label, imgSrc, description, linkTo }) {
    return (
        <Link to={linkTo || "#"} className="offered-link">
            <div className="offered-card">
                <h2>{label}</h2>
                <img src={imgSrc} alt={label} className="service-img" />
                <p>{description}</p>
            </div>
        </Link>
    );
}

export default Offered;
