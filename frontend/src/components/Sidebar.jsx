import ToggleTheme from './ToggleTheme';

function Sidebar() {
  return (
    <aside className="bg-white dark:bg-slate-800 w-[20%] py-8 flex flex-col justify-between">
      <div>
        <h2 className="uppercase text-gray-500 font-semibold ml-5 text-sm tracking-widest">
          All boards (3)
        </h2>

        <ul className="mt-4 mr-4 font-semibold">
          <li>
            <button
              type="button"
              className="flex items-center gap-4 pl-5 py-4 rounded-r-full w-full text-gray-500 lg:hover:text-indigo-700 dark:lg:hover:bg-white lg:hover:bg-gray-100 transition-all duration-200 ease-in-out"
            >
              <img src="/assets/icon-board.svg" alt="Board" />

              <span>
                Platform Launch
              </span>
            </button>
          </li>

          <li>
            <button
              type="button"
              className="flex items-center gap-4 pl-5 py-4 rounded-r-full w-full text-gray-500 lg:hover:text-indigo-700 dark:lg:hover:bg-white lg:hover:bg-gray-100 transition-all duration-200 ease-in-out"
            >
              <img src="/assets/icon-board.svg" alt="Board" />

              <span>
                Marketing Plan
              </span>
            </button>
          </li>

          <li>
            <button
              type="button"
              className="flex items-center gap-4 pl-5 py-4 rounded-r-full w-full text-gray-500 lg:hover:text-indigo-700 dark:lg:hover:bg-white lg:hover:bg-gray-100 transition-all duration-200 ease-in-out"
            >
              <img src="/assets/icon-board.svg" alt="Board" />

              <span>
                Roadmap
              </span>
            </button>
          </li>
        </ul>
      </div>

      <div className="w-full">
        <ToggleTheme />
      </div>
    </aside>
  );
}

export default Sidebar;
