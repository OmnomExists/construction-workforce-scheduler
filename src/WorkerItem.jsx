// src/components/WorkerItem.js
import React, { useState } from "react";
import Schedule from "./Schedule";

const WorkerItem = ({ worker, onRemoveWorker, onUpdateSchedule }) => {
  const [newShiftDate, setNewShiftDate] = useState("");
  const [newShift, setNewShift] = useState("");

  const handleShiftDateChange = (event) => {
    setNewShiftDate(event.target.value);
  };

  const handleShiftChange = (event) => {
    setNewShift(event.target.value);
  };

  const handleAddShift = () => {
    if (newShiftDate.trim() && newShift.trim()) {
      onUpdateSchedule(worker.name, newShiftDate, newShift);
      setNewShiftDate("");
      setNewShift("");
    }
  };

  return (
    <div className="worker">
      <h3>{worker.name}</h3>
      {Object.entries(worker.schedule).map(([date, shifts], index) => (
        <Schedule key={index} date={date} schedule={shifts} />
      ))}
      <div className="add-shift">
        <input
          type="date"
          value={newShiftDate}
          onChange={handleShiftDateChange}
          placeholder="Select date"
        />
        <input
          type="text"
          value={newShift}
          onChange={handleShiftChange}
          placeholder="Enter shift"
        />
        <button onClick={handleAddShift}>Add Shift</button>
      </div>
      <button onClick={onRemoveWorker}>Remove Worker</button>
    </div>
  );
};

export default WorkerItem;
