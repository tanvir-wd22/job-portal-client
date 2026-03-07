import { useState } from 'react';
import useAuth from '../hooks/useAuth';
import ApplicationsTable from './ApplicationsTable';

const MyApplications = () => {
  const { user } = useAuth();
  const [appsInfo, setAppsInfo] = useState([]);

  useState(() => {
    fetch(`http://localhost:5000/apps?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setAppsInfo(data));
  }, []);
  // console.log(appsInfo);

  return (
    <div>
      <h1 className="text-2xl font-medium text-center mb-3">
        Total Applied : {appsInfo.length}
      </h1>
      <div>
        {appsInfo.map((appItem) => (
          <ApplicationsTable
            appItem={appItem}
            key={appItem._id}
          ></ApplicationsTable>
        ))}
      </div>
    </div>
  );
};

export default MyApplications;
