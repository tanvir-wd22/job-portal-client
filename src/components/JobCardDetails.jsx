import { Link, useLoaderData } from 'react-router-dom';

const JobCardDetails = () => {
  const loadedDetailsData = useLoaderData();
  //   console.log(loadedDetailsData);
  const {
    _id,
    company,
    location,
    company_logo,
    description,
    title,
    jobType,
    requirements,
    salaryRange,
  } = loadedDetailsData;

  return (
    <div className="card bg-sky-300 shadow-sm">
      <div className="flex justify-around items-center">
        <img src={company_logo} className="w-12" />
        <h2 className="text-2xl font-medium">{company}</h2>
        <p>{location}</p>
      </div>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{jobType}</p>
        <p>{description}</p>
        <div className="card-actions justify-between">
          <div className="badge badge-xs badge-outline">{requirements[0]}</div>
          <div className="badge badge-xs  badge-outline">{requirements[1]}</div>
          <div className="badge badge-xs  badge-outline">{requirements[2]}</div>
          <div className="badge badge-xs  badge-outline">{requirements[3]}</div>
        </div>
        <div>
          <span>Salary : </span>
          <span>{salaryRange.min} - </span>
          <span>{salaryRange.max} </span>
          <span>{salaryRange.currency}</span>
        </div>
        <div className="flex justify-center items-center">
          <Link to={`/jobApply/${_id}`} className="btn btn-warning">
            Apply For This Position
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCardDetails;
