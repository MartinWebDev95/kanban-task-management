import ListOfStatusTasks from './ListOfStatusTasks';
import Spinner from './Spinner';

function SectionTasks({ taskStatus, loadingTaskStatus, selectedBoard }) {
  return (
    <section className="bg-gray-100 dark:bg-slate-900 px-4 pt-8 h-[88vh] scrollbar-hide overflow-y-scroll overflow-x-scroll">
      {loadingTaskStatus
        ? (<Spinner />)
        : (<ListOfStatusTasks taskStatus={taskStatus} selectedBoard={selectedBoard} />)}
    </section>
  );
}

export default SectionTasks;
