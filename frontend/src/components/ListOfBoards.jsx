import Board from './Board';

function ListOfBoards({
  boards, setOpenNewBoard, selectedBoard, setSelectedBoard,
}) {
  const handleAddNewBoard = () => {
    setOpenNewBoard(true);
  };

  return (
    <ul className="mt-4 pr-4 font-semibold w-full">
      <li>
        <button
          type="button"
          className="flex items-center gap-4 pl-6 py-4 rounded-r-full w-full text-indigo-700 lg:hover:text-indigo-700 dark:lg:hover:bg-white lg:hover:bg-gray-100 transition-all duration-200 ease-in-out group"
          onClick={handleAddNewBoard}
        >
          <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" className="fill-indigo-700 group-hover:fill-gray-500">
            <path d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z" />
          </svg>

          <span>
            + Create New Board
          </span>
        </button>
      </li>

      {boards.map((board) => (
        <Board
          key={board.uid}
          board={board}
          selectedBoard={selectedBoard}
          setSelectedBoard={setSelectedBoard}
        />
      ))}

    </ul>
  );
}

export default ListOfBoards;
