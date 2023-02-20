import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import {
  createContext, useEffect, useMemo, useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';

const authContext = createContext();

function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLogin, setUserLogin] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (userLogged) => {
      setCurrentUser(userLogged);
      setLoading(false);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (error) setError(false);

      const { user } = await signInWithEmailAndPassword(
        auth,
        userLogin.email,
        userLogin.password,
      );

      setCurrentUser(user);
      navigate('/');
    } catch (error) {
      setError(true);
    }
  };
  const value = useMemo(() => ({
    currentUser, setCurrentUser, userLogin, setUserLogin, error, handleSubmit, loading, setLoading,
  }), [currentUser, userLogin, error, loading]);

  return (
    <authContext.Provider value={value}>
      {children}
    </authContext.Provider>
  );
}

export { authContext, AuthProvider };
