const JobCard = ({ jobItem }) => {
  console.log(jobItem);
  const {
    company,
    location,
    company_logo,
    description,
    title,
    jobType,
    requirements,
    salaryRange,
  } = jobItem;
  return (
    <div className="card bg-base-300 shadow-sm">
      <div className="flex justify-around ">
        <img src={company_logo} className="w-12" />
        <div>
          <h2 className="card-title">{company}</h2>
          <p className="">{location}</p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="">{jobType}</p>
        <p>{description}</p>
        <div className="card-actions justify-between">
          <div className="badge badge-xs badge-outline">{requirements[0]}</div>
          <div className="badge badge-xs  badge-outline">{requirements[1]}</div>
        </div>
        <div className="card-actions justify-between">
          <div className="badge badge-xs  badge-outline">{requirements[2]}</div>
          <div className="badge badge-xs  badge-outline">{requirements[3]}</div>
        </div>
        <div className="">
          <span>Salary : </span>
          <span>{salaryRange.min} - </span>
          <span>{salaryRange.max} </span>
          <span>{salaryRange.currency}</span>
        </div>
        <button className="btn btn-sm btn-info btn-block">Apply</button>
      </div>
    </div>
  );
};

export default JobCard;
