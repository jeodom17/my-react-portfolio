import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-emerald-500 pt-8 pb-6">
        <div className="container mx-auto px-4">
        <h1 class="font-bold text-center text-6xl md:text-4xl lg:text-5xl font-heading text-gray-900">
                Contact Me Below 
        </h1>
          <div className="mt-10 flex flex-row gap-x-20 text-center lg:text-left">
            <div className="col-span-2 w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold">Let's keep in touch!</h4>
              <h5 className="text-lg mt-0 mb-2 text-black-600">
                Find me on any of these platforms.
              </h5>
              <div class="section-content">
              <ul>
                <li>
              <button class="mt-10 bg-yellow-300 text-blue-900 text-2xl font-bold py-2 px-8 rounded-full">
                <a href="tel:9015249672">Phone: 901.524.9672</a>
              </button>
              </li>
              <li>
              <button class="mt-10 bg-yellow-300 text-blue-900 text-2xl font-bold py-2 px-8 rounded-full">
                <a href="mailto:jeodom17@gmail.com">Email: jeodom17@gmail.com</a>
              </button>
              </li>
              <li>
              <button class="mt-10 bg-yellow-300 text-blue-900 text-2xl font-bold py-2 px-8 rounded-full">
                <a href="https://github.com/jeodom17">GitHub</a>
              </button>
              </li>
              <li>
              <button class="mt-10 bg-yellow-300 text-blue-900 text-2xl font-bold py-2 px-8 rounded-full"> 
                <a href="https://www.linkedin.com/in/justinodom17">LinkedIn</a>
              </button>
              </li>
              </ul>
            </div>
            </div>
          
            <div className="col-span-2">
              <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white">
                <div class="flex-auto p-5 lg:p-10">
                  <h4 class="text-2xl mb-4 text-black font-semibold">
                    Send Me a Message (coming soon)
                  </h4>
                  <form id="feedbackForm" action="" method="">
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        for="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        class="border-0 px-3 py-3 rounded text-sm shadow w-full
                    bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400"
                        placeholder=" "
                      />
                    </div>
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        for="message"
                      >
                        Message
                      </label>
                      <textarea
                        maxlength="300"
                        name="feedback"
                        id="feedback"
                        rows="4"
                        cols="80"
                        class="border-0 px-3 py-3 bg-gray-300 placeholder-black text-gray-800 rounded text-sm shadow focus:outline-none w-full"
                        placeholder=""
                        required
                      ></textarea>
                    </div>
                    <div class="text-center mt-6">
                      <button
                        id="feedbackBtn"
                        class="bg-yellow-300 text-black text-center mx-auto active:bg-yellow-400 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
         </div>   
        </div>
      </footer>
    </>
  );
}
