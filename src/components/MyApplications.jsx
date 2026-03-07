import { useState } from 'react';
import useAuth from '../hooks/useAuth';

const MyApplications = () => {
  const { user } = useAuth();
  const [appsInfo, setAppsInfo] = useState([]);
  useState(() => {
    fetch(`http://localhost:5000/apps?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setAppsInfo(data));
  }, []);
  console.log(appsInfo);

  return (
    <div>
      <h1>Total Applied : {appsInfo.length}</h1>
    </div>
  );
};

export default MyApplications;
