'use client'
import React, { useState } from "react";

const SearchBar = () => {
  const [platform, setPlatform] = useState("Google");
  const [query, setQuery] = useState("");
  const [searchHistory, setSearchHistory] = useState([]);

  const platforms = {
    Google: "https://www.google.com/search?q=",
    YouTube: "https://www.youtube.com/results?search_query=",
    Reddit: "https://www.reddit.com/search/?q=",
  };

  const handleSearch = (e) => {
    e.preventDefault();

    if (query.trim()) {
      const searchUrl = platforms[platform] + encodeURIComponent(query);
      setSearchHistory([...searchHistory, { platform, query }]);
      window.open(searchUrl, "_blank"); // Opens search in a new tab
      setQuery(""); // Clear search input
    }
  };

  return (
    <div className="bg-gray-50 py-10 px-4 text-center">
      <h2 className="text-2xl font-semibold mb-4">Search Across Platforms</h2>
      <form onSubmit={handleSearch} className="flex flex-col md:flex-row justify-center items-center gap-4">
        {/* Platform Selector */}
        <select
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
          className="px-4 py-2 border rounded-md"
        >
          {Object.keys(platforms).map((key) => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </select>

        {/* Search Input */}
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={`Search on ${platform}...`}
          className="px-4 py-2 border rounded-md w-full md:w-1/2"
        />

        {/* Search Button */}
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>

      {/* Search History */}
      {searchHistory.length > 0 && (
        <div className="mt-8 text-left mx-auto max-w-xl">
          <h3 className="text-lg font-semibold mb-4">Search History</h3>
          <ul className="list-disc list-inside text-gray-700">
            {searchHistory.map((item, index) => (
              <li key={index}>
                <span className="font-bold">{item.platform}</span>: {item.query}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
