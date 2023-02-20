import useAuthContext from '../hooks/useAuthContext';

function Logout() {
  const { currentUser, handleLogout } = useAuthContext();

  return (
    <div className="mb-4 flex lg:flex-col items-center justify-center gap-4 lg:gap-3">
      <h3 className="text-gray-500 font-semibold text-sm tracking-widest flex flex-col items-center gap-1">
        <span className="uppercase">Welcome: </span>
        <span>
          {currentUser.displayName
            ? currentUser.displayName
            : currentUser.email}
        </span>
      </h3>
      <button
        type="button"
        className="group"
        onClick={handleLogout}
      >
        <svg fill="#828FA3" width="20px" height="20px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" className="group-hover:fill-indigo-700">
          <path d="M116.832 543.664H671.28c17.696 0 32-14.336 32-32s-14.304-32-32-32H118.832l115.76-115.76c12.496-12.496 12.496-32.752 0-45.248s-32.752-12.496-45.248 0l-189.008 194 189.008 194c6.256 6.256 14.432 9.376 22.624 9.376s16.368-3.12 22.624-9.376c12.496-12.496 12.496-32.752 0-45.248zM959.664 0H415.663c-35.36 0-64 28.656-64 64v288h64.416V103.024c0-21.376 17.344-38.72 38.72-38.72h464.72c21.391 0 38.72 17.344 38.72 38.72l1.007 818.288c0 21.376-17.328 38.72-38.72 38.72H454.816c-21.376 0-38.72-17.344-38.72-38.72V670.944l-64.416.08V960c0 35.344 28.64 64 64 64h543.984c35.36 0 64.016-28.656 64.016-64V64c-.015-35.344-28.671-64-64.015-64z" />
        </svg>
      </button>
    </div>
  );
}

export default Logout;
