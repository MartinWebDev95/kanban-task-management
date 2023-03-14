import { useState } from 'react';
import AddNewBoardModal from './AddNewBoardModal';
import AddNewTask from './AddNewTask';
import DeleteBoardModal from './DeleteBoardModal';

function BoardModal({
  openSettingsModal, setOpenSettingsModal, selectedItem, isTask = false, subtasks = [],
}) {
  const [updateModal, setUpdateModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const handleEdit = () => {
    setUpdateModal(true);
  };

  const handleDelete = () => {
    setDeleteModal(true);
  };

  return (
    <>
      {openSettingsModal && (
        <div className={`absolute ${isTask ? 'top-[275px] right-20 lg:top-16 lg:right-6' : 'top-14 right-4 lg:top-16 lg:right-6'} bg-white dark:bg-slate-900 flex flex-col items-start gap-4 p-6 shadow-xl shadow-slate-300 dark:shadow-slate-800 rounded-md`}>
          <button
            type="button"
            className="text-gray-500 text-sm font-semibold"
            onClick={handleEdit}
          >
            {isTask ? 'Edit task' : 'Edit board'}
          </button>

          <button
            type="button"
            className="text-red-500 text-sm font-semibold"
            onClick={handleDelete}
          >
            {isTask ? 'Delete task' : 'Delete board'}
          </button>
        </div>
      )}

      {!isTask ? (
        <>
          <AddNewBoardModal
            openBoardModal={updateModal}
            setOpenBoardModal={setUpdateModal}
            updating
            selectedBoard={selectedItem}
          />

          <DeleteBoardModal
            deleteModal={deleteModal}
            setDeleteModal={setDeleteModal}
            setOpenSettingsModal={setOpenSettingsModal}
            selectedItem={selectedItem}
          />
        </>
      ) : (
        <>
          <AddNewTask
            openTaskModal={updateModal}
            setOpenTaskModal={setUpdateModal}
            updating
            selectedTask={selectedItem}
            subtasks={subtasks}
          />

          <DeleteBoardModal
            deleteModal={deleteModal}
            setDeleteModal={setDeleteModal}
            setOpenSettingsModal={setOpenSettingsModal}
            selectedItem={selectedItem}
            isTask
          />
        </>
      )}

    </>
  );
}

export default BoardModal;
