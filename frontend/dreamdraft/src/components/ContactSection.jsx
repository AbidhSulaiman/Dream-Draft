import React from "react";
import contactbackgound from "../assets/contact-bg.jpg";

export default function ContactSection() {
  return (
    <section className=" px-10">
      <div>
        <div id="contactsection" className="pt-28"></div>
      </div>
      <div
        className="flex items-center font-serif px-3 h-[600px] bg-cover bg-center rounded-xl"
        style={{ backgroundImage: `url(${contactbackgound})` }}
      >
        <div className="basis-2/3 max-w-[400px] min-h-[400px] bg-slate-300/30 px-5 py-5 items-center justify-center rounded-xl mx-10 shadow-md shadow-gray-700">
          <div className="flex flex-col gap-5">
            <h3 className="text-white font-semibold text-xl text-center shadow-lg">Contact us</h3>
            <div>
              <label htmlFor="" className="text-white text-l font-semibold">Name: </label>
              <input className="min-w-[250px] px-2 py-1 ml-3 mt-3 rounded-lg focus:outline-none bg-slate-200/30 shadow-md shadow-white/30 text-xl" type="text" />
            </div>
            <div>
              <label htmlFor="" className="text-white text-l font-semibold">Email: </label>
              <input className="min-w-[250px] px-2 py-1 ml-3 mt-3 rounded-lg focus:outline-none bg-slate-200/30 shadow-md shadow-white/30 text-xl" type="text" />
            </div>
            <div>
              <label htmlFor="" className="text-white text-l font-semibold">Phone: </label>
              <input className="min-w-[250px] px-2 py-1 ml-3  mt-3 rounded-lg focus:outline-none bg-slate-200/30 shadow-md shadow-white/30 text-xl" type="text" />
            </div>
            <div className="w-full text-center ">
            <a className="bg-blue-700 rounded-lg items-center text-center px-4 py-2 text-l font-semibold text-white drop-shadow-lg
              hover:bg-blue-900 " href="">
              Submit
            </a>
          </div>
          </div>
          
        </div>

        <div className="basis-1/3"></div>
      </div>
    </section>
  );
}
