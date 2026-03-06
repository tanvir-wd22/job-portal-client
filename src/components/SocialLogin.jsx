import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  // 1st step
  const location = useLocation();
  // 2nd step
  const navigate = useNavigate();
  // 3rd step
  const from = location?.state || '/';

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        // console.log(result);
        Swal.fire(
          `${result?.user?.displayName || 'User'} logged in successfully`
        );
        // 4th step
        navigate(from);
      })
      .catch((error) => {
        // console.log(error);
        Swal.fire(error);
      });
  };

  return (
    <div>
      <div className="divider divider-warning">OR</div>
      <button onClick={handleGoogleLogin} className="btn btn-warning btn-block">
        Login With Google
      </button>
    </div>
  );
};

export default SocialLogin;
