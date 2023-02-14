import ListOfBoards from './ListOfBoards';
import ToggleTheme from './ToggleTheme';

function Sidebar() {
  return (
    <aside className="bg-white dark:bg-slate-800 w-[20%] py-8 flex flex-col justify-between">
      <div>
        <h2 className="uppercase text-gray-500 font-semibold ml-5 text-sm tracking-widest">
          All boards (3)
        </h2>

        <ListOfBoards />
      </div>

      <div className="w-full">
        <ToggleTheme />
      </div>
    </aside>
  );
}

export default Sidebar;
