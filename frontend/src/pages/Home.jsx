import { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Spinner from '../components/Spinner';
import useFetchBoards from '../hooks/useFetchBoards';

function Home() {
  const [showSidebar, setShowSidebar] = useState(false);
  const { boards, loading } = useFetchBoards();

  return (
    loading
      ? (<Spinner />)
      : (
        <>
          <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
          <main className="flex pt-16">
            <Sidebar
              showSidebar={showSidebar}
              setShowSidebar={setShowSidebar}
              boards={boards}
            />
            <section className="bg-gray-100 dark:bg-slate-900 h-[88vh] flex-1" />
          </main>
        </>
      )
  );
}

export default Home;
