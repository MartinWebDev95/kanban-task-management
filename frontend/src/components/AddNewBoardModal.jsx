/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from 'react';
import useAuthContext from '../hooks/useAuthContext';
import addNewBoard from '../services/addNewBoard';

function AddNewBoardModal({
  openBoardModal, setOpenBoardModal, updating, selectedBoard = '',
}) {
  const [nameBoard, setNameBoard] = useState(selectedBoard.name);
  const { currentUser } = useAuthContext();

  const handleChange = (e) => {
    setNameBoard(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addNewBoard({ userId: currentUser.uid, nameBoard });
      setOpenBoardModal(false);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const handleCloseNewBoardModal = (e) => {
    if (e.target.ariaLabel === 'newBoard-modal') {
      setOpenBoardModal(false);
    }
  };

  return (
    openBoardModal && (
      <div
        className="grid place-items-center bg-black/50 absolute z-30 top-0 left-0 bottom-0 w-screen h-screen py-8"
        aria-label="newBoard-modal"
        onClick={handleCloseNewBoardModal}
      >
        <form
          action=""
          className="bg-white dark:bg-slate-800 rounded-md w-4/5 h-full px-8 py-8 lg:w-2/5 flex flex-col gap-8 overflow-y-scroll scrollbar-hide"
          onSubmit={handleSubmit}
        >
          <h2 className="text-black dark:text-white font-semibold text-lg">
            {updating ? 'Edit Board' : 'Add New Board'}
          </h2>

          <label htmlFor="taskName" className="flex flex-col gap-2">
            <span className="text-gray-500 dark:text-white text-sm font-semibold">Board Name</span>
            <input
              type="text"
              name="taskName"
              id="taskName"
              value={nameBoard}
              placeholder="e.g. Product Launch"
              className="dark:bg-slate-800 border-2 rounded-md py-2 px-2 border-gray-200 dark:border-gray-500 text-black dark:text-white text-sm"
              onChange={handleChange}
            />
          </label>

          <label htmlFor="currentStatus" className="flex flex-col gap-2">
            <span className="text-gray-500 dark:text-white text-sm font-semibold">Current Status</span>
            <select name="currentStatus" id="currentStatus" className="dark:text-white dark:bg-slate-800 border-2 rounded-md py-2 px-2 border-gray-200 dark:border-gray-500 placeholder:text-sm text-sm">
              <option value="todo">Todo</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
          </label>

          <button type="submit" className="w-full rounded-full bg-indigo-700 text-white py-2 font-semibold lg:hover:bg-indigo-500 transition-all duration-300 ease-in-out">
            {updating ? 'Save Changes' : 'Create Board'}
          </button>
        </form>
      </div>
    )
  );
}

export default AddNewBoardModal;
