import Spinner from './Spinner';
import Task from './Task';

function ListOfTasks({ tasks, loadingTasks }) {
  return (
    loadingTasks
      ? (<Spinner />)
      : (
        tasks.length === 0 ? (
          <p className="grid place-items-center h-full dark:text-white text-black font-semibold">Create your first task</p>
        ) : (
          <ul className="flex flex-col gap-4">
            {tasks.map((task) => (
              <li>
                <Task key={task.uid} task={task} />
              </li>
            ))}
          </ul>
        )
      )
  );
}

export default ListOfTasks;
