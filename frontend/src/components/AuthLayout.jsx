import { Navigate } from 'react-router-dom';
import useAuthContext from '../hooks/useAuthContext';
import Spinner from './Spinner';

function AuthLayout({ children }) {
  const { currentUser, loading } = useAuthContext();

  if (loading) {
    return <Spinner />;
  }

  return currentUser ? children : <Navigate to="/login" />;
}

export default AuthLayout;
