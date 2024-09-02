import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `${process.env.REACT_APP_BASE_URL}/api/user/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const json = await res.json();

      if (!res.ok) {
        setLoading(false);
        setError(json.error);
        return { success: false, error: json.error, user: null };
      }

      // Update the auth context
      dispatch({ type: "LOGIN", payload: json });

      // Save the user to local storage
      localStorage.setItem("user", JSON.stringify(json));

      setLoading(false);

      return { success: true, error: null, user: json };
    } catch (error) {
      console.error("Login error:", error);
      setLoading(false);
      setError("An error occurred during login.");
      return { success: false, error: "An error occurred during login.", user: null };
    }
  };

  return { login, error, loading };
};
