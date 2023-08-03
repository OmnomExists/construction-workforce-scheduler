import React from "react";

const Schedule = ({ date, schedule }) => {
  if (!Array.isArray(schedule) || schedule.length === 0) {
    return (
      <div className="schedule">
        <h4>{date}</h4>
        <div>No shifts scheduled for this date.</div>
      </div>
    );
  }

  return (
    <div className="schedule">
      <h4>{date}</h4>
      {schedule.map((shift, index) => (
        <div key={index}>{shift}</div>
      ))}
    </div>
  );
};

export default Schedule;
