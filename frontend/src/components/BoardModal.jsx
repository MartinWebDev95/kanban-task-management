import { useState } from 'react';
import AddNewBoardModal from './AddNewBoardModal';
import DeleteBoardModal from './DeleteBoardModal';

function BoardModal({ boardModal, setOpenBoardModal, selectedBoard }) {
  const [updateModal, setUpdateModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const handleEditBoard = () => {
    setUpdateModal(true);
    // setOpenBoardModal(false);
  };

  const handleDeleteBoard = () => {
    setDeleteModal(true);
  };

  return (
    boardModal && (
      <>
        <div className="absolute top-14 right-4 lg:top-16 lg:right-6 bg-white dark:bg-slate-900 flex flex-col items-start gap-4 p-6 shadow-xl shadow-slate-300 dark:shadow-slate-800 rounded-md">
          <button
            type="button"
            className="text-gray-500 text-sm font-semibold"
            onClick={handleEditBoard}
          >
            Edit board
          </button>

          <button
            type="button"
            className="text-red-500 text-sm font-semibold"
            onClick={handleDeleteBoard}
          >
            Delete board
          </button>
        </div>

        <AddNewBoardModal
          openBoardModal={updateModal}
          setOpenBoardModal={setUpdateModal}
          updating
          selectedBoard={selectedBoard}
        />

        <DeleteBoardModal
          deleteModal={deleteModal}
          setDeleteModal={setDeleteModal}
          setCloseBoardModal={setOpenBoardModal}
        />
      </>
    )
  );
}

export default BoardModal;
