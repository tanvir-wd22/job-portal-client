import { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';

const AdminJobsInfoPage = () => {
  const { user } = useAuth();
  const [jobsInfo, setJobsInfo] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/jobs?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setJobsInfo(data));
  }, [user?.email]);

  return (
    <div>
      <h1>Total Admin Posted Jobs : {jobsInfo.length}</h1>
    </div>
  );
};

export default AdminJobsInfoPage;
