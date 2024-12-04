'use client'
import React, { useState } from "react";
import { FaHeart, FaHistory, FaHome, FaSave } from 'react-icons/fa'
import { IoSettings } from "react-icons/io5";
import { TiCloudStorage } from "react-icons/ti";
import { CgMenu, CgProfile } from "react-icons/cg";

const Sidebar = ({ isMinimized, toggleSidebar }) => {

    return (
      <div
        className={`h-full bg-gray-900 text-gray-400 flex flex-col ${
          isMinimized ? "w-16" : "w-60"
        } transition-all duration-300`}
      >

          {/* Logo */}
          <div
            className={`flex ${!isMinimized && "w-52"} items-center mx-auto justify-center mt-3 cursor-pointer`}
            onClick={toggleSidebar}
          >
            <div className={`flex gap-4 justify-start items-center ${!isMinimized && "w-full ml-7"}`}>
              {!isMinimized && <p className="font-bold">AllInOne</p>}
              <CgMenu size="1.75rem" />
            </div>
          </div>


          {/* Links */}
          <div className="mt-3 border-t border-gray-700 mx-auto">
            <a
              className={`flex items-center justify-center ${
                isMinimized ? 'w-12' : 'w-52'
                } h-12 mx-auto mt-2 rounded hover:bg-gray-700 hover:text-gray-300`}
              href="#"
            >
              <div className={`flex gap-4 justify-start items-center ${!isMinimized && 'w-full ml-7'} `}>
                <FaHome size="1.75rem" /> 
                {!isMinimized && <p className="font-semibold">Dashboard</p>}
              </div>
            </a>

            <a
              className={`flex items-center justify-center ${
                isMinimized ? 'w-12' : 'w-52'
                } h-12 mx-auto mt-2 rounded hover:bg-gray-700 hover:text-gray-300`}
              href="#"
            >
              <div className={`flex gap-4 justify-start items-center ${!isMinimized && 'w-full ml-7'} `}>
                <TiCloudStorage size="1.75rem" />
                {!isMinimized && <p className="font-semibold">Storage</p>}
              </div>
            </a>

            <a
              className={`flex items-center justify-center ${
                isMinimized ? 'w-12' : 'w-52'
                } h-12 mx-auto mt-2 rounded hover:bg-gray-700 hover:text-gray-300`}
              href="#"
            >
              <div className={`flex gap-4 justify-start items-center ${!isMinimized && 'w-full ml-7'} `}>
                <FaHistory size="1.5rem" />
                {!isMinimized && <p className="font-semibold">History</p>}
              </div>
            </a>

            <a
              className={`flex items-center justify-center ${
                isMinimized ? 'w-12' : 'w-52'
                } h-12 mx-auto mt-2 rounded hover:bg-gray-700 hover:text-gray-300`}
              href="#"
            >
              <div className={`flex gap-4 justify-start items-center ${!isMinimized && 'w-full ml-7'} `}>
                <IoSettings size="1.75rem" />
                {!isMinimized && <p className="font-semibold">Settings</p>}
              </div>
            </a>

            <a
              className={`flex items-center justify-center ${
                isMinimized ? 'w-12' : 'w-52'
                } h-12 mx-auto mt-2 rounded hover:bg-gray-700 hover:text-gray-300`}
              href="#"
            >
              <div className={`flex gap-4 justify-start items-center ${!isMinimized && 'w-full ml-7'} `}>
                <FaHeart size="1.75rem" />
                {!isMinimized && <p className="font-semibold">Favorites</p>}
              </div>
            </a>
            {/* Add more links/icons here */}
          </div>

          {/* Bottom */}
          <div className="border-t border-gray-700 mt-3 mx-auto">
            <a
              className={`flex items-center justify-center ${
                isMinimized ? 'w-12' : 'w-52'
                } h-12 mx-auto mt-2 rounded hover:bg-gray-700 hover:text-gray-300`}
              href="#"
            >
              <div className={`flex gap-4 justify-start items-center ${!isMinimized && 'w-full ml-7'} `}>
                <CgProfile size="1.75rem" /> 
                {!isMinimized && <p className="font-semibold">Account</p>}
              </div>
            </a>
          </div>
        </div>
      );
};

export default Sidebar;
