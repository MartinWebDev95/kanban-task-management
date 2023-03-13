import updateDoneSubtask from '../services/updateDoneSubtask';

function ListOfSubtasks({ subtasks }) {
  const handleCheckedSubtask = async (e) => {
    // Update done property of subtasks in database
    subtasks.forEach(async (subtask) => {
      if (subtask.idSubtask === e.target.id) {
        await updateDoneSubtask({
          subtaskId: subtask.idSubtask,
          subtaskDone: subtask.doneSubtask,
        });
      }
    });
  };

  return (
    <div>
      <h3 className="text-gray-500 font-semibold text-sm mb-4 tracking-widest">
        {`Subtasks (${subtasks.filter((subtask) => subtask.doneSubtask).length} of ${subtasks.length})`}
      </h3>

      <ul>
        {subtasks.map((item) => (
          <li key={item.idSubtask} className="mb-2">
            <label
              htmlFor={`subtask-${item.idSubtask}`}
              className={`flex items-center gap-4 rounded-lg dark:bg-slate-900 bg-gray-100 p-3 dark:text-white text-black text-sm font-semibold hover:cursor-pointer hover:bg-gray-300 dark:hover:bg-indigo-900 ${item.doneSubtask && 'line-through dark:text-gray-500 text-gray-500'} transition-all duration-100 ease-in-out`}
            >
              <input
                type="checkbox"
                name={`subtask-${item.idSubtask}`}
                id={`${item.idSubtask}`}
                onClick={handleCheckedSubtask}
                checked={item.doneSubtask}
                readOnly
              />

              {item.titleSubtask}

            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListOfSubtasks;
