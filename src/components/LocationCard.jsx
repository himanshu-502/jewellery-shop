import React from 'react';
import '../styles/locationcard.css';

const LocationCard = ({ location }) => {
  return (
    <div className="location-card">
      <h3 className="location-title">{location.title}</h3>
      <p className="location-address">
        <span role="img" aria-label="location">
          📍
        </span>{' '}
        {location.address}
      </p>
      <p className="location-phone">
        <span role="img" aria-label="phone">
          📞
        </span>{' '}
        {location.phone}
      </p>
      <a href={location.directionsLink} className="get-directions">
        Get Directions &rsaquo;
      </a>
    </div>
  );
};

export default LocationCard;
