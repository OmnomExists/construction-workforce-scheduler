import React, { useState } from "react";
import "./App.css";
import WorkerItem from "./WorkerItem";

const App = () => {
  const [workers, setWorkers] = useState([]);
  const [newWorker, setNewWorker] = useState({ name: "", schedule: {} });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewWorker((prevWorker) => ({ ...prevWorker, [name]: value }));
  };

  const addWorker = () => {
    setWorkers([...workers, { ...newWorker, schedule: {} }]);
    setNewWorker({ name: "", schedule: {} });
  };

  const removeWorker = (workerId) => {
    const updatedWorkers = workers.filter((_, index) => index !== workerId);
    setWorkers(updatedWorkers);
  };

  const updateSchedule = (workerName, date, shift) => {
    setWorkers((prevWorkers) =>
      prevWorkers.map((worker) => {
        if (worker.name === workerName) {
          const updatedSchedule = {
            ...worker.schedule,
            [date]: [...(worker.schedule[date] || []), shift],
          };
          return { ...worker, schedule: updatedSchedule };
        }
        return worker;
      })
    );
  };

  return (
    <div className="app">
      <h1>Construction Workforce Scheduler</h1>
      <div className="add-worker">
        <input
          type="text"
          name="name"
          value={newWorker.name}
          onChange={handleInputChange}
          placeholder="Enter worker's name"
        />
        <button onClick={addWorker}>Add Worker</button>
      </div>
      <div className="workers">
        {workers.map((worker, index) => (
          <WorkerItem
            key={index}
            worker={worker}
            onRemoveWorker={() => removeWorker(index)}
            onUpdateSchedule={updateSchedule}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
