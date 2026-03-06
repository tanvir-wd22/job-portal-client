import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../components/Spinner';
import AuthContext from '../context/AuthContext';

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  // 1st step
  const location = useLocation();
  // console.log(location);
  if (loading) {
    return <Spinner></Spinner>;
  }
  if (user) {
    return children;
  }
  // 2nd step
  return <Navigate to="/login" state={location?.pathname}></Navigate>;
};

export default PrivateRouter;
