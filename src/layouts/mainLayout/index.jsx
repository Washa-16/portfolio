import React, { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import {
  ABOUT_PATH,
  CONTACT_PATH,
  NOTEBOOK_PATH,
  PROJECT_PATH,
} from "../../components/constants";
import {
  githubIcon,
  linkedinIcon,
  sunIcon,
  white_githubIcon,
  white_linkedinIcon,
  white_sunIcon,
} from "../../components/constants/images/ImageConstants";
import {
  linkedIn_Link,
  github_Link,
} from "../../components/constants/socialMedia/socialMediaLinks";

const MainLayout = () => {
  const [darkMode, setDarkMode] = useState(true);

  const navClass = ({ isActive }) =>
    `hover:text-blue-500 ${isActive ? "text-blue-500 font-semibold" : ""}`;

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-white text-gray-900 dark:bg-black dark:text-white min-h-screen flex flex-col relative overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[120px] 
        bg-gradient-to-r from-purple-200 via-pink-200 to-orange-200 
        opacity-70 blur-3xl rounded-full pointer-events-none"
        ></div>

        <div className="max-w-7xl mx-auto px-6 flex-grow w-full">
          <header className="flex justify-between items-center py-6">
            <h1 className="text-xl font-bold">[e]</h1>
            <nav className="hidden md:flex gap-8 text-sm">
              <NavLink to={ABOUT_PATH} className={navClass}>
                About
              </NavLink>
              <NavLink to={PROJECT_PATH} className={navClass}>
                Work
              </NavLink>
              <NavLink to={NOTEBOOK_PATH} className={navClass}>
                Notebook
              </NavLink>
              <NavLink to={CONTACT_PATH} className={navClass}>
                Contact
              </NavLink>
              <NavLink to={"/"} className={navClass}>
                More
              </NavLink>
            </nav>
            <div className="hidden md:flex gap-8 text-sm">
              <img
                src={darkMode ? white_linkedinIcon : linkedinIcon}
                className="px-3 py-1 cursor-pointer"
                alt=""
                onClick={() => window.open(linkedIn_Link, "_blank")}
              />
              <img
                src={darkMode ? white_githubIcon : githubIcon}
                className="px-3 py-1 cursor-pointer"
                alt=""
                onClick={() => window.open(github_Link, "_blank")}
              />
              <img
                src={darkMode ? white_sunIcon : sunIcon}
                onClick={() => setDarkMode(!darkMode)}
                alt=""
                className="px-3 py-1 cursor-pointer"
              />
            </div>
          </header>
          <main className="flex-grow">
            <Outlet context={{ darkMode }} />
          </main>
        </div>
        <footer className="relative py-12 border-t border-gray-200 dark:border-neutral-800 overflow-hidden">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[220px] 
                        bg-gradient-to-r from-purple-200 via-pink-200 to-orange-200 
                        opacity-70 blur-3xl rounded-full pointer-events-none"
          ></div>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-10">
              <div>
                <h3 className="text-xl font-bold mb-2">[e]</h3>
                <p className="text-sm text-gray-500 mb-6">
                  Thanks for stopping by ⭐
                </p>
                <p className="text-sm text-gray-500">
                  © 2023 Eihab Khan. All Rights Reserved.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Links</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>About</li>
                  <li>Work</li>
                  <li>Tech Stack</li>
                  <li>Contact</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Elsewhere</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>Email</li>
                  <li>LinkedIn</li>
                  <li>GitHub</li>
                  <li>Twitter</li>
                  <li>Discord</li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default MainLayout;
