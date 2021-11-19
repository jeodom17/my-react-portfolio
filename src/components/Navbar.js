import React from 'react';

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <header className="sticky top-0 z-50">
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-4 navbar-expand-lg bg-green-500 mb-0">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
            <a
              className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading uppercase text-white hover:text-pink-700"
              href="#pablo"
            >
              Justin Odom
            </a>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
            >
              <span className="block relative w-6 h-px rounded-sm bg-white"></span>
              <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
              <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
            </button>
          </div>
          <div className="lg:flex flex-grow items-center">
            <ul className="flex flex-col lg:flex-row list-none ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2 font-bold text-xl md:text-xl lg:text-xl font-heading">
                    <button className="bg-yellow-300 hover:bg-pink-700 text-white font-bold py-2 px-8 rounded-full">
                      Portfolio
                    </button>
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2 font-bold text-xl md:text-xl lg:text-xl font-heading">
                    <button className="bg-yellow-300 hover:bg-pink-700 text-white font-bold text-xl md:text-xl lg:text-xl font-heading py-2 px-8 rounded-full">
                      Resume
                    </button>
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="google.com"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2 font-bold text-xl md:text-xl lg:text-xl font-heading">
                    <button className="bg-yellow-300 hover:bg-pink-700 text-white font-bold py-2 px-8 rounded-full">
                      Contact Me
                    </button>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
