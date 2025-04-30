import React from 'react';
import '../css/button1.css'

const Button = ({ label, icon,  }) => (
  <button className="button">{icon} {label}</button>
);

export default Button;
