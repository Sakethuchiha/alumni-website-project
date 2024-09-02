import React, { useState } from 'react';
import { useSignup } from "../hooks/useSignup";
import { useNavigate } from 'react-router-dom';
//import { createEvent } from '@testing-library/react';

const AddEvent = () => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [budget, setBudget] = useState("");
  const [duration, setDuration] = useState("");
  const [alumniIncharge, setAlumniIncharge] = useState("");
  const [team, setTeam] = useState("");

  const { signup, error, loading } = useSignup();
  const navigate = useNavigate();

  const handleEvent = async (e) => {
    e.preventDefault();
  
    // signup event
    
    if (!error) {
      navigate('/login');
    }
  };

  return (
    <form
      onSubmit={handleEvent}
      className="login-form flex flex-col gap-5 py-20 mx-auto max-w-sm"
    >
      <h2 className="text-4xl font-medium text-maroon mb-10">Sign Up for Event</h2>

      <div className="form-control flex flex-col gap-2">
        <label
          htmlFor="title"
          className="cursor-pointer hover-text-sky-400 duration-300 text-[#385529]"
        >
          Event Title
        </label>
        <input
          type="text"
          id="title"
          placeholder="Event Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-xl outline-none focus-border-sky-400 duration-300"
          style={{ color: 'black' }}
        />
      </div>

      <div className="form-control flex flex-col gap-2">
        <label
          htmlFor="type"
          className="cursor-pointer hover-text-sky-400 duration-300 text-[#385529]"
        >
          Event Type
        </label>
        <input
          type="text"
          id="type"
          placeholder="Event Type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-xl outline-none focus-border-sky-400 duration-300"
          style={{ color: 'black' }}
        />
      </div>

      <div className="form-control flex flex-col gap-2">
        <label
          htmlFor="budget"
          className="cursor-pointer hover-text-sky-400 duration-300 text-[#385529]"
        >
          Budget
        </label>
        <input
          type="number"
          id="budget"
          placeholder="Budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-xl outline-none focus-border-sky-400 duration-300"
          style={{ color: 'black' }}
        />
      </div>

      <div className="form-control flex flex-col gap-2">
        <label
          htmlFor="duration"
          className="cursor-pointer hover-text-sky-400 duration-300 text-[#385529]"
        >
          Duration (in hours)
        </label>
        <input
          type="number"
          id="duration"
          placeholder="Duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-xl outline-none focus-border-sky-400 duration-300"
          style={{ color: 'black' }}
        />
      </div>

      <div className="form-control flex flex-col gap-2">
        <label
          htmlFor="alumniIncharge"
          className="cursor-pointer hover-text-sky-400 duration-300 text-[#385529]"
        >
          Alumni Incharge
        </label>
        <input
          type="text"
          id="alumniIncharge"
          placeholder="Alumni Incharge"
          value={alumniIncharge}
          onChange={(e) => setAlumniIncharge(e.target.value)}
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-xl outline-none focus-border-sky-400 duration-300"
          style={{ color: 'black' }}
        />
      </div>

      <div className="form-control flex flex-col gap-2">
        <label
          htmlFor="team"
          className="cursor-pointer hover-text-sky-400 duration-300 text-[#385529]"
        >
          Team Size
        </label>
        <input
          type="number"
          id="team"
          placeholder="Team Size"
          value={team}
          onChange={(e) => setTeam(e.target.value)}
          className="bg-transparent border border-slate-500 py-3 px-5 rounded-xl outline-none focus-border-sky-400 duration-300"
          style={{ color: 'black' }}
        />
      </div>

      <button
        disabled={loading}
        type="submit"
        className="bg-[#385529] text-white py-3 rounded-xl hover-bg-sky-500 duration-300 mt-3" style={{ color: 'white' }}
      >
        Create Event
      </button>

      {error && (
        <p className="bg-rose-500/20 rounded-lg p-5 text-rose-500 border border-rose-500">
          {error}
        </p>
      )}
    </form>
  );
};

export default AddEvent;
