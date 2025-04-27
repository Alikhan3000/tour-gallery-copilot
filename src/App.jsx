import { useState, useEffect } from 'react';
import TourCard from './components/TourCard';

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await fetch('https://course-api.com/react-tours-project');
        if (!response.ok) {
          throw new Error('Failed to fetch tours');
        }
        const data = await response.json();
        setTours(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  return (
    <>
      <h1>Our Tours</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <div className="tours-container">
          {tours.map((tour) => (
            <TourCard
              key={tour.id}
              id={tour.id}
              name={tour.name}
              info={tour.info}
              image={tour.image}
              price={tour.price}
              onRemove={removeTour}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default App;
