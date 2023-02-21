import { Link } from 'react-router-dom';
import useAuthContext from '../hooks/useAuthContext';
import InputFormUser from './InputFormUser';
import ToggleTheme from './ToggleTheme';

function LoginAndRegisterForm({ typeForm }) {
  const {
    userFormData, error, handleRegister, handleLogin, handleLoginWithGoogle,
  } = useAuthContext();

  const { username, email, password } = userFormData;

  return (
    <main className="grid place-content-center place-items-center h-screen w-full px-8">
      <section className="bg-white dark:bg-slate-800 p-8 rounded-md shadow-xl">
        <h1 className="text-center text-black dark:text-white font-semibold text-2xl">Welcome to Kanban Task Management</h1>

        <h2 className="text-center text-black dark:text-white font-semibold my-4 uppercase">
          {typeForm === 'login' ? 'Login' : 'Register'}
        </h2>

        {error && (
          <p className="text-red-500 font-semibold text-center mt-4">
            {error}
          </p>
        )}

        <form
          onSubmit={typeForm === 'login' ? handleLogin : handleRegister}
          className="flex flex-col gap-4 lg:w-3/4 lg:mx-auto"
        >
          {typeForm === 'register' && (
            <InputFormUser
              typeInput="text"
              inputValue={username}
              inputName="username"
            />
          )}

          <InputFormUser
            typeInput="email"
            inputValue={email}
            inputName="email"
          />

          <InputFormUser
            typeInput="password"
            inputValue={password}
            inputName="password"
          />

          <button
            type="submit"
            className="bg-indigo-700 rounded-full p-2 hover:bg-indigo-500 text-white font-semibold transition-all duration-200 ease-in-out"
          >
            {typeForm === 'login' ? 'Login' : 'Register'}
          </button>
        </form>

        {typeForm === 'login' && (
          <button
            type="button"
            className="bg-indigo-700 rounded-full p-2 hover:bg-indigo-500 text-white font-semibold transition-all duration-200 ease-in-out w-full mt-4 flex items-center justify-center gap-4 lg:w-3/4 lg:mx-auto"
            onClick={handleLoginWithGoogle}
          >
            <img src="/assets/icon-google.svg" alt="Login with Google" className="w-7 h-7" />
            Login with Google
          </button>
        )}

        <Link
          to={typeForm === 'login' ? '/register' : '/login'}
          className="block text-center lg:w-3/4 lg:mx-auto mt-4 text-indigo-700 font-semibold hover:underline hover:text-indigo-500 transition-all duration-200 ease-in-out"
        >
          {typeForm === 'login'
            ? 'You don\'t have any account yet? Register now!'
            : 'You already have an account? Login!'}
        </Link>

        <div className="lg:w-4/5 lg:mx-auto mt-4">
          <ToggleTheme />
        </div>
      </section>
    </main>
  );
}

export default LoginAndRegisterForm;
