// EventsPage.js
import React from 'react';
import EventCard from '../components/EventCard';
import useEvents1 from '../hooks/useEvents1';

const EventsPage = () => {
  const { events, loading } = useEvents1();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '150vh' }}>
      <div
        style={{
          flex: 1,
          marginLeft: '100px',
          marginRight: '100px',
          paddingLeft: '5px',
          marginTop: '50px',
          marginBottom: '50px',
          display: 'flex',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        }}
        className="events-page"
      >
        <div style={{ flex: 1 }}>
          <h2 className="text-5xl font-medium text-maroon mb-10 ml-[45%]" style={{color:'maroon'}}>Events</h2>

          {loading ? (
            <p>Loading events...</p>
          ) : (
            <div className="flex flex-wrap justify-center" style={{ marginLeft: "100px" }}>
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
