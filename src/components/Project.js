import React from "react";

// components

export default function Project() {
  return (
    
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-sm mt-16">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 flex justify-center">
              <div className="relative">
                <img id= 'makko'
                  alt="..."
                  src={require("..//assets/img/makko.jpg").default}
                  className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 l:-ml-16 max-w-150-px"
                />
              </div>
            </div>
            <div className="w-full px-4 text-center mt-20">
              <div className="flex justify-center py-4 lg:pt-4 pt-8">
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    22
                  </span>
                  <span className="text-sm text-blueGray-400">Friends</span>
                </div>
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    10
                  </span>
                  <span className="text-sm text-blueGray-400">Photos</span>
                </div>
                <div className="lg:mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    89
                  </span>
                  <span className="text-sm text-blueGray-400">Comments</span>
                </div>
              </div>
            </div>
          </div>
          <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="md:flex">
    <div class="lg:flex-shrink-0">
      <img class="h-60 w-full object-cover md:w-60" src={require("..//assets/img/makko.jpg").default} alt="Makko"></img>
    </div>
    <div class="p-12">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
      <a href="google.com" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
      <p class="mt-2 text-emerald-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
    </div>
  </div>
</div>
<div className="mt-10 py-10 border-t border-blueGray-200 text-center">
  <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">  
    <div class="text-center pb-12">
        <h2 class="text-base font-bold text-indigo-600">
            We have the best equipment in the market
        </h2>
        <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
            Check our awesome team members
        </h1>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
            <div>
                <img class="object-center object-cover h-auto w-full" src={require("..//assets/img/makko.jpg").default} alt="Makko"></img>
            </div>
            <div class="text-center py-8 sm:py-6">
                <p class="text-xl text-gray-700 font-bold mb-2">Dany Bailey</p>
                <p class="text-base text-gray-400 font-normal">Software Engineer</p>
            </div>
        </div>
        <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
            <div>
                <img class="object-center object-cover h-auto w-full" src={require("..//assets/img/makko.jpg").default} alt="Makko"></img>
            </div>
            <div class="text-center py-8 sm:py-6">
                <p class="text-xl text-gray-700 font-bold mb-2">Lucy Carter</p>
                <p class="text-base text-gray-400 font-normal">Graphic Designer</p>
            </div>
        </div>
        <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
            <div>
                <img class="object-center object-cover h-auto w-full" src={require("..//assets/img/makko.jpg").default} alt="Makko"></img>
            </div>
            <div class="text-center py-8 sm:py-6">
                <p class="text-xl text-gray-700 font-bold mb-2">Jade Bradley</p>
                <p class="text-base text-gray-400 font-normal">Dev Ops</p>
            </div>
        </div>
        <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
            <div>
                <img class="object-center object-cover h-auto w-full" src={require("..//assets/img/makko.jpg").default} alt="Makko"></img>
            </div>
            <div class="text-center py-8 sm:py-6">
                <p class="text-xl text-gray-700 font-bold mb-2">Dany Bailey</p>
                <p class="text-base text-gray-400 font-normal">Software Engineer</p>
            </div>
        </div>
        <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
            <div>
                <img class="object-center object-cover h-auto w-full" src={require("..//assets/img/makko.jpg").default} alt="Makko"></img>
            </div>
            <div class="text-center py-8 sm:py-6">
                <p class="text-xl text-gray-700 font-bold mb-2">Lucy Carter</p>
                <p class="text-base text-gray-400 font-normal">Graphic Designer</p>
            </div>
        </div>
        <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
            <div>
                <img class="object-center object-cover h-auto w-full" src={require("..//assets/img/makko.jpg").default} alt="Makko"></img>
            </div>
            <div class="text-center py-8 sm:py-6">
                <p class="text-xl text-gray-700 font-bold mb-2">Jade Bradley</p>
                <p class="text-base text-gray-400 font-normal">Dev Ops</p>
            </div>
        </div>
    </div>
</section>
</div>
</div>
</div>
  
  );
}