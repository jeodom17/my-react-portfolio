import React from "react";

export default function Aboutme() {
  return (
    <div className="relative flex flex-col min-w-0 break-words bg-yellow-300 w-full mb-4 shadow-xl rounded-sm mt-6">
      <div className="px-4">
        <div class="max-w-md mx-auto bg-red-600 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div class="md:flex">
            <div class="lg:flex-shrink-0">
              <img
                class="h-60 w-full object-cover md:w-60 px-5 py-5"
                src={require("..//assets/img/profilepic.png").default}
                alt="Profile Pic"
              ></img>
            </div>
            <div class="p-12">
              <div class="uppercase tracking-wide text-lg text-indigo-500 font-semibold">
                Justin Odom
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
      </div>
    </div>
  );
}
