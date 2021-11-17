import React from "react";

// components

export default function Project() {
  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-sm mt-16">
      <div className="px-6">
        <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div class="md:flex">
            <div class="lg:flex-shrink-0">
              <img
                class="h-60 w-full object-cover md:w-60"
                src={require("..//assets/img/profilepic.png").default}
                alt="Profile Pic"
              ></img>
            </div>
            <div class="p-12">
              <div class="uppercase tracking-wide text-lg text-indigo-500 font-semibold">
                Justin E. Odom
              </div>
              <p class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                Let's Build Something!
              </p>
              <p class="mt-2 text-emerald-500">
                I am a Junior full stack web developer seeking a position in web
                development. Experienced business Project Manager / Executive
                with 14 years of experience working with customers and employees
                to provide services in the industrial and commercial markets.
                Experience includes working with customers, managing projects
                and employees and workforce development.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
          <section class="max-w-6xl mx-auto px-2 sm:px-3 lg:px-6 py-12">
            <div class="text-center pb-12">
              <h2 class="text-base font-bold text-indigo-600">
                We have the best equipment in the market
              </h2>
              <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
                Check out some of my Projects
              </h1>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
                <div>
                  <h1>Reloc8</h1>
                  <img
                    class="object-center object-cover h-auto w-full"
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
              <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
                <div>
                <h1>Never Alone</h1>
                  <img
                    class="object-center object-cover h-auto w-full"
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
              <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
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
              <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
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
              <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
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
              <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
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
