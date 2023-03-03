import { useState } from 'react';
import Header from '../components/Header';
import ListOfTasks from '../components/ListOfTasks';
import Sidebar from '../components/Sidebar';
import Spinner from '../components/Spinner';
import useFetchBoards from '../hooks/useFetchBoards';
import useFetchTasksByBoards from '../hooks/useFetchTasksByBoard';

function Home() {
  const [showSidebar, setShowSidebar] = useState(false);
  const {
    boards,
    loading,
    selectedBoard,
    setSelectedBoard,
  } = useFetchBoards();
  const { tasks, loadingTasks } = useFetchTasksByBoards(selectedBoard.uid);

  return (
    loading
      ? (<Spinner />)
      : (
        <>
          <Header
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
            selectedBoard={selectedBoard}
          />
          <main className="flex justify-between pt-16">
            <Sidebar
              showSidebar={showSidebar}
              setShowSidebar={setShowSidebar}
              selectedBoard={selectedBoard}
              setSelectedBoard={setSelectedBoard}
              boards={boards}
            />
            <section className="bg-gray-100 dark:bg-slate-900 w-full px-4 pt-8 lg:overflow-y-scroll">
              <ListOfTasks tasks={tasks} loadingTasks={loadingTasks} />
            </section>
          </main>
        </>
      )
  );
}

export default Home;
