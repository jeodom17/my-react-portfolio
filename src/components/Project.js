import React from "react";

// components

export default function Project() {
  return (
    <div className="relative flex flex-col min-w-0 break-words bg-blue-500 w-full mb-4 shadow-xl rounded-sm mt-2">
      <div className="px-4">
        <div className="mt-2 py-1 text-center">
          <section class="max-w-8xl mx-auto px-2 sm:px-3 lg:px-6 py-6">
            <div class="text-center pb-12">
              <h2 class="text-base font-bold text-indigo-600">
              </h2>
              <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
                Check out some of my Projects
              </h1>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
              <div class="w-full bg-gray-500 rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center border-double border-8 border-blue-900 py-6">
                <div>
                  <h1>Reloc8</h1>
                  <img
                    class="object-center object-cover h-auto w-full mt-6"
                    src={require("..//assets/img/reloc8.gif").default}
                    alt="Reloc8"
                  ></img>
                </div>
                <div class="text-center py-8 sm:py-6">
                  <p class="text-xl text-gray-700 font-bold mb-2">Reloc8</p>
                  <p class="text-base text-gray-400 font-normal">
                    Software Engineer
                  </p>
                </div>
              </div>
              <div class="w-full bg-emerald-500 rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center border-double border-8 border-blue-900 py-6">
                <div>
                <h1>Never Alone</h1>
                  <img
                    class="object-center object-cover h-auto w-full mt-6"
                    src={require("..//assets/img/NeverAlone.gif").default}
                    alt="NeverAlone"
                  ></img>
                </div>
                <div class="text-center py-8 sm:py-6">
                  <p class="text-xl text-gray-700 font-bold mb-2">
                    Lucy Carter
                  </p>
                  <p class="text-base text-gray-400 font-normal">
                    Graphic Designer
                  </p>
                </div>
              </div>
              <div class="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center border-double border-8 border-blue-900">
                <div>
                <h1>Budget Tracker</h1>
                  <img
                    class="object-center object-cover h-auto w-full"
                    src={require("..//assets/img/BudgetTracker.gif").default}
                    alt="BudgetTracker"
                  ></img>
                </div>
                <div class="text-center py-8 sm:py-6">
                  <p class="text-xl text-gray-700 font-bold mb-2">
                    Jade Bradley
                  </p>
                  <p class="text-base text-gray-400 font-normal">Dev Ops</p>
                </div>
              </div>
              <div class="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center border-double border-8 border-blue-900">
                <div>
                <h1>Day Planner</h1>
                  <img
                    class="object-center object-cover h-auto w-full"
                    src={require("..//assets/img/makko.jpg").default}
                    alt="Makko"
                  ></img>
                </div>
                <div class="text-center py-8 sm:py-6">
                  <p class="text-xl text-gray-700 font-bold mb-2">
                    Dany Bailey
                  </p>
                  <p class="text-base text-gray-400 font-normal">
                    Software Engineer
                  </p>
                </div>
              </div>
              <div class="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center border-double border-8 border-blue-900">
                <div>
                <h1>Fitness Tracker</h1>
                  <img
                    class="object-center object-cover h-auto w-full"
                    src={require("..//assets/img/FitnessTracker.gif").default}
                    alt="Fitness Tracker"
                  ></img>
                </div>
                <div class="text-center py-8 sm:py-6">
                  <p class="text-xl text-gray-700 font-bold mb-2">
                    Lucy Carter
                  </p>
                  <p class="text-base text-gray-400 font-normal">
                    Graphic Designer
                  </p>
                </div>
              </div>
              <div class="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center border-double border-8 border-blue-900">
                <div>
                  Project 3
                  <img
                    class="object-center object-cover h-auto w-full"
                    src={require("..//assets/img/coming-soon.gif").default}
                    alt="Makko"
                  ></img>
                </div>
                <div class="text-center py-8 sm:py-6">
                  <p class="text-xl text-gray-700 font-bold mb-2">
                    PROJECT IN THE WORKS
                  </p>
                  <p class="text-base text-gray-400 font-normal">MERN STACK</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
