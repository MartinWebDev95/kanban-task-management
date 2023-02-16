import { useState } from 'react';
import DeleteBoardModal from './DeleteBoardModal';

function BoardModal({ boardModal, setOpenBoardModal }) {
  const [deleteModal, setDeleteModal] = useState(false);

  const handleEditBoard = () => {
    setOpenBoardModal(false);
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

        <DeleteBoardModal
          deleteModal={deleteModal}
          setDeleteModal={setDeleteModal}
          setOpenBoardModal={setOpenBoardModal}
        />
      </>
    )
  );
}

export default BoardModal;
