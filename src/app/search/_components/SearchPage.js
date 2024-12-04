'use client';
import React, { useState } from "react";

const SearchPage = () => {
  const [platform, setPlatform] = useState("Google");
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const platforms = {
    Google: "Google",
    YouTube: "https://www.youtube.com/results?search_query=",
    Reddit: "https://www.reddit.com/search/?q=",
  };

  const API_KEY = "AIzaSyCxGxSmshP0SQzO7BYLfd8Yq6s4fStZsts";
  const SEARCH_ENGINE_ID = "7700a593a880f494d";

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!query.trim()) return;

    setSearchHistory([...searchHistory, { platform, query }]);

    if (platform === "Google") {
      setIsLoading(true);

      const url = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${SEARCH_ENGINE_ID}&q=${encodeURIComponent(
        query
      )}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        setSearchResults(data.items || []); // Set results or empty array if no results
      } catch (error) {
        console.error("Error fetching Google search results:", error);
        setSearchResults([]);
      } finally {
        setIsLoading(false);
      }
    } else {
      const searchUrl = platforms[platform] + encodeURIComponent(query);
      window.open(searchUrl, "_blank");
    }

    setQuery("");
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 via-gray-100 to-blue-50 min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-8">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Search Across Platforms
        </h2>

        {/* Search Form */}
        <form
          onSubmit={handleSearch}
          className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6"
        >
          {/* Platform Selector */}
          <select
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
            className="px-4 py-2 border rounded-lg shadow-sm bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
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
            className="px-4 py-2 border rounded-lg shadow-sm w-full md:w-1/2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />

          {/* Search Button */}
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition"
          >
            Search
          </button>
        </form>

        {/* Loading Indicator */}
        {isLoading && (
          <p className="text-center text-blue-500 font-medium">Loading...</p>
        )}

        {/* Search Results */}
        {searchResults.length > 0 && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Search Results
            </h3>
            <ul className="space-y-4">
              {searchResults.map((result, index) => (
                <li
                  key={index}
                  className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition"
                >
                  <a
                    href={result.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 font-medium hover:underline"
                  >
                    {result.title}
                  </a>
                  <p className="text-gray-600">{result.snippet}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Search History */}
        {searchHistory.length > 0 && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Search History
            </h3>
            <ul className="space-y-3">
              {searchHistory.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between bg-gray-100 p-3 rounded-lg shadow-sm hover:shadow-md transition"
                >
                  <span className="font-medium text-gray-700">
                    <span className="text-blue-500">{item.platform}</span>:{" "}
                    {item.query}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
