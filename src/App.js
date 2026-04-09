import { useState } from "react";

function App() { 
  const [job, setJob] = useState("");    //use state lets me to store data 
  return (
    <div>
      <h1>Job Tracker</h1>

      <input
      type="text"
      placeholder="Enter Job"
      value={job}
      onChange={(e) => setJob(e.target.value)}
      />

    </div>
  );
}

export default App;
