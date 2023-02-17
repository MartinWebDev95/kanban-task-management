import ToggleTheme from '../components/ToggleTheme';

function Login() {
  const handleSubmit = () => {

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
            <input type="email" name="email" id="email" className="bg-transparent border-2 rounded-md border-gray-300 dark:border-gray-500 p-2 font-semibold text-sm dark:text-white" />
          </label>

          <label htmlFor="password" className="flex flex-col gap-2">
            <span className="dark:text-white font-semibold text-black text-sm">Password: </span>
            <input type="password" name="password" id="password" className="bg-transparent border-2 rounded-md border-gray-300 dark:border-gray-500 p-2 font-semibold text-sm dark:text-white" />
          </label>

          <button type="submit" className="bg-indigo-700 rounded-full p-2 hover:bg-indigo-500 mb-4 text-white font-semibold transition-all duration-200 ease-in-out">
            Login
          </button>
        </form>

        <div className="lg:w-4/5 lg:mx-auto">
          <ToggleTheme />
        </div>
      </section>
    </main>
  );
}

export default Login;
