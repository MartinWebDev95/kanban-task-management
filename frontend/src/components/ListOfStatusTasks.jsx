function ListOfStatusTasks({ taskStatus, selectedBoard }) {
  return (
    <ul className={`grid grid-cols-${(taskStatus.length + 1).toString()} h-full w-full gap-4`}>
      {taskStatus.map(({ uid, title }) => (
        <li key={uid} className="font-semibold text-gray-500 text-sm tracking-widest">
          {title}
        </li>
      ))}

      <li>
        <button
          type="button"
          className="text-gray-500 bg-gray-200 dark:bg-slate-800 text-2xl font-semibold rounded-lg hover:text-indigo-700 transition-all duration-100 ease-in-out h-full w-full"
        >
          + New Column
        </button>
      </li>
    </ul>
  );
}

export default ListOfStatusTasks;
