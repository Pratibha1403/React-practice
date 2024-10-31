import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-3">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://www.logoai.com/uploads/output/2024/10/16/48818a19dc68731d27f135b95630c8d2.jpg"
              alt="Logo"
              className="mr-2 h-20"
            />
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              to="#"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-3 mr-2 focus:outline-none focus:ring-gray-300"
            >
              Log In
            </Link>
            <Link
              to="#"
              className="text-white bg-orange-700 hover:bg-orange-900 focus:ring-4 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-3 mr-2 focus:outline-none focus:ring-orange-300"
            >
              Get Started
            </Link>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col lg:flex-row lg:space-x-8 lg:mt-0 mt-4 font-medium">
              <li>
                <NavLink
                to='/'
                  className={({isActive, isPending}) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${isActive ? 'text-orange-700' : 'text-gray-700'} lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                to='/about'
                  className={({isActive, isPending}) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${isActive ? 'text-orange-700' : 'text-gray-700'} lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
              {/* <li>
                <NavLink
                to='/contact'
                  className={({isActive, isPending}) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${isActive ? 'text-orange-700' : 'text-gray-700'} lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink
                    to='/Github'
                  className={({isActive, isPending}) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${isActive ? 'text-orange-700' : 'text-gray-700'} lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Github
                </NavLink>
              </li> */}
            </ul>
          </div>
        </div>
        <h1>header</h1>
      </nav>
    </header>
  );
}

export default Header;
