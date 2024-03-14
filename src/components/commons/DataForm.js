"use client";
import React, { useState } from 'react';

const DataForm = ({ onSubmit }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(startDate, endDate);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label text-sm" >Enter start date (DD--MM-YYYY HH:MM)</label>
        <input className="form-input" required type="text" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      </div>
      <div className="form-group">
        <label className="form-label text-sm">Enter end date (DD-MM-YYYY HH:MM)</label>
        <input className="form-input" required type="text" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      </div>
      <button className="block w-full bg-blue-500 hover:bg-blue-600 ease-in-out duration-300 p-2 rounded font-medium text-white" type="submit">Show chart</button>
    </form>
  );
};

export default DataForm;
