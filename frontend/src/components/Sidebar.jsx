/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import ListOfBoards from './ListOfBoards';
import ToggleTheme from './ToggleTheme';

function Sidebar({ showSidebar, setShowSidebar }) {
  const handleCloseModalSidebar = (e) => {
    if (e.target.ariaLabel === 'sidebar-modal') {
      setShowSidebar(!showSidebar);
    }
  };

  return (
    <aside
      className={` ${showSidebar ? 'grid place-items-center bg-black/50 absolute' : 'hidden'} lg:bg-transparent lg:flex lg:fixed top-0 left-0 w-full lg:w-[20%] h-full`}
      aria-label="sidebar-modal"
      onClick={handleCloseModalSidebar}
    >
      <div className="bg-white dark:bg-slate-800 rounded-xl w-4/5 py-4 lg:w-full lg:h-full lg:rounded-none lg:flex lg:flex-col lg:justify-between lg:pt-20">
        <div className="lg:mt-5">
          <h2 className="uppercase text-gray-500 font-semibold ml-6 text-sm tracking-widest">
            All boards (3)
          </h2>

          <ListOfBoards />
        </div>

        <div className="w-full mt-4 lg:mt-0">
          <ToggleTheme />
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
