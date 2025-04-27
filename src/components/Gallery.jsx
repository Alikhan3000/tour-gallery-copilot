import TourCard from './TourCard';

function Gallery({ tours, onRemove }) {
  return (
    <div className="gallery"> {/* Container for the gallery */}
      {tours.map((tour) => (
        <TourCard
          key={tour.id} // Unique key for each tour card
          id={tour.id} // Pass tour ID to TourCard
          name={tour.name} // Pass tour name to TourCard
          info={tour.info} // Pass tour info to TourCard
          image={tour.image} // Pass tour image to TourCard
          price={tour.price} // Pass tour price to TourCard
          onRemove={onRemove} // Pass remove function to TourCard
        />
      ))}
    </div>
  );
}

export default Gallery;