import { useState } from 'react';

function TourCard({ id, name, info, image, price, onRemove }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="tour-card">
      <img src={image} alt={name} className="tour-image" />
      <div className="tour-details">
        <h2>{name}</h2>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'Show Less' : 'Read More'}
          </button>
        </p>
        <h3>${price}</h3>
        <button onClick={() => onRemove(id)} className="not-interested-button">
          Not Interested
        </button>
      </div>
    </div>
  );
}

export default TourCard;