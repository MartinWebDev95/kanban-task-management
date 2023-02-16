/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
function AddNewTask({ addNewTask, setAddNewTask }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    setAddNewTask(false);
  };

  const handleCloseNewTaskModal = (e) => {
    if (e.target.ariaLabel === 'newTask-modal') {
      setAddNewTask(false);
    }
  };

  return (
    addNewTask && (
      <div
        className="grid place-items-center bg-black/50 absolute z-30 top-0 left-0 bottom-0 w-full h-screen py-8"
        aria-label="newTask-modal"
        onClick={handleCloseNewTaskModal}
      >
        <form
          action=""
          className="bg-white dark:bg-slate-800 rounded-md w-4/5 h-full px-8 py-8 lg:w-2/5 flex flex-col gap-8 overflow-y-scroll scrollbar-hide"
          onSubmit={handleSubmit}
        >
          <h2 className="text-black dark:text-white font-semibold text-lg">Add New Task</h2>

          <label htmlFor="taskName" className="flex flex-col gap-2">
            <span className="text-gray-500 dark:text-white text-sm font-semibold">Task Name</span>
            <input
              type="text"
              name="taskName"
              id="taskName"
              placeholder="e.g. Take coffe break"
              className="dark:bg-slate-800 border-2 rounded-md py-2 px-2 border-gray-200 dark:border-gray-500 placeholder:text-sm"
            />
          </label>

          <label htmlFor="description" className="flex flex-col gap-2">
            <span className="text-gray-500 dark:text-white text-sm font-semibold">Description</span>
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="5"
              placeholder="e.g. It's always good to take a break. This  15 minute break will  recharge the batteries  a little."
              className="dark:bg-slate-800 border-2 rounded-md py-2 px-2 border-gray-200 dark:border-gray-500 placeholder:text-sm"
            />
          </label>

          <div className="flex flex-col gap-2">
            <label htmlFor="taskName" className="flex flex-col gap-2">
              <span className="text-gray-500 dark:text-white text-sm font-semibold">Subtasks</span>

              <div className="flex items-center gap-2">
                <input
                  type="text"
                  name="taskName"
                  id="taskName"
                  placeholder="e.g. Take coffe break"
                  className="dark:bg-slate-800 border-2 rounded-md py-2 px-2 border-gray-200 dark:border-gray-500 flex-1 placeholder:text-sm"
                />
                <button type="button" className="w-fit">
                  <img src="/assets/icon-cross.svg" alt="Delete subtask" />
                </button>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  name="taskName"
                  id="taskName"
                  placeholder="e.g. Take coffe break"
                  className="dark:bg-slate-800 border-2 rounded-md py-2 px-2 border-gray-200 dark:border-gray-500 flex-1 placeholder:text-sm"
                />
                <button type="button" className="w-fit">
                  <img src="/assets/icon-cross.svg" alt="Delete subtask" />
                </button>
              </div>
            </label>

            <button type="button" className="w-full rounded-full text-white bg-indigo-700 dark:text-indigo-700 dark:bg-white py-2 font-semibold lg:hover:bg-indigo-500 lg:hover:text-white transition-all duration-300 ease-in-out">
              + Add New Subtask
            </button>
          </div>

          <label htmlFor="currentStatus" className="flex flex-col gap-2">
            <span className="text-gray-500 dark:text-white text-sm font-semibold">Current Status</span>
            <select name="currentStatus" id="currentStatus" className="dark:text-white dark:bg-slate-800 border-2 rounded-md py-2 px-2 border-gray-200 dark:border-gray-500 placeholder:text-sm text-sm">
              <option value="todo">Todo</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
          </label>

          <button type="submit" className="w-full rounded-full bg-indigo-700 text-white py-2 font-semibold lg:hover:bg-indigo-500 transition-all duration-300 ease-in-out">
            Create Task
          </button>
        </form>
      </div>
    )
  );
}

export default AddNewTask;
