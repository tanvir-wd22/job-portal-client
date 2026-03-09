import { useState } from 'react';
import useAuth from '../hooks/useAuth';
import UsersApplicationsTable from '../components/UsersApplicationsTable';

const UsersApplicationsPage = () => {
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
          <UsersApplicationsTable
            appItem={appItem}
            key={appItem._id}
          ></UsersApplicationsTable>
        ))}
      </div>
    </div>
  );
};

export default UsersApplicationsPage;
