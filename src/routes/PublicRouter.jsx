import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import ErrorPage from '../pages/ErrorPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import JobCardDetails from '../components/JobCardDetails';
import PrivateRouter from './PrivateRouter';
import JobApply from '../components/JobApply';
import UsersApplicationsPage from '../pages/UsersApplicationsPage';
import AdminPostedJobsPage from '../pages/AdminPostedJobsPage';

const PublicRouter = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout></RootLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
      },
      {
        path: '/jobs/:id',
        element: (
          <PrivateRouter>
            <JobCardDetails></JobCardDetails>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobs/${params.id}`),
      },
      {
        path: '/jobApply/:id',
        element: (
          <PrivateRouter>
            <JobApply></JobApply>
          </PrivateRouter>
        ),
      },
      {
        path: '/usersApplications',
        element: (
          <PrivateRouter>
            <UsersApplicationsPage></UsersApplicationsPage>
          </PrivateRouter>
        ),
      },
      {
        path: '/adminPostedJobs',
        element: (
          <PrivateRouter>
            <AdminPostedJobsPage></AdminPostedJobsPage>
          </PrivateRouter>
        ),
      },
      {
        path: '/login',
        element: <LoginPage></LoginPage>,
      },
      {
        path: '/register',
        element: <RegisterPage></RegisterPage>,
      },
    ],
  },
]);

export default PublicRouter;
