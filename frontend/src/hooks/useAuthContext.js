import { useContext } from 'react';
import { authContext } from '../context/AuthContext';

function useAuthContext() {
  const context = useContext(authContext);
  return context;
}

export default useAuthContext;
