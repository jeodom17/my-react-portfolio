import React from 'react';

export default function Aboutme() {
  return (
    <div
      id="top"
      className="relative flex flex-col min-w-0 break-words bg-green-500 w-full mb-0 shadow-xl rounded-sm mt-0"
    >
      <div className="px-4">
        <div className="mt-10 mb-10 max-w-md mx-auto bg-blue-800 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="lg:flex-shrink-0">
              <img
                className="h-60 w-full object-cover md:w-60 px-5 py-5"
                src={require('..//assets/img/profilepic.png').default}
                alt="Profile Pic"
              ></img>
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-3xl text-white font-semibold">
                Justin Odom
              </div>
              <p className="block mt-5 text-xl leading-tight font-medium text-black hover:underline">
                Let&apos;s Build Something!
              </p>
              <p className="mt-2 text-lg font-bold text-white">
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
