import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import Swal from 'sweetalert2';

const SocialLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        // console.log(result);
        Swal.fire(
          `${result?.user?.displayName || 'User'} logged in successfully`
        );
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
