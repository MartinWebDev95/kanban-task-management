/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import HideSidebarButton from './HideSidebarButton';
import ListOfBoards from './ListOfBoards';
import ToggleTheme from './ToggleTheme';
import Logout from './Logout';

const boards = [
  { board: 'Platform Launch' },
  { board: 'Marketing Plan' },
  { board: 'Roadmap' },
];

function Sidebar({ showSidebar, setShowSidebar }) {
  const [hideSidebar, setHideSidebar] = useState(!!localStorage.getItem('hideSidebar'));

  const handleCloseModalSidebar = (e) => {
    if (e.target.ariaLabel === 'sidebar-modal') {
      setShowSidebar(!showSidebar);
    }
  };

  return (
    <aside
      className={` 
        ${showSidebar
        ? 'grid place-items-center bg-black/50 absolute w-full lg:flex'
        : 'hidden lg:flex'}
        ${hideSidebar
          ? 'lg:w-[0vw] lg:fixed'
          : 'lg:flex lg:fixed lg:w-[20vw]'} 
        top-0 left-0 h-full
      `}
      aria-label="sidebar-modal"
      onClick={handleCloseModalSidebar}
    >
      <div className="bg-white dark:bg-slate-800 rounded-xl w-4/5 py-4 lg:w-full lg:h-full lg:rounded-none lg:flex lg:flex-col lg:justify-between lg:pt-20">

        <div className={`lg:mt-5 ${hideSidebar && 'lg:overflow-hidden'}`}>
          <h2 className="uppercase text-gray-500 font-semibold ml-6 text-sm tracking-widest">
            {`All boards (${boards.length})`}
          </h2>

          <ListOfBoards boards={boards} />
        </div>

        <div className={`w-full mt-4 lg:mt-0 ${hideSidebar && 'lg:overflow-hidden'}`}>
          <Logout />

          <HideSidebarButton hideSidebar={hideSidebar} setHideSidebar={setHideSidebar} />

          <ToggleTheme />
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
