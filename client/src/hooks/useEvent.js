// hooks/useEvent.js
import { useState } from 'react';

export const useEvent = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const createEvent = async (eventData) => {
    setLoading(true);
    setError(null);

    try {
        console.log(eventData);
      // Make your API request to create an event here
      const res = await fetch(`${process.env.REACT_APP_BASE_URL}/api/event/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any other headers or authentication tokens here
        },
        body: JSON.stringify(eventData),
      });

      const json = await res.json();

      if (!res.ok) {
        if (json.error) {
          setError(json.error);
        } else {
          setError('An error occurred while creating the event.');
        }
        setLoading(false);
      } else {
        // Handle success if needed
        setLoading(false);
      }
    } catch (error) {
      setError('An error occurred while creating the event.');
      setLoading(false);
    }
  };

  return { createEvent, error, loading };
};
