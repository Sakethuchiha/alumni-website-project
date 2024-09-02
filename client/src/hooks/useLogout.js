import { useAuthContext } from "./useAuthContext";
import { useNavigate } from 'react-router-dom';



export const useLogout = () => {
  const { dispatch: logoutDispatch } = useAuthContext();
  const navigate = useNavigate();

  const logout = () => {
    // clear localstorage
    localStorage.removeItem("user");

    // dispatch logout
    logoutDispatch({ type: "LOGOUT" });
    navigate('/')
  
  };

  return { logout };
};
