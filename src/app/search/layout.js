'use client'
import Sidebar from "./_components/Sidebar";
import React, { useState } from "react";

export default function SearchLayout({ children }) {
  const [isMinimized, setIsMinimized] = useState(true);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`${
          isMinimized ? "w-16" : "w-60"
        } bg-gray-900 fixed top-0 left-0 bottom-0 transition-all duration-300`}
      >
        <Sidebar isMinimized={isMinimized} toggleSidebar={() => setIsMinimized(!isMinimized)} />
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 ml-${isMinimized ? "16" : "60"} transition-all duration-300`}
        style={{ marginLeft: isMinimized ? "4rem" : "15rem" }}
      >
        {children}
      </div>
    </div>
  );
}
