function Task({ task }) {
  return (
    <button type="button" className="dark:bg-slate-800 p-4 rounded-lg flex flex-col gap-2">
      <h2 className="dark:text-white text-black font-semibold">{task.title}</h2>
      <p className="dark:text-slate-500 font-semibold text-sm">0 of 1 subtasks</p>
    </button>
  );
}

export default Task;
