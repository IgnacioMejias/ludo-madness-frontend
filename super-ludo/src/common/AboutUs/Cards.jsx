import React from 'react';
import './Cards.css';
export default function Card({ name, imageSrc, altText, description }) {
  return (
    <div className="card">
    <div className="card-image">  
        <img src={imageSrc} alt={altText} />
    </div>
      <div className="card-content">
        <h2 className="card-name">{name}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
}
