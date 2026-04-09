import { useState } from "react";

function App() { 
  const [job, setJob] = useState("");  //use state lets me to store data 
  const [jobs, setJobs] = useState([]);
  
  const addJob = () => {
    setJobs([...jobs, job]);  // keep the old jobd snd also add new one
    setJob("");
  };
  return (
    <div>
      <h1>HireHive</h1>

      <input
      type="text"
      placeholder="Enter Job"
      value={job}
      onChange={(e) => setJob(e.target.value)}  // it updates the jobs when typing
      />
      <button onClick={addJob}>Add Job</button>

      <ul>
        {jobs.map((j, index) => (
          <li key={index}>{j}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
