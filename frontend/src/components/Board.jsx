function Board({ board }) {
  return (
    <li>
      <button
        type="button"
        className="flex items-center gap-4 pl-6 py-4 rounded-r-full w-full text-gray-500 lg:hover:text-indigo-700 dark:lg:hover:bg-white lg:hover:bg-gray-100 transition-all duration-200 ease-in-out"
      >
        <img src="/assets/icon-board.svg" alt="Board" />

        <span>
          {board}
        </span>
      </button>
    </li>
  );
}

export default Board;
