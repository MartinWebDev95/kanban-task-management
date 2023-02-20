import {
  onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup,
} from 'firebase/auth';
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
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (userLogged) => {
      setCurrentUser(userLogged);
      setLoading(false);
    });
  }, []);

  const handleLoginWithGoogle = async () => {
    const googleProvider = new GoogleAuthProvider();

    // Parameter to choose the google account every time you sign in
    googleProvider.setCustomParameters({
      prompt: 'select_account',
    });

    await signInWithPopup(auth, googleProvider);

    navigate('/');
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      if (error) setError(null);

      const { user } = await signInWithEmailAndPassword(
        auth,
        userLogin.email,
        userLogin.password,
      );

      setCurrentUser(user);
      setUserLogin({ email: '', password: '' });
      navigate('/');
    } catch (err) {
      if (err.message === 'Firebase: Error (auth/user-not-found).') {
        setError('User not found');
      }

      if (err.message === 'Firebase: Error (auth/wrong-password).') {
        setError('Wrong password');
      }

      if (err.message === 'Firebase: Error (auth/invalid-email).') {
        setError('Invalid email');
      }
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  const value = useMemo(() => ({
    currentUser,
    setCurrentUser,
    userLogin,
    setUserLogin,
    error,
    handleLogin,
    loading,
    setLoading,
    handleLogout,
    handleLoginWithGoogle,
  }), [currentUser, userLogin, error, loading]);

  return (
    <authContext.Provider value={value}>
      {children}
    </authContext.Provider>
  );
}

export { authContext, AuthProvider };
