import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const { login, error, loading } = useLogin();

  const handleLogin = async (e) => {
    e.preventDefault();
  
    // Check if email and password are not empty
    if (!email || !password) {
      console.log("Email and password are required.");
      return;
    }
  
    // login user
    const loginResult = await login(email, password);
  console.log(loginResult);
    if (!loginResult || loginResult.error) {
      console.log("Login failed.");
      return;
    }
  
    // Navigate to the dashboard if no error
    navigate('/EventsPage'); // Replace '/dashboard' with the desired path
  };
  
  

  return (
    <form
      onSubmit={handleLogin}
      className="login-form flex flex-col gap-5 py-20 mx-auto max-w-sm"
    >
      <h2 className="text-4xl font-medium text-maroon mb-10">Login</h2>

      <div className="form-control flex flex-col gap-2 ">
        <label
          htmlFor="email"
          className="cursor-pointer text-[#385529] font-bold hover:text-[#385529] duration-300"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          placeholder="abhiramsayani@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-xl outline-none focus:border-sky-400 duration-300"
        />
      </div>

      <div className="form-control flex flex-col gap-2 ">
        <label
          htmlFor="password"
          className="cursor-pointer text-[#385529] font-bold hover:text-[#385529] duration-300"
        >
          Password
        </label>

        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-xl outline-none focus-border-sky-400 duration-300"
        />
      </div>

      <button
        disabled={loading}
        type="submit"
        className="bg-[#385529] text-white py-3 rounded-xl hover:bg-darker-green duration-300 mt-3"style={{ color: 'white' }}
      >
        Log In
      </button>

      {error && (
        <p className="bg-rose-500/20 rounded-lg p-5 text-rose-500 border border-rose-500">
          {error}
        </p>
      )}
    </form>
  );
};

export default Login;
