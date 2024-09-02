import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { dispatch } = useAuthContext();

  const signup = async (email, password, fullName, phoneNumber, batchYear, department, rollNumber) => {
    setLoading(true);
    setError(null);

    const userData = {
      email,
      password,
      fullName,
      phoneNumber,
      batchYear,
      department,
      rollNumber,
    };
    console.log(userData);

    try {
      const res = await fetch(
        `${process.env.REACT_APP_BASE_URL}/api/user/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      const json = await res.json();

      if (!res.ok) {
        console.log("Error")
        if (json.error) {
          // Handle specific error messages from the server
          console.log(json.error);
          setError(json.error);
        } else {
          setError("An error occurred during signup.");
        }

        setLoading(false);
      } else {
        // Update the auth context
        dispatch({ type: "LOGIN", payload: json });

        // Save the user to local storage
        localStorage.setItem("user", JSON.stringify(json));

        setLoading(false);
      }
    } catch (error) {
      setError("An error occurred during signup.");
      setLoading(false);
    }
  };

  return { signup, error, loading };
};
