/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

function TaskModal({ openTaskModal, setOpenTaskModal, task }) {
  const handleCloseTaskModal = (e) => {
    if (e.target.ariaLabel === 'task-modal') {
      setOpenTaskModal(false);
    }
  };

  return (
    openTaskModal && (
      <div
        className="grid place-items-center bg-black/50 absolute z-30 top-0 left-0 bottom-0 w-screen h-screen py-8"
        aria-label="task-modal"
        onClick={handleCloseTaskModal}
      >
        <div className="bg-white dark:bg-slate-800 rounded-md w-4/5 px-8 py-8 lg:w-2/5 flex flex-col gap-8 overflow-y-scroll scrollbar-hide">
          <div className="flex justify-between items-center">
            <h2 className="dark:text-white text-black font-semibold text-xl group-hover:text-indigo-700 transition-all duration-150 ease-in-out">{task.title}</h2>

            <button type="button" className="p-1">
              <img src="/assets/icon-vertical-ellipsis.svg" alt="Menu task" className="w-1" />
            </button>
          </div>

          {task.description !== '' && (
            <p className="text-gray-500 font-semibold text-sm">{task.description}</p>
          )}

          <label htmlFor="currentStatus" className="flex flex-col gap-2">
            <span className="text-gray-500 dark:text-white text-sm font-semibold">Current Status</span>
            <select name="currentStatus" id="currentStatus" className="dark:text-white dark:bg-slate-800 border-2 rounded-md py-2 px-2 border-gray-200 dark:border-gray-500 placeholder:text-sm text-sm">
              <option value="todo">Todo</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
          </label>
        </div>
      </div>
    )
  );
}

export default TaskModal;
