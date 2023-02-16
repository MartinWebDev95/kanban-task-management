import Board from './Board';

function ListOfBoards({ boards }) {
  return (
    <ul className="mt-4 mr-4 font-semibold w-full">
      {boards.map(({ board }) => (
        <Board board={board} />
      ))}
    </ul>
  );
}

export default ListOfBoards;
