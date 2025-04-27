import { useState, useEffect } from 'react';
import Gallery from './components/Gallery';

function App() {
  const [tours, setTours] = useState([]); // State to store tour data
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to store error messages

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await fetch('https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project'); // Fetch tour data from API
        if (!response.ok) {
          throw new Error('Failed to fetch tours'); // Handle HTTP errors
        }
        const data = await response.json();
        setTours(data); // Update tours state with fetched data
        setLoading(false); // Set loading to false after data is fetched
      } catch (err) {
        setError(err.message); // Set error message if fetch fails
        setLoading(false); // Set loading to false even if there is an error
      }
    };

    fetchTours(); // Call the fetch function on component mount
  }, []);

  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id)); // Remove a tour by filtering it out
  };

  return (
    <>
      <h1>Exodus Adventure Travels</h1>
      {loading && <p>Loading...</p>} {/* Show loading message if loading is true */}
      {error && <p>Error: {error}</p>} {/* Show error message if there is an error */}
      {!loading && !error && tours.length === 0 && (
        <button onClick={() => window.location.reload()} className="refresh-button">Refresh</button>
      )} {/* Show Refresh button if no tours are left */}
      {!loading && !error && tours.length > 0 && (
        <Gallery tours={tours} onRemove={removeTour} />
      )} {/* Render Gallery if tours are available */}
    </>
  );
}

export default App;
