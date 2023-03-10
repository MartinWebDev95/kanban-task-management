import deleteSubtask from '../services/deleteSubtask';

function ListOfSubtaskInputs({
  subtasksInputs, setSubtasksInputs, updating, subtasksModified,
}) {
  const handleAddNewSubtask = () => {
    const generatedId = crypto.randomUUID();

    setSubtasksInputs([
      ...subtasksInputs,
      {
        idInput: generatedId,
        nameInput: `taskName-${generatedId}`,
        done: false,
        valueInput: '',
      },
    ]);
  };

  const handleChangeSubtask = (e) => {
    // Check if subtask is updating and check if subtask id is already in subtaskModified collection
    if (updating && !subtasksModified.current.includes(e.target.id)) {
      subtasksModified.current = [...subtasksModified.current, e.target.id];
    }

    const newState = subtasksInputs.map((subtask) => (subtask.idInput === e.target.id
      ? { ...subtask, valueInput: e.target.value }
      : subtask
    ));

    setSubtasksInputs(newState);
  };

  const handleDeleteSubtask = async (id) => {
    setSubtasksInputs(subtasksInputs.filter((subtask) => id !== subtask.idInput));

    if (updating) {
      // Delete subtask from database
      await deleteSubtask({ subtaskId: id });
    }
  };

  return (
    <>
      <label htmlFor="taskName" className="flex flex-col gap-2">
        <span className="text-gray-500 dark:text-white text-sm font-semibold">Subtasks</span>

        {subtasksInputs.map(({ idInput, nameInput, valueInput }) => (
          <div className="flex items-center gap-2" key={idInput}>
            <input
              type="text"
              name={nameInput}
              id={idInput}
              value={valueInput}
              placeholder="e.g. Take coffe break"
              className="dark:bg-slate-800 border-2 rounded-md py-2 px-2 border-gray-200 dark:border-gray-500 flex-1 placeholder:text-sm dark:text-white text-black"
              onChange={handleChangeSubtask}
            />
            <button
              type="button"
              className="w-fit"
              onClick={() => handleDeleteSubtask(idInput)}
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
