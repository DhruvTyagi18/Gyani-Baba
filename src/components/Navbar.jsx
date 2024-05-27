
import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from './Search';
import logo from './solitaire.png';

export const Navbar = ({ setDarkTheme, darkTheme }) => (
  <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200">
    <div className="flex justify-between items-center space-x-5 w-screen">
      <Link to="/">
        <p className="text-2xl bg-blue-500 font-bold text-white py-1 px-2 rounded dark:bg-gray-50 dark:text-gray-900 flex items-center">
          Gyani-Baba <img src={logo} alt="logo" className="ml-2 h-6 w-6" />
        </p>
      </Link>
      <div className="flex items-center space-x-3">
        <a
          href="https://dhruvtyagi18-portfolio.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white font-bold py-1 px-4 rounded hover:bg-blue-700 transition duration-300"
        >
          Contact Developer
        </a>
        <button
          type="button"
          onClick={() => setDarkTheme(!darkTheme)}
          className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg"
        >
          {darkTheme ? '💡 Light' : '🌙 Dark'}
        </button>
      </div>
    </div>
    <Search />
  </div>
);

export default Navbar;
