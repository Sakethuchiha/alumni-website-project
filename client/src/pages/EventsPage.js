// EventsPage.js
import React from 'react';
import EventCard from '../components/EventCard';
import useEvents from '../hooks/useEvents';
import Dashboard from './Dashboard';

const EventsPage = () => {
  const { events, loading } = useEvents();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '150vh' }}>
      <Dashboard />

      <div
        style={{
          flex: 1,
          marginLeft: '100px',
          marginRight: '100px',
          paddingLeft: '25PX',
          marginTop: '50px',
          marginBottom: '50px',
          display: 'flex',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Box shadow style
        }}
        className="events-page"
      >
        <div>
          <h2 className="text-3xl font-medium text-[#385529] mb-10 ml-[2%] " style={{ paddingTop: '25px' }}>
            My Events 📒
          </h2>
          {loading ? (
            <p>Loading events...</p>
          ) : (
            <div className="grid grid-cols-2 gap-8 " style={{marginLeft:"25px", columnGap: '252px' }}> {/* Adjusted columnGap value to 16px */}
              {events.map((event) => (
                <EventCard key={event._id} event={event} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
