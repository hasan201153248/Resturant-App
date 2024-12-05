import { useState } from "react";

const NavBar = () => {
  const [menuOptions] = useState([
    { id: 1, label: "Item 101" },
    {
      id: 2,
      label: "Parent",
      submenu: [
        { id: "2-1", label: "Submenu 1" },
        { id: "2-2", label: "Submenu 2" },
      ],
    },
    { id: 3, label: "Item 3" },
  ]);

  // Component to render menu options
  const NavOptions = ({ options }) => (
    <>
      {options.map((option) => (
        <li key={option.id} className="relative group">
          <a
            href="#"
            className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded"
          >
            {option.label}
          </a>
          {option.submenu && (
            <ul className="absolute left-0 mt-2 hidden group-hover:block bg-gray-800 text-white rounded shadow-lg">
              {option.submenu.map((submenu) => (
                <li key={submenu.id}>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-700 rounded"
                  >
                    {submenu.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </>
  );

  return (
    <div className="navbar fixed z-10 bg-opacity-90 max-w-screen-xl bg-gray-900 text-white">
      {/* Navbar start section */}
      <div className="navbar-start">
        {/* Mobile menu (dropdown) */}
        <div className="dropdown">
          <button
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-gray-800 text-white rounded mt-3 w-52 p-2 shadow"
          >
            <NavOptions options={menuOptions} />
          </ul>
        </div>
        {/* Logo */}
        <a href="#" className="btn btn-ghost text-xl">
          Restaurant Application
        </a>
      </div>

      {/* Navbar center section for larger screens */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">
          <NavOptions options={menuOptions} />
        </ul>
      </div>

      {/* Navbar end section */}
      <div className="navbar-end">
        <a href="#button" className="btn">
          Button
        </a>
      </div>
    </div>
  );
};

export default NavBar;
