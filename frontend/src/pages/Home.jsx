import { useState } from 'react';
import Header from '../components/Header';
import SectionTasks from '../components/SectionTasks';
import Sidebar from '../components/Sidebar';
import Spinner from '../components/Spinner';
import useFetchBoards from '../hooks/useFetchBoards';
import useFetchTasksStatus from '../hooks/useFetchTasksStatus';

function Home() {
  const [showSidebar, setShowSidebar] = useState(false);

  const {
    boards,
    loading,
    selectedBoard,
    setSelectedBoard,
  } = useFetchBoards();

  const { taskStatus, loadingTaskStatus } = useFetchTasksStatus(selectedBoard.uid);

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

            <SectionTasks
              taskStatus={taskStatus}
              loadingTaskStatus={loadingTaskStatus}
              selectedBoard={selectedBoard}
            />
          </main>
        </>
      )
  );
}

export default Home;
