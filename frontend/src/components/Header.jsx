import { useState } from 'react';
import useThemeContext from '../hooks/useThemeContext';

function Header() {
  const { theme } = useThemeContext();
  const [active, setActive] = useState(false);

  return (
    <header className="bg-white dark:bg-slate-800 p-4 lg:py-4 lg:px-0">
      <div className="container mx-auto flex justify-between items-center gap-4 lg:gap-32">
        {theme === 'dark'
          ? (
            <picture>
              <source srcSet="/assets/logo-light.svg" media="(min-width: 1000px)" type="image/svg+xml" />
              <img src="/assets/logo-mobile.svg" alt="Kanban" />
            </picture>
          ) : (
            <picture>
              <source srcSet="/assets/logo-dark.svg" media="(min-width: 1000px)" type="image/svg+xml" />
              <img src="/assets/logo-mobile.svg" alt="Kanban" />
            </picture>
          )}

        <div className="flex items-center justify-between flex-1">
          <button
            type="button"
            className="text-2xl font-semibold text-white flex items-center gap-2 lg:pointer-events-none"
            onClick={() => setActive(!active)}
          >
            <span>
              Platform Launch
            </span>

            {active
              ? (
                <img src="/assets/icon-chevron-up.svg" alt="Arrow up" className="lg:hidden" />
              ) : (

                <img src="/assets/icon-chevron-down.svg" alt="Arrow down" className="lg:hidden" />
              )}
          </button>
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="bg-violet-800 rounded-full text-white font-semibold px-4 py-2 flex items-center gap-2 text-xl lg:text-lg"
            >
              <span>
                <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#FFF" d="M7.368 12V7.344H12V4.632H7.368V0H4.656v4.632H0v2.712h4.656V12z" />
                </svg>
              </span>
              <span className="hidden lg:block">Add New Task</span>
            </button>
            <button type="button" className="p-1">
              <img src="/assets/icon-vertical-ellipsis.svg" alt="Menu board" className="w-1" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;