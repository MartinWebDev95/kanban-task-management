function ListOfSubtaskInputs({ subtasksInputs, setSubtasksInputs }) {
  const handleAddNewSubtask = () => {
    setSubtasksInputs([
      ...subtasksInputs,
      { idInput: crypto.randomUUID(), nameInput: `taskName-${crypto.randomUUID()}` },
    ]);
  };

  const handleChangeSubtask = (e) => {

  };

  const handleDeleteSubtask = (id) => {
    setSubtasksInputs(subtasksInputs.filter((subtask) => id !== subtask.idInput));
  };

  return (
    <>
      <label htmlFor="taskName" className="flex flex-col gap-2">
        <span className="text-gray-500 dark:text-white text-sm font-semibold">Subtasks</span>

        {subtasksInputs.map((subtask) => (
          <div className="flex items-center gap-2" key={subtask.idInput}>
            <input
              type="text"
              name={subtask.nameInput}
              id={subtask.idInput}
              placeholder="e.g. Take coffe break"
              className="dark:bg-slate-800 border-2 rounded-md py-2 px-2 border-gray-200 dark:border-gray-500 flex-1 placeholder:text-sm dark:text-white text-black"
              onChange={handleChangeSubtask}
            />
            <button
              type="button"
              className="w-fit"
              onClick={() => handleDeleteSubtask(subtask.idInput)}
            >
              <img src="/assets/icon-cross.svg" alt="Delete subtask" />
            </button>
          </div>
        ))}
      </label>

      <button
        type="button"
        className="w-full rounded-full text-white bg-indigo-700 dark:text-indigo-700 dark:bg-white py-2 font-semibold lg:hover:bg-indigo-500 lg:hover:text-white transition-all duration-300 ease-in-out"
        onClick={handleAddNewSubtask}
      >
        + Add New Subtask
      </button>
    </>
  );
}

export default ListOfSubtaskInputs;
