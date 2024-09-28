import React from "react";
import { Link } from "react-router-dom";
import dreamdraftLogo from "../assets/dreamdraft_logo.png";
import hero_image from "../assets/hero_image-1.png";
import AboutSectoion from "../components/AboutSectoion";
import ContactSection from "../components/ContactSection";
import Products from "../components/Products";

export default function LandingPage() {
  return (
    <div>
      <nav className="flex items-center w-full justify-between bg-transparent drop-shadow-md fixed top-0 z-10">
        <div className="max-w-[100px] ml-20">
          <img src={dreamdraftLogo} alt="dreamdraft Logo" />
        </div>
        <div className="flex gap-5">
          <ul className="flex gap-3">
            <li className="text-gray-800 font-semibold cursor-pointer hover:text-gray-600 hover:scale-105">
              <a href="#aboutsection">About</a>
            </li>
            <li className="text-gray-800 font-semibold cursor-pointer hover:text-gray-600 hover:scale-105">
              <a href="#products">Product</a>
            </li>
            <li className="text-gray-800 font-semibold cursor-pointer hover:text-gray-600 hover:scale-105">
              <a href="">Documents</a>
            </li>
            <li className="text-gray-800 font-semibold cursor-pointer hover:text-gray-600 hover:scale-105">
              <a href="#contactsection">contact</a>
            </li>
            <li className="text-gray-800 font-semibold cursor-pointer hover:text-gray-600 hover:scale-105">
              <a href="">Pricing</a>
            </li>
          </ul>
          <div className="py-1 px-3 bg-blue-700 text-white rounded-md mr-20 ml-3 font-semibold hover:bg-blue-800">
            <Link to="/login">Login</Link>
          </div>
        </div>
      </nav>

      {/* Hero section */}

      <main className="hero flex min-h-[600px] items-center justify-center gap-2 my-20">
        <div className="basis-1/2 p-7">
          <h3 className="text-3xl font-bold text-cyan-400 drop-shadow-md font-serif">
            Dream<span className="text-orange-600 ">Draft</span>
          </h3>
          <p className="font-semibold py-2">Sketch Your Dreams into Reality</p>
          <p className="text-gray-700">
            &nbsp;&nbsp;Turn your vision into reality with{" "}
            <span className="font-bold">
              Dream<span>Draft</span>
            </span>
            . Whether you're designing your dream home, an office, or a
            commercial space, we provide the tools to help you craft
            personalized building plans. No matter the size or complexity of
            your project, with DreamDraft, you're in control.
          </p>
          <div className="inline-flex cursor-pointer items-center justify-center rounded-md border transition-colors duration-75 ease-out border-transparent bg-blue-700 text-white shadow-sm hover:bg-blue-900 focus-visible:bg-black active:bg-black disabled:cursor-default disabled:bg-gray-200 disabled:text-gray-500 aria-disabled:cursor-default aria-disabled:bg-gray-200 aria-disabled:text-gray-500 py-1 px-5 text-base font-semibold tracking-wide my-3">
            <Link to="#">Sign In</Link>
          </div>
        </div>

        <div className="basis-1/2 ml-5">
          <img src={hero_image} alt="" />
        </div>
      </main>
      <section >
        <AboutSectoion />
      </section>
      <section>
      <Products/>
      </section>

      <section className="pt-28">
        <ContactSection/>
      </section>

      <footer className="min-h-[400px]">
        <div>

        </div>
      </footer>

    </div>
  );
}
