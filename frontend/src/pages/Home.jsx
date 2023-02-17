import { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

function Home() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <main className="flex pt-16">
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <section className="bg-gray-100 dark:bg-slate-900 h-[88vh] flex-1" />
      </main>
    </>
  );
}

export default Home;
