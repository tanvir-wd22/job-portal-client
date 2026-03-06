import Lottie from 'lottie-react';
import registerAnimation from '../assets/register.json';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import SocialLogin from '../components/SocialLogin';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const { registerUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegisterForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, photo, email, password);

    registerUser(email, password)
      .then((result) => {
        // console.log(result.user);
        Swal.fire(
          `${result?.user?.displayName || 'User'} registered in successfully`
        );
        navigate('/');
      })
      .catch((error) => {
        // console.log(error.message);
        Swal.fire(error.message);
      });
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="w-96">
            <Lottie animationData={registerAnimation}></Lottie>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleRegisterForm} className="card-body">
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  name="name"
                  type="text"
                  className="input"
                  placeholder="Name"
                />
                <label className="label">Photo</label>
                <input
                  name="photo"
                  type="text"
                  className="input"
                  placeholder="Photo"
                />
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  name="password"
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
            </form>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
