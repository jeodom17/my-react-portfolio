import React from 'react';

// components

export default function Project() {
  return (
    <div
      id="project"
      className="relative flex flex-col min-w-0 break-words bg-green-500 w-full mb-0 shadow-xl rounded-sm mt-0"
    >
      <div className="px-4">
        <div className="mt-2 py-1 text-center">
          <section className="max-w-8xl mx-auto px-2 sm:px-3 lg:px-6 py-6">
            <div className="text-center pb-12">
              <h1 className="font-bold text-6xl md:text-4xl lg:text-5xl font-heading text-gray-900">
                Check out some of my Projects below
              </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
              <div className="w-full bg-gray-400 rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center border-double border-8 border-blue-900 py-6">
                <div>
                  <h1 className="text-4xl font-bold text-blue-900">Reloc8</h1>
                  <img
                    className="mt-10 object-center object-cover h-auto w-full mt-6"
                    src={require('..//assets/img/reloc8.gif').default}
                    alt="Reloc8"
                  ></img>
                </div>
                <div className="text-center py-8 sm:py-6">
                  <p className="mt-10 text-xl text-white font-bold mb-2">
                    <button className="bg-blue-900 hover:bg-yellow-300 text-white font-bold py-2 px-8 rounded-full">
                      <a href="https://github.com/parkersatterfield/Project-1">
                        Checkout Reloc8 on GitHub
                      </a>
                    </button>
                  </p>
                </div>
              </div>
              <div className="w-full bg-gray-400 rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center border-double border-8 border-blue-900 py-6">
                <div>
                  <h1 className="text-4xl text-blue-900 font-bold">
                    Never Alone
                  </h1>
                  <img
                    className="mt-10 object-center object-cover h-auto w-full mt-6"
                    src={require('..//assets/img/NeverAlone.gif').default}
                    alt="NeverAlone"
                  ></img>
                </div>
                <div className="text-center py-8 sm:py-6">
                  <p className="text-xl text-gray-700 font-bold mb-2">
                    <button className="bg-blue-900 hover:bg-yellow-300 text-white font-bold py-2 px-8 rounded-full">
                      <a href="https://github.com/jeodom17/NeverAlone">
                        Checkout NeverAlone on GitHub
                      </a>
                    </button>
                  </p>
                </div>
              </div>
              <div className="w-full bg-gray-400 rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center border-double border-8 border-blue-900">
                <div>
                  <h1 className="text-4xl text-blue-900 font-bold">
                    Budget Tracker
                  </h1>
                  <img
                    className="mt-10 object-center object-cover h-auto w-full"
                    src={require('..//assets/img/BudgetTracker.gif').default}
                    alt="BudgetTracker"
                  ></img>
                </div>
                <div className="text-center py-8 sm:py-6">
                  <p className="text-xl text-gray-700 font-bold mb-2">
                    <button className="bg-blue-900 hover:bg-yellow-300 text-white font-bold py-2 px-8 rounded-full">
                      <a href="https://github.com/jeodom17/Budget-Tracker-X">
                        Checkout BudgetTracker on GitHub
                      </a>
                    </button>
                  </p>
                </div>
              </div>
              <div className="w-full bg-gray-400 rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center border-double border-8 border-blue-900">
                <div>
                  <h1 className="text-4xl text-blue-900 font-bold">
                    Day Planner
                  </h1>
                  <img
                    className="mt-10 object-center object-cover h-auto w-full"
                    src={
                      require('..//assets/img/project_screenshot.jpg').default
                    }
                    alt="Makko"
                  ></img>
                </div>
                <div className="text-center py-8 sm:py-6">
                  <p className="text-xl text-gray-700 font-bold mb-2">
                    <button className="bg-blue-900 hover:bg-yellow-300 text-white font-bold py-2 px-8 rounded-full">
                      <a href="https://github.com/jeodom17/work_day_schedule_hw5">
                        Checkout Day Planner on GitHub
                      </a>
                    </button>
                  </p>
                </div>
              </div>
              <div className="w-full bg-gray-400 rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center border-double border-8 border-blue-900">
                <div>
                  <h1 className="text-4xl text-blue-900 font-bold">
                    Fitness Tracker
                  </h1>
                  <img
                    className="mt-10 object-center object-cover h-auto w-full"
                    src={require('..//assets/img/FitnessTracker.gif').default}
                    alt="Fitness Tracker"
                  ></img>
                </div>
                <div className="text-center py-8 sm:py-6">
                  <p className="text-xl text-gray-700 font-bold mb-2">
                    <button className="bg-blue-900 hover:bg-yellow-300 text-white font-bold py-2 px-8 rounded-full">
                      <a href="https://github.com/jeodom17/fitness_Tracker-X">
                        Checkout Fitness Tracker on GitHub
                      </a>
                    </button>
                  </p>
                </div>
              </div>
              <div className="w-full bg-gray-400 rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center border-double border-8 border-blue-900">
                <div>
                  <h1 className="mb-10 text-4xl text-blue-900 font-bold">
                    Project 3
                  </h1>
                  <img
                    className="mt-10 object-center object-cover h-auto w-full"
                    src={require('..//assets/img/coming-soon.gif').default}
                    alt="Makko"
                  ></img>
                </div>
                <div className="mt-10 text-center py-8 sm:py-6">
                  <p className="text-xl text-gray-700 font-bold mb-2">
                    PROJECT IN THE WORKS
                  </p>
                  <p className="mt-10 text-base text-gray-400 font-normal">
                    MERN STACK
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
