// useEvents.js
import { useEffect, useState } from 'react';
import { getEventsByUserEmail } from './ap1'; // Update with your actual API file


const useEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    const fetchEvents = async () => {
      try {
       // Update with your actual user email or fetch it from context
        const data = await getEventsByUserEmail();
        setEvents(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching events:', error);
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return { events, loading };
};

export default useEvents;
