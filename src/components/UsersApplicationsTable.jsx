const UsersApplicationsTable = ({ appItem }) => {
//   console.log(appItem);
  const { company_logo, title, location, company,jobType } = appItem;
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Company Info</th>
              <th>Job Title</th>
              <th>Job Type</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img src={company_logo} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{company}</div>
                    <div className="text-sm opacity-50">{location}</div>
                  </div>
                </div>
              </td>
              <td>{title}</td>
              <td>{jobType}</td>
              <th>
                <button className="btn btn-error btn-xs">Delete</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersApplicationsTable;
