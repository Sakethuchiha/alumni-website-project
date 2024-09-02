// useEvents.js
import { useEffect, useState } from 'react';
import { getEventsByUserEmail } from './api'; // Update with your actual API file
import { useAuthContext } from '../hooks/useAuthContext';

const useEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuthContext();
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const userEmail = user.email; // Update with your actual user email or fetch it from context
        const data = await getEventsByUserEmail(userEmail);
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
