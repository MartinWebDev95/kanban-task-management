/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import { useState } from 'react';
import addNewTask from '../services/addNewTask';
import updateTask from '../services/updateTask';

function AddNewTask({
  openTaskModal, setOpenTaskModal, updating = false, selectedTask = '', selectedBoard = '',
}) {
  const [formTask, setFormTask] = useState({
    taskName: `${selectedTask.title ? selectedTask.title : ''}`,
    taskDescription: `${selectedTask.description ? selectedTask.description : ''}`,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (updating) {
      try {
        // Updating the selected task using the id
        await updateTask({
          taskId: selectedTask.uid,
          newTaskName: formTask.taskName,
          newTaskDescription: formTask.taskDescription,
        });

        // Close modal
        setOpenTaskModal(false);

        // Reset form inputs
        setFormTask({
          taskName: '',
          taskDescription: '',
        });
      } catch (err) {
        throw new Error(err.message);
      }
    } else {
      try {
        // Add new task to the selected board
        await addNewTask({
          boardId: selectedBoard.uid,
          titleTask: formTask.taskName,
          descriptionTask: formTask.taskDescription,
        });

        // Close modal
        setOpenTaskModal(false);

        // Reset form inputs
        setFormTask({
          taskName: '',
          taskDescription: '',
        });
      } catch (err) {
        throw new Error(err.message);
      }
    }
  };

  const handleCloseNewTaskModal = (e) => {
    if (e.target.ariaLabel === 'newTask-modal') {
      setOpenTaskModal(false);
    }
  };

  return (
    openTaskModal && (
      <div
        className="grid place-items-center bg-black/50 absolute z-30 top-0 left-0 bottom-0 w-full h-screen py-8"
        aria-label="newTask-modal"
        onClick={handleCloseNewTaskModal}
      >
        <form
          action=""
          className="bg-white dark:bg-slate-800 rounded-md w-4/5 h-full px-8 py-8 lg:w-2/5 flex flex-col gap-8 overflow-y-scroll scrollbar-hide"
          onSubmit={handleSubmit}
        >
          <h2 className="text-black dark:text-white font-semibold text-lg">
            {updating ? 'Edit Task' : 'Add New Task'}
          </h2>

          <label htmlFor="taskName" className="flex flex-col gap-2">
            <span className="text-gray-500 dark:text-white text-sm font-semibold">Task Name</span>
            <input
              type="text"
              name="taskName"
              id="taskName"
              placeholder="e.g. Take coffe break"
              value={formTask.taskName}
              className="dark:bg-slate-800 border-2 rounded-md py-2 px-2 border-gray-200 dark:border-gray-500 placeholder:text-sm dark:text-white text-black"
              onChange={(e) => setFormTask({ ...formTask, [e.target.name]: e.target.value })}
            />
          </label>

          <label htmlFor="description" className="flex flex-col gap-2">
            <span className="text-gray-500 dark:text-white text-sm font-semibold">Description</span>
            <textarea
              name="taskDescription"
              id="description"
              cols="30"
              rows="5"
              placeholder="e.g. It's always good to take a break. This  15 minute break will  recharge the batteries  a little."
              value={formTask.taskDescription}
              className="dark:bg-slate-800 border-2 rounded-md py-2 px-2 border-gray-200 dark:border-gray-500 placeholder:text-sm dark:text-white text-black"
              onChange={(e) => setFormTask({ ...formTask, [e.target.name]: e.target.value })}
            />
          </label>

          <div className="flex flex-col gap-2">
            <label htmlFor="taskName" className="flex flex-col gap-2">
              <span className="text-gray-500 dark:text-white text-sm font-semibold">Subtasks</span>

              <div className="flex items-center gap-2">
                <input
                  type="text"
                  name="taskName"
                  id="taskName"
                  placeholder="e.g. Take coffe break"
                  className="dark:bg-slate-800 border-2 rounded-md py-2 px-2 border-gray-200 dark:border-gray-500 flex-1 placeholder:text-sm dark:text-white text-black"
                />
                <button type="button" className="w-fit">
                  <img src="/assets/icon-cross.svg" alt="Delete subtask" />
                </button>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  name="taskName"
                  id="taskName"
                  placeholder="e.g. Take coffe break"
                  className="dark:bg-slate-800 border-2 rounded-md py-2 px-2 border-gray-200 dark:border-gray-500 flex-1 placeholder:text-sm dark:text-white text-black"
                />
                <button type="button" className="w-fit">
                  <img src="/assets/icon-cross.svg" alt="Delete subtask" />
                </button>
              </div>
            </label>

            <button type="button" className="w-full rounded-full text-white bg-indigo-700 dark:text-indigo-700 dark:bg-white py-2 font-semibold lg:hover:bg-indigo-500 lg:hover:text-white transition-all duration-300 ease-in-out">
              + Add New Subtask
            </button>
          </div>

          <label htmlFor="currentStatus" className="flex flex-col gap-2">
            <span className="text-gray-500 dark:text-white text-sm font-semibold">Current Status</span>
            <select name="currentStatus" id="currentStatus" className="dark:text-white dark:bg-slate-800 border-2 rounded-md py-2 px-2 border-gray-200 dark:border-gray-500 placeholder:text-sm text-sm">
              <option value="todo">Todo</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
          </label>

          <button type="submit" className="w-full rounded-full bg-indigo-700 text-white py-2 font-semibold lg:hover:bg-indigo-500 transition-all duration-300 ease-in-out">
            {updating ? 'Save Changes' : 'Create Task'}
          </button>
        </form>
      </div>
    )
  );
}

export default AddNewTask;
