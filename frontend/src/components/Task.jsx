import { useState } from 'react';
import TaskModal from './TaskModal';
import useFetchSubtasks from '../hooks/useFetchSubtasks';

function Task({ task }) {
  const [openTaskModal, setOpenTaskModal] = useState(false);
  const { subtasks } = useFetchSubtasks({ taskId: task.uid });

  const handleClick = () => {
    setOpenTaskModal(true);
  };

  return (
    <>
      <button
        type="button"
        className="dark:bg-slate-800 bg-white p-4 rounded-lg flex flex-col gap-2 shadow-lg group"
        onClick={handleClick}
      >
        <h2 className="dark:text-white text-black font-semibold group-hover:text-indigo-700 transition-all duration-150 ease-in-out">{task.title}</h2>
        <p className="text-gray-500 font-semibold text-sm">
          {`${subtasks.filter((subtask) => subtask.doneSubtask).length} of ${subtasks.length} subtasks`}
        </p>
      </button>

      <TaskModal
        openTaskModal={openTaskModal}
        setOpenTaskModal={setOpenTaskModal}
        task={task}
        subtasks={subtasks}
      />
    </>
  );
}

export default Task;
