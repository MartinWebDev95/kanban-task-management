import Task from './Task';

function ListOfTasks({ tasks, statusId }) {
  return (
    <ul className="flex flex-col gap-4 mt-4">
      {tasks.map((task) => (
        task.statusRef.id === statusId
          && (
            <li key={task.uid}>
              <Task task={task} />
            </li>
          )
      ))}
    </ul>
  );
}

export default ListOfTasks;
