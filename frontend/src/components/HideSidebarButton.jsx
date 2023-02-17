function HideSidebarButton({ hideSidebar, setHideSidebar }) {
  const handleHideSidebar = () => {
    if (hideSidebar) {
      setHideSidebar(false);
      localStorage.removeItem('hideSidebar');
    } else {
      setHideSidebar(true);
      localStorage.setItem('hideSidebar', 'true');
    }
  };

  return (
    <button
      type="button"
      className={`${hideSidebar ? 'hidden lg:flex lg:absolute lg:w-[5vw] lg:bottom-0 lg:left-0 lg:h-16 dark:lg:bg-slate-800 dark:lg:hover:bg-indigo-400 lg:bg-indigo-700 lg:hover:bg-indigo-400' : 'hidden lg:flex lg:w-[19vw]'} items-center gap-4 pl-6 py-4 mb-4 font-semibold rounded-r-full text-gray-500 lg:hover:text-indigo-700 lg:hover:bg-gray-100 transition-all duration-200 ease-in-out`}
      onClick={handleHideSidebar}
    >
      {
        hideSidebar
          ? (<img src="/assets/icon-show-sidebar.svg" alt="Show sidebar" />)
          : (<img src="/assets/icon-hide-sidebar.svg" alt="Hide sidebar" />)
      }

      <span className={`${hideSidebar && 'hidden'}`}>
        Hide Sidebar
      </span>
    </button>
  );
}

export default HideSidebarButton;
