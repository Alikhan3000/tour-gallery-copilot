import { useState } from 'react';

function TourCard({ id, name, info, image, price, onRemove }) {
  const [readMore, setReadMore] = useState(false); // State to toggle between full and truncated info

  return (
    <div className="tour-card"> {/* Container for the tour card */}
      <img src={image} alt={name} className="tour-image" /> {/* Tour image */}
      <div className="tour-details"> {/* Container for tour details */}
        <h2>{name}</h2> {/* Tour name */}
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`} {/* Show full or truncated info */}
          <button onClick={() => setReadMore(!readMore)}> {/* Toggle readMore state */}
            {readMore ? 'Show Less' : 'Read More'}
          </button>
        </p>
        <h3>${price}</h3> {/* Tour price */}
        <button onClick={() => onRemove(id)} className="not-interested-button"> {/* Remove tour button */}
          Not Interested
        </button>
      </div>
    </div>
  );
}

export default TourCard;