import Spinner from './Spinner';

function ListOfTasks({ tasks, loadingTasks }) {
  return (
    loadingTasks
      ? (<Spinner />)
      : (
        tasks.map((task) => console.log(task))
      )
  );
}

export default ListOfTasks;
