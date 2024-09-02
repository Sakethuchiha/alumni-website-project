import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [batchYear, setBatchYear] = useState("");
  const [department, setDepartment] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [password, setPassword] = useState("");

  const { signup, error, loading } = useSignup();
  const navigate = useNavigate();
  const handleSignup = async (e) => {
    e.preventDefault();
  
    // signup user
    await signup(email, password, fullName, phoneNumber, batchYear, department, rollNo);
    if(!error){
      navigate('/login')
    }
  };
  

  return (
    <form
      onSubmit={handleSignup}
      className="login-form flex flex-col gap-5 py-20 mx-auto max-w-sm"
    >
      <h2 className="text-4xl font-medium text-maroon mb-10">Sign Up</h2>

      <div className="form-control flex flex-col gap-2">
        <label
          htmlFor="fullName"
          className="cursor-pointer hover-text-sky-400 duration-300 text-[#385529]"
        >
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          placeholder="John Doe"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-xl outline-none focus-border-sky-400 duration-300"
          style={{ color: 'black' }}
        />
      </div>

      <div className="form-control flex flex-col gap-2">
        <label
          htmlFor="email"
          className="cursor-pointer hover-text-sky-400 duration-300 text-[#385529]"
          
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          placeholder="abhiramsayani@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-xl outline-none focus-border-sky-400 duration-300"
          style={{ color: 'black' }}
        />
      </div>

      <div className="form-control flex flex-col gap-2">
        <label
          htmlFor="phoneNumber"
          className="cursor-pointer hover-text-sky-400 duration-300 text-[#385529]"
        >
          Phone Number
        </label>
        <input
          type="text"
          id="phoneNumber"
          placeholder="9604160868"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-xl outline-none focus-border-sky-400 duration-300"
          style={{ color: 'black' }}
        />
      </div>

      <div className="form-control flex flex-col gap-2">
        <label
          htmlFor="batchYear"
          className="cursor-pointer hover-text-sky-400 duration-300 text-[#385529]"
        >
          Batch Year
        </label>
        <input
          type="text"
          id="batchYear"
          placeholder="2022"
          value={batchYear}
          onChange={(e) => setBatchYear(e.target.value)}
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-xl outline-none focus-border-sky-400 duration-300"
          style={{ color: 'black' }}
        />
      </div>

      <div className="form-control flex flex-col gap-2">
        <label
          htmlFor="department"
          className="cursor-pointer hover-text-sky-400 duration-300 text-[#385529]"
        >
          Department
        </label>
        <input
          type="text"
          id="department"
          placeholder="Computer Science"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-xl outline-none focus-border-sky-400 duration-300"
          style={{ color: 'black' }}
        />
      </div>

      <div className="form-control flex flex-col gap-2">
        <label
          htmlFor="rollNo"
          className="cursor-pointer hover-text-sky-400 duration-300 text-[#385529]"
        >
          Roll Number
        </label>
        <input
          type="text"
          id="rollNo"
          placeholder="160121737201"
          value={rollNo}
          onChange={(e) => setRollNo(e.target.value)}
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-xl outline-none focus-border-sky-400 duration-300"style={{ color: 'black' }}
        />
      </div>

      <div className="form-control flex flex-col gap-2">
        <label
          htmlFor="password"
          className="cursor-pointer hover-text-sky-400 duration-300 text-[#385529]"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-xl outline-none focus-border-sky-400 duration-300"style={{ color: 'black' }}
        />
      </div>

      <button
        disabled={loading}
        type="submit"
        className="bg-[#385529] text-white py-3 rounded-xl hover-bg-sky-500 duration-300 mt-3" style={{color:'white'}}
      >
        Sign Up
      </button>

      {error && (
        <p className="bg-rose-500/20 rounded-lg p-5 text-rose-500 border border-rose-500">
          {error}
        </p>
      )}
    </form>
  );
};

export default Signup;
