import React from "react";

export default function Home({ text }) {
  return (
    <section
      id="home"
      className="min-h-screen scroll-mt-24 flex flex-col md:flex-row items-center justify-center px-10 pt-32 gap-10"
    >
      {/* LEFT SIDE */}
      <div className="max-w-xl">
        <h1 className="text-5xl font-bold mb-4 leading-tight">
          Hi, I'm <span className="text-purple-500">Prerna</span>
        </h1>

        {/* Typewriter Text */}
        <h2 className="text-3xl text-gray-300 mb-4">
          {text} <span className="animate-pulse">|</span>
        </h2>

        <p className="text-gray-400 mb-6 text-lg">
          I build modern, responsive, and visually stunning websites that deliver great user experiences.
        </p>

        {/* BUTTONS */}
        <div className="flex gap-4">
          <a
            href="#projects"
            className="bg-purple-600 px-6 py-3 rounded-lg hover:bg-purple-700 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-purple-500 px-6 py-3 rounded-lg hover:bg-purple-600 transition"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div>
        <div className="rounded-full p-1 bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg shadow-purple-500/30">
          <img
            src="https://i.pravatar.cc/300"
            alt="profile"
            className="rounded-full w-72 h-72 object-cover"
          />
        </div>
      </div>
    </section>
  );
}