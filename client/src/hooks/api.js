// Assuming this code is in your React component or any other frontend code
import axios from 'axios';

const BASE_URL = 'http://localhost:5000'; // Replace with your actual API base URL

export const getEventsByUserEmail = async (email) => {
  try {
    // Update the axios request to use the correct route with a parameter
    const response = await axios.get(`${BASE_URL}/api/event/user/${email}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching events:', error);
    throw error; // Optionally rethrow the error if needed
  }
};
