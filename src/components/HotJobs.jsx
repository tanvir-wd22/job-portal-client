import { useEffect, useState } from 'react';
import JobCard from './JobCard';

const HotJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/jobs')
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  // console.log(jobs);

  return (
    <div>
      <h1 className="text-2xl font-semibold text-center mb-3">
        Jobs Available : {jobs.length}
      </h1>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {jobs.map((jobItem) => (
          <JobCard key={jobItem._id} jobItem={jobItem}></JobCard>
        ))}
      </div>
    </div>
  );
};

export default HotJobs;
