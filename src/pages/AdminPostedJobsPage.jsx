import Swal from 'sweetalert2';
import useAuth from '../hooks/useAuth';

const AdminPostedJobsPage = () => {
  const { user } = useAuth();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // console.log(formData);
    // console.log(formData.entries());
    const initialData = Object.fromEntries(formData.entries());
    console.log(initialData);
    const { min, max, currency, ...newData } = initialData;
    // console.log(min, max, currency, newData);
    newData.salaryRange = { min: min, max: max, currency: currency };
    newData.responsibilities = newData.responsibilities.split('\n');
    newData.requirements = newData.requirements.split('\n');
    // console.log(newData);

    // ========== send form data to server ==============
    fetch(`http://localhost:5000/jobs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          Swal.fire('admin job posted successfully');
        }
      });
  };

  return (
    <div className="flex justify-center items-center">
      <div className="card bg-base-300 w-full max-w-sm shrink-0">
        <form onSubmit={handleFormSubmit} className="card-body">
          <fieldset className="fieldset">
            {/* title field */}
            <label className="label">Title</label>
            <input
              name="title"
              type="text"
              className="input"
              placeholder="Title"
            />
            {/* location field */}
            <label className="label">Location</label>
            <input
              name="location"
              type="text"
              className="input"
              placeholder="Location"
            />
            {/* job type field */}
            <label className="label">Job Type</label>
            <select name="jobType" defaultValue="Remote" className="select">
              <option>Remote</option>
              <option>Full Time</option>
              <option>Intern</option>
            </select>
            {/* category field */}
            <label className="label">Category</label>
            <select
              name="category"
              defaultValue="Engineering"
              className="select"
            >
              <option>Engineering</option>
              <option>Finance</option>
              <option>Marketing</option>
            </select>
            {/* date field */}
            <label className="label">Application Deadline</label>
            <input
              name="applicationDeadline"
              type="date"
              className="input input-bordered"
            />

            {/* salary min field */}
            <label className="label">Salary Min</label>
            <input
              name="min"
              type="number"
              className="input"
              placeholder="Salary Min"
            />

            {/* salary max field */}
            <label className="label">Salary Max</label>
            <input
              name="max"
              type="number"
              className="input"
              placeholder="Salary Max"
            />

            {/* salary max field */}
            <label className="label">Salary Currency</label>
            <select name="currency" defaultValue="BDT" className="select">
              <option>BDT</option>
              <option>DINAR</option>
              <option>RIAL</option>
            </select>

            {/* company field */}
            <label className="label">Company</label>
            <input
              name="company"
              type="text"
              className="input"
              placeholder="Company"
            />
            {/* logo url field */}
            <label className="label">Company Logo</label>
            <input
              name="company_logo"
              type="text"
              className="input"
              placeholder="Company Logo"
            />
            {/* status field */}
            <label className="label">Status</label>
            <input
              name="status"
              type="text"
              className="input"
              placeholder="Status"
            />
            {/* hr name field */}
            <label className="label">HR Name</label>
            <input
              defaultValue={user?.name}
              name="hr_name"
              type="text"
              className="input"
              placeholder="HR Name"
            />
            {/* hr email field */}
            <label className="label">HR Email</label>
            <input
              defaultValue={user?.email}
              name="hr_email"
              type="email"
              className="input"
              placeholder="HR Email"
            />

            {/* description field */}
            <label className="label">Description</label>
            <textarea
              name="description"
              className="textarea"
              placeholder="Description"
            ></textarea>

            {/* requirements field */}
            <label className="label">Requirements</label>
            <textarea
              name="requirements"
              className="textarea"
              placeholder="Give one requirement in a line"
            ></textarea>

            {/* responsibilites field */}
            <label className="label">Responsibilities</label>
            <textarea
              name="responsibilities"
              className="textarea"
              placeholder="Give one responsibility in a line"
            ></textarea>

            <button className="btn btn-neutral mt-4">Post Job</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default AdminPostedJobsPage;
