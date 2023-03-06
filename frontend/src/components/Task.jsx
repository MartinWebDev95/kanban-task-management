function Task({ task }) {
  const handleClick = (e) => {};

  return (
    <button
      type="button"
      className="dark:bg-slate-800 bg-white p-4 rounded-lg flex flex-col gap-2 shadow-lg"
      onClick={handleClick}
    >
      <h2 className="dark:text-white text-black font-semibold">{task.title}</h2>
      <p className="text-gray-500 font-semibold text-sm">0 of 1 subtasks</p>
    </button>
  );
}

export default Task;
