import React from "react";
import DotCursor from "./cursor"; // adjust path if needed

const Contact = () => {
  return (
    <div id="contact" className="relative my-12 overflow-hidden">
      <DotCursor /> {/* Dot cursor is only active here */}

      <div className="rounded-4xl py-12 w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 bg-gray-100 p-6">
        
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Contact Me</h2>
          <div className="flex flex-col gap-1">
            <a
              href="mailto:armhafrath@gmail.com"
              className="text-base text-gray-800 hover:text-indigo-600 transition-colors duration-300"
            >
              armhafrath@gmail.com
            </a>
            <a
              href="tel:+94704553604"
              className="text-base text-gray-800 hover:text-indigo-600 transition-colors duration-300"
            >
              Book a Call
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Useful Links</h2>
          <div className="flex flex-col gap-1">
            <a
              href="#home"
              className="text-base text-gray-800 hover:text-indigo-600 transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-base text-gray-800 hover:text-indigo-600 transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#stack"
              className="text-base text-gray-800 hover:text-indigo-600 transition-colors duration-300"
            >
              Stacks
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Social</h2>
          <div className="flex flex-col gap-1">
            <a
              href="https://www.linkedin.com/in/
mohammadh-hafrath"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-gray-800 hover:text-indigo-600 transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/arm.hafrath?gsh=NmloZjB2azh5dXR0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-gray-800 hover:text-indigo-600 transition-colors duration-300"
            >
              Instagram
            </a>
            <a
              href="https://x.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-gray-800 hover:text-indigo-600 transition-colors duration-300"
            >
              X
            </a>
          </div>
        </div>

        {/* Footer / Credits */}
        <div className="flex flex-col justify-end">
          <div className="flex flex-col gap-2 mb-8">
            <span className="text-sm text-gray-500">© 2026</span>
            <span className="text-sm text-indigo-600 font-semibold">
              Made by Hafrath
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
