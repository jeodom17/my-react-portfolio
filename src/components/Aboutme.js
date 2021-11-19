import React from "react";

export default function Aboutme() {
  return (
    <div className="relative flex flex-col min-w-0 break-words bg-green-500 w-full mb-0 shadow-xl rounded-sm mt-0">
      <div className="px-4">
        <div class="mt-10 mb-10 max-w-md mx-auto bg-blue-800 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div class="md:flex">
            <div class="lg:flex-shrink-0">
              <img
                class="h-60 w-full object-cover md:w-60 px-5 py-5"
                src={require("..//assets/img/profilepic.png").default}
                alt="Profile Pic"
              ></img>
            </div>
            <div class="p-8">
              <div class="uppercase tracking-wide text-3xl text-white font-semibold">
                Justin Odom
              </div>
              <p class="block mt-5 text-xl leading-tight font-medium text-black hover:underline">
                Let's Build Something!
              </p>
              <p class="mt-2 text-lg font-bold text-white">
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