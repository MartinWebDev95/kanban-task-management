function ListOfBoards() {
  return (
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
  );
}

export default ListOfBoards;
