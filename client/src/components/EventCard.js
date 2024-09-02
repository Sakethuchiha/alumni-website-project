// EventCard.js

import React from 'react';

const EventCard = ({ event }) => {
  // Assuming event has properties like title, date, time, venue, etc.

  const cardStyle = {
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.35), 0 6px 8px rgba(0, 0, 0, 0.35)',
    transition: 'transform 0.2s, box-shadow 0.5s',
  };

  return (
    <div className="inline-block max-w-md bg-white shadow-md rounded-md overflow-hidden m-4 transition-transform transform hover:scale-105" style={cardStyle}>
      <div className="max-w-md bg-white shadow-md rounded-md overflow-hidden flex transition-transform transform hover:scale-105">
        <img
          src={'https://creazilla-store.fra1.digitaloceanspaces.com/emojis/53878/spiral-calendar-emoji-clipart-md.png'}
          alt={event.title}
          className="w-12 h-12 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 uppercase" style={{color:'#004200'}}>{event.title}</h3>

          <table className="table-auto text-gray-600 mb-2">
            <tbody>
              <tr>
                <td className="pr-4">Organiser:</td>
                <td>{event.alumniIncharge}</td>
              </tr>
              <tr>
                <td className="pr-4">Date:</td>
                <td>{event.date}</td>
              </tr>
              <tr>
                <td className="pr-4">Time:</td>
                <td>{event.time}</td>
              </tr>
              <tr>
                <td className="pr-4">Venue:</td>
                <td>{event.venue}</td>
              </tr>
              <tr>
                <td className="pr-4">Alumni Coordinator:</td>
                <td>{event.email}</td>
              </tr>
            </tbody>
          </table>
          <a href={event.registrationLink} className="text-blue-500" style={{color:'maroon'}}>Visit for more details</a>
          {/* Add more details as needed */}
        </div>
      </div>
    </div>
  );
};

export default EventCard;
