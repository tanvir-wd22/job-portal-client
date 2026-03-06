import Lottie from 'lottie-react';
import loginAnimation from '../assets/login.json';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import SocialLogin from '../components/SocialLogin';
import Swal from 'sweetalert2';

const LoginPage = () => {
  const { loginUser } = useContext(AuthContext);
  const handleLoginForm = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
      .then((result) => {
        // console.log(result.user);
        Swal.fire(
          `${result?.user?.displayName || 'user'} has login successfully`
        );
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
            <Lottie animationData={loginAnimation}></Lottie>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLoginForm} className="card-body">
              <fieldset className="fieldset">
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
                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
            </form>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
