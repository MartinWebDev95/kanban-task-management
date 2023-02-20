import ToggleTheme from '../components/ToggleTheme';
import useAuthContext from '../hooks/useAuthContext';

function Login() {
  const {
    userLogin, setUserLogin, error, handleSubmit,
  } = useAuthContext();

  const handleChange = (e) => {
    setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
  };

  return (
    <main className="grid place-content-center place-items-center h-screen w-full px-8">
      <section className="bg-white dark:bg-slate-800 p-8 rounded-md shadow-xl">
        <h1 className="text-center text-black dark:text-white font-semibold text-2xl">Welcome to Kanban Task Management</h1>

        <h2 className="text-center text-black dark:text-white font-semibold my-4 uppercase">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 lg:w-3/4 lg:mx-auto">
          <label htmlFor="email" className="flex flex-col gap-2">
            <span className="dark:text-white font-semibold text-black text-sm">Email: </span>
            <input type="email" name="email" id="email" value={userLogin.email} className="bg-transparent border-2 rounded-md border-gray-300 dark:border-gray-500 p-2 font-semibold text-sm dark:text-white" onChange={handleChange} />
          </label>

          <label htmlFor="password" className="flex flex-col gap-2">
            <span className="dark:text-white font-semibold text-black text-sm">Password: </span>
            <input type="password" name="password" id="password" value={userLogin.password} className="bg-transparent border-2 rounded-md border-gray-300 dark:border-gray-500 p-2 font-semibold text-sm dark:text-white" onChange={handleChange} />
          </label>

          <button type="submit" className="bg-indigo-700 rounded-full p-2 hover:bg-indigo-500 text-white font-semibold transition-all duration-200 ease-in-out">
            Login
          </button>

          {error && (
            <p className="text-red-500 font-semibold text-center">
              Wrong email or password
            </p>
          )}

        </form>

        <div className="lg:w-4/5 lg:mx-auto mt-4">
          <ToggleTheme />
        </div>
      </section>
    </main>
  );
}

export default Login;
