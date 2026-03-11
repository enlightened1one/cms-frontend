import React from "react";
import Link from "next/link";

const Page = () => {
  return (
    <div className="bg-teal-700 px-6 py-5 flex items-center justify-between">
      <p className="text-3xl font-medium text-white">🚀 Acme Rockets</p>
      <nav className="hidden sm:block">
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              Products
            </a>
          </li>
          <li>
            <Link href={"/register"} className="text-white hover:text-lime-500">
              Login
            </Link>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <button className="text-3xl  focus:outline-none text-white">
        &#9776;
      </button>
    </div>
  );
};

export default Page;
