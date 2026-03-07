import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';

const JobApply = () => {
  const { user } = useAuth();
  // console.log(user);
  const { id } = useParams();
  //   console.log(id);
  const navigate = useNavigate();

  const submitJobApplication = (e) => {
    e.preventDefault();
    const github = e.target.github.value;
    const linkedin = e.target.linkedin.value;
    const resume = e.target.resume.value;
    // console.log(github, linkedin, resume);
    const applicantInfo = {
      job_info_id: id,
      applicant_email: user.email,
      github: github,
      linkedin: linkedin,
      resume: resume,
    };

    fetch(`http://localhost:5000/apps`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(applicantInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          Swal.fire('applications data posted to server');
          navigate('/myApplications');
        }
      });
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Apply now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={submitJobApplication} className="card-body">
              <fieldset className="fieldset">
                <label className="label">Github</label>
                <input
                  name="github"
                  type="url"
                  className="input"
                  placeholder="Github Url"
                />
                <label className="label">Linked In</label>
                <input
                  name="linkedin"
                  type="url"
                  className="input"
                  placeholder="Linked In Url"
                />
                <label className="label">Github</label>
                <input
                  name="resume"
                  type="url"
                  className="input"
                  placeholder="Resume Url"
                />
                <button className="btn btn-neutral mt-4">
                  Submit Application
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobApply;
