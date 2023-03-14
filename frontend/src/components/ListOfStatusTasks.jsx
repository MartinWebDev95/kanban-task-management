import useFetchTasksByBoards from '../hooks/useFetchTasksByBoard';
import ListOfTasks from './ListOfTasks';

function ListOfStatusTasks({ taskStatus, selectedBoard }) {
  const { tasks } = useFetchTasksByBoards(selectedBoard.uid);

  return (
    taskStatus.length === 0
      ? (
        <p className="grid place-items-center h-full dark:text-white text-black font-semibold">
          Create your first task
        </p>
      ) : (
        <ul className={`grid grid-cols-${(taskStatus.length + 1).toString()} h-full w-full gap-4`}>

          {taskStatus.map(({ uid, title }) => (
            <li key={uid} className="font-semibold text-gray-500 text-sm tracking-widest">
              <span>
                {`${title} (${tasks.filter((task) => task.statusRef.id === uid).length})`}
              </span>

              <ListOfTasks tasks={tasks} statusId={uid} />
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
      )
  );
}

export default ListOfStatusTasks;
