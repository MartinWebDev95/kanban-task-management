import ListOfTasks from './ListOfTasks';
import Spinner from './Spinner';

function SectionTasks({ tasks, loadingTasks }) {
  return (
    <section className="bg-gray-100 dark:bg-slate-900 w-full px-4 pt-8 lg:overflow-y-scroll">
      {loadingTasks
        ? (<Spinner />)
        : (<ListOfTasks tasks={tasks} />)}
    </section>
  );
}

export default SectionTasks;
