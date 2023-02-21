import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import {
  doc, getDoc, serverTimestamp, setDoc,
} from 'firebase/firestore';
import {
  createContext, useEffect, useMemo, useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase';

const authContext = createContext();

function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userFormData, setUserFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    // Observer that execute every time that someone login or logout
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

    try {
      const { user } = await signInWithPopup(auth, googleProvider);

      // Get the user by id
      const userRef = doc(db, 'users', user.uid);
      const userSnap = await getDoc(userRef);

      // Add a new document in collection "users" if this document doesn't exists yet
      if (!userSnap.exists()) {
        await setDoc(doc(db, 'users', user.uid), {
          username: user.displayName,
          email: user.email,
          timeStamp: serverTimestamp(),
        });
      }

      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      if (error) setError(null);

      const { email, password } = userFormData;

      const { user } = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );

      setCurrentUser(user);

      // Clean form inputs
      setUserFormData({ username: '', email: '', password: '' });

      // Navigate to homepage when the authentication is correct
      navigate('/');
    } catch (err) {
      if (err.message === 'Firebase: Error (auth/user-not-found).') {
        setError('User not found');
      }

      if (err.message === 'Firebase: Error (auth/wrong-password).' || err.message === 'Firebase: Error (auth/internal-error).') {
        setError('Wrong password');
      }

      if (err.message === 'Firebase: Error (auth/invalid-email).') {
        setError('Invalid email');
      }

      if (err.message === 'Firebase: Password should be at least 6 characters (auth/weak-password).') {
        setError('Password should be at least 6 characters');
      }
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const { username, email, password } = userFormData;

    try {
      if (error) setError(null);

      // Register new user with his email and password
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      // Add a new document in collection "users"
      await setDoc(doc(db, 'users', user.uid), {
        username,
        email,
        timeStamp: serverTimestamp(),
      });

      // Clean form inputs
      setUserFormData({ username: '', email: '', password: '' });

      // Navigate to login to sign in with the new account created
      navigate('/login');
    } catch (err) {
      if (err.message === 'Firebase: Error (auth/email-already-in-use).') {
        setError('Email already in use');
      }

      if (err.message === 'Firebase: Error (auth/wrong-password).' || err.message === 'Firebase: Error (auth/internal-error).') {
        setError('Wrong password');
      }

      if (err.message === 'Firebase: Error (auth/invalid-email).') {
        setError('Invalid email');
      }

      if (err.message === 'Firebase: Password should be at least 6 characters (auth/weak-password).') {
        setError('Password should be at least 6 characters');
      }
    }
  };

  const value = useMemo(() => ({
    currentUser,
    setCurrentUser,
    userFormData,
    setUserFormData,
    error,
    handleLogin,
    loading,
    setLoading,
    handleLogout,
    handleLoginWithGoogle,
    handleRegister,
  }), [currentUser, userFormData, error, loading]);

  return (
    <authContext.Provider value={value}>
      {children}
    </authContext.Provider>
  );
}

export { authContext, AuthProvider };
