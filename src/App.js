import { useState } from 'react';
import info from './data';
import './app.css';

function TourList({ tours }) {
  const tourGroups = [];
  for (let i = 0; i < tours.length; i += 3) {
    tourGroups.push(tours.slice(i, i + 3));
  }

  return (
    <div className="container">
      <h1>Our Tours</h1>
      {tourGroups.map((group) => (
        <div key={group[0].id} className="row">
          {group.map((tour) => (
            <div key={tour.id} className="col-md-4">
              <div className="tour col-md-12">
                <div className="tour-img">
                  <img src={tour.image} alt={tour.name} />
                </div>
                <div className="tour-info">
                  <h4>{tour.name}</h4>
                  <h5>{tour.info}</h5>
                </div>
                <div className="tour-price">
                  <h6>{tour.price}</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function App() {
  const [tours, setTours] = useState(info);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  return (
    <div>
      <Tour tours={tours} removeTour={removeTour} />
    </div>
  );
}

function Tour({ tours, removeTour }) {
  const tourGroups = [];
  for (let i = 0; i < tours.length; i += 3) {
    tourGroups.push(tours.slice(i, i + 3));
  }

  return (
    <div className="container">
      <h1>Our Tours</h1>
      {tours.length === 0 && <h2>No Tours Left</h2>}
      {tourGroups.map((group) => (
        <div key={group[0].id} className="row">
          {group.map((tour) => (
            <div key={tour.id} className="col-md-4">
              <div className="tour col-md-12">
                <div className="tour-img">
                  <img src={tour.image} alt={tour.name} />
                </div>
                <div className="tour-info">
                  <h4>{tour.name}</h4>
                  <h5>{tour.info}</h5>
                </div>
                <div className="tour-price">
                  <h6>{tour.price}</h6>
                </div>
                <button onClick={() => removeTour(tour.id)}>
                  Not Interested
                </button>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
