import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSearch,
  selectAllSearch,
} from "../../redux/features/search/SearchSlide";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../components/navbar/Navbar.css";
export default function Search() {
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log("key", e.key);
      navigate("/searchs"); // Navigate to /searchs page
    }
  };
  // Assuming filteredResults is an object, not an array
  const filteredResults = useSelector(selectAllSearch);

  useEffect(() => {
    if (searchInput) {
      dispatch(fetchSearch(searchInput));
    }
  }, [searchInput, dispatch]);

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <>
      <div className="relative hidden style-navbar lg:block lg:w-[210px] xl:w-[300px] ml-5">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span className="sr-only">Search icon</span>
        </div>
        <input
          type="text"
          id="search-navbar"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-xl bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          placeholder="ការស្វែងរក..."
          onChange={handleInputChange}
          value={searchInput}
          onKeyDown={handleKeyDown}
        />

        {/* Check if filteredResults.exercises exists and has items */}
        {searchInput && filteredResults.exercises?.length > 0 && (
          <div className="absolute mt-2 w-full rounded-md shadow-lg bg-white dark:bg-gray-700 z-10">
            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200 h-[300px] overflow-y-auto z-50">
              {filteredResults.exercises.map((element) => (
                <li
                  key={element.ex_uuid}
                  className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer"
                >
                  <Link to="/searchs">{element.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Show "No results found" if searchInput is not empty and exercises array is empty */}
        {searchInput &&
          (!filteredResults.exercises ||
            filteredResults.exercises.length === 0) && (
            <div className="absolute mt-2 w-full rounded-md shadow-lg bg-white dark:bg-gray-700 z-10">
              <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                <li className="p-2 text-gray-500 dark:text-gray-400">
                  No results found
                </li>
              </ul>
            </div>
          )}
      </div>
    </>
  );
}
