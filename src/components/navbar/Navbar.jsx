import React, { useState, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";
import {
  DropdownMenu,
  DropDownMenuHover,
  DropDownUserMenu,
} from "./DropdownMenu";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { getAccessToken } from "../../lib/secureLocalStorage";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/features/user/userSlice";
import {
  fetchUserData,
  selectUserProfile,
  selectUsers,
} from "../../redux/verify/verifyUserSlice";
import { BsGearFill } from "react-icons/bs";
import { FaUserEdit } from "react-icons/fa";
import { FaPowerOff } from "react-icons/fa";
import axios from "axios";
import Search from "../../pages/search/Seach";
import { selectAllSearch } from "../../redux/features/search/SearchSlide";
import { fetchSearch } from "../../redux/features/search/SearchSlide";
import "./Navbar.css";
export default function Navbar() {
  const [searchInput, setSearchInput] = useState("");
  const navigates = useNavigate();
  const dispatchs = useDispatch();
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log("key", e.key);
      navigates("/searchs"); // Navigate to /searchs page
    }
  };
  // Assuming filteredResults is an object, not an array
  const filteredResults = useSelector(selectAllSearch);

  useEffect(() => {
    if (searchInput) {
      dispatchs(fetchSearch(searchInput));
    }
  }, [searchInput, dispatchs]);

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };
  const location = useLocation();
  const navigate = useNavigate(); // Get the navigation function
  const [clickCount, setClickCount] = useState(0);
  const dispatch = useDispatch();
  const token = getAccessToken();
  useEffect(() => {
    console.log("token before dispatching the fetchUserData:", token);
    if (token) {
      dispatch(fetchUserData(token));
    }
  }, [dispatch, token]);

  const user = useSelector(selectUsers);
  const userProfile = useSelector(selectUserProfile);
  console.log("user in navbar:", user);
  console.log("profile in navbar:", userProfile);

  const handleClick = () => {
    setClickCount(clickCount + 1); // Increment click count on any click
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setClickCount(0); // Reset click count after timeout
    }, 500); // Set timeout window (adjust as needed)

    return () => clearTimeout(timeoutId); // Clear timeout on component unmount
  }, [clickCount]); // Run useEffect only when clickCount changes

  const handleDoubleClick = () => {
    if (clickCount === 2) {
      navigate("/skills"); // Navigate to the desired page on double click
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const toggleDropdown1 = () => {
    setIsOpen1(!isOpen1);
  };
  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };
  const toggleDropdown3 = () => {
    setIsOpen3(!isOpen3);
  };
  const skillList = [
    { data: "ការស្ដាប់", nav: "/skills/listening" },
    { data: "ការអាន", nav: "/skills/reading" },
    { data: "ការសរសេរ", nav: "/skills/writing" },
    { data: "ការនិយាយ", nav: "/skills/speaking" },
  ];
  const grammmarLevelList = [
    { data: "កម្រិត A1-A2", nav: "/grammar/a1-a2-grammar" },
    { data: "កម្រិត B1-B2", nav: "/grammar/b1-b2-grammar" },
    { data: "កម្រិត C1", nav: "/grammar/c1-grammar" },
  ];
  const vocabularyLevelList = [
    { data: "កម្រិត A1-A2", nav: "/vocabulary/a1-a2-vocabulary" },
    { data: "កម្រិត B1-B2", nav: "/vocabulary/b1-b2-vocabulary" },
  ];
  const userContentList = [
    { data: "ការកំណត់", nav: "/dashboard", icon: <BsGearFill /> },
  ];

  return (
    <>
      <nav className="top-0 z-50 w-full bg-white">
        <div className=" flex flex-wrap items-center justify-between mx-auto lg:px-10 md:px-10 md:py-5 p-[20px]">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="http://136.228.158.126:50005/files/077018c8-ccc4-4a1a-bb45-30deafd41b8e.png"
              className="w-[100px] object-cover"
              alt="English club"
            />
          </a>
          <div className="flex lg:order-2 items-center">
            <button
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center mt-1 p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg style-navbar2 lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <Search />
            {/* User Menu Design*/}
            <div className="flex ms-3 items-center">
              <div>
                {!getAccessToken() ? (
                  <a
                    href="/login"
                    className="flex justify-center items-center text-white bg-blue-800 hover:bg-second rounded-lg text-[12px] md:text-[15px] px-4 py-2 me-2"
                  >
                    ចូលគណនី
                  </a>
                ) : (
                  <section>
                    <button
                      type="button"
                      className="flex text-smrounded-full "
                      aria-expanded="false"
                      data-dropdown-toggle="dropdown-user"
                    >
                      <span className="sr-only">Open user menu</span>
                      <div
                        className="ms-2"
                        data-dropdown-toggle="dropdown-user"
                        data-dropdown-placement="bottom-start"
                      >
                        <div
                          tabIndex="-1"
                          className="flex relative justify-center items-center box-border overflow-hidden align-middle z-0 outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 w-8 h-8 text-tiny bg-primary text-primary-foreground rounded-full ring-2 ring-offset-2 ring-offset-background dark:ring-offset-background-dark ring-primary transition-transform cursor-pointer"
                        >
                          {userProfile ? (
                            <img
                              src={userProfile}
                              className="flex object-cover w-full h-full transition-opacity !duration-500 opacity-0 data-[loaded=true]:opacity-100"
                              alt="Jason Hughes"
                              data-loaded="true"
                            />
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </button>
                  </section>
                )}
              </div>
              <div
                class={`z-50 hidden my-4 text-base list-none bg-white ${
                  getAccessToken() ? "divide-y divide-gray-100" : ""
                } rounded shadow`}
                id="dropdown-user"
              >
                <ul className="py-1" role="none">
                  {userContentList.map((content, index) => {
                    return (
                      <>
                        <DropDownUserMenu
                          key={index}
                          data={content.data}
                          nav={content.nav}
                          icon={content.icon}
                        />
                      </>
                    );
                  })}
                </ul>
                <div>
                  {getAccessToken() ? (
                    <div
                      className="block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:rounded-b-[4px] hover:text-primary hover:bg-gray-100"
                      role="menuitem"
                      data-modal-target="popup-modal"
                      data-modal-toggle="popup-modal"
                    >
                      <span className="flex flex-row gap-2 justify-start items-center">
                        <span className="text-lg">
                          <FaPowerOff />{" "}
                        </span>
                        <span>ការចាកចេញ</span>
                      </span>
                    </div>
                  ) : (
                    <div className="divide-y divide-gray-10">
                      <a
                        href={"/login"}
                        className="block px-4 py-2 text-sm text-gray-700 hover:rounded-b-[4px] hover:text-primary hover:bg-gray-100"
                        role="menuitem"
                      >
                        ចូលគណនី
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div
            className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1 style-navbar"
            id="navbar-search"
          >
            <div className="relative mt-3 lg:hidden ">
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
            <ul className="flex flex-col p-4 lg:p-0 mt-4 text-grays text-md border rounded-lg lg:space-x-4 xl:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-white">
              <li>
                <Link
                  to="/"
                  className={`block py-2 px-3 font-bold text-grays lg:p-0 ${
                    location.pathname === "/"
                      ? "text-primary bg-gray-100 rounded lg:bg-transparent"
                      : "hover:text-primary"
                  }`}
                  aria-current="page"
                >
                  ទំព័រដើម
                </Link>
              </li>
              <li>
                <Link to="/skills">
                  <button
                    id="dropdownHoverButton1"
                    data-dropdown-toggle="dropdownHover1"
                    data-dropdown-trigger="hover"
                    class={`hidden group lg:flex group items-center justify-between w-full py-2 px-3 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:p-0 md:w-auto${
                      location.pathname.startsWith("/skills")
                        ? "text-primary"
                        : "text-grays hover:text-primary"
                    }`}
                    aria-current="page"
                    type="button"
                  >
                    <span
                      class={`me-1 font-bold flex gap-1 ${
                        location.pathname.startsWith("/skills")
                          ? "group text-primary"
                          : "text-grays hover:text-primary"
                      }`}
                    >
                      ជំនាញ
                      <FaAngleDown className="mt-1 cursor-pointer group-hover:rotate-180 transform transition-transform duration-300" />
                    </span>
                  </button>
                  <button
                    id="dropdownHoverButton1"
                    data-collapse-toggle="dropdown-example1"
                    data-dropdown-trigger="click"
                    onClick={toggleDropdown1}
                    onDoubleClick={handleDoubleClick}
                    className="flex lg:hidden group items-center justify-between w-full py-2 px-3 text-blue-300 hover:text-primary rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 md:hover:text-primary lg:p-0"
                    type="button"
                  >
                    <span
                      class={`font-bold w-full flex justify-between ${
                        location.pathname.startsWith("/skills")
                          ? "group text-primary"
                          : "text-grays hover:text-primary"
                      }`}
                    >
                      ជំនាញ
                      <FaAngleDown
                        onClick={toggleDropdown1}
                        class={`mt-1 cursor-pointer transform transition-transform duration-300 ${
                          isOpen1 ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  </button>
                </Link>
                <ul
                  id="dropdown-example1"
                  className="hidden lg:hidden text-grays py-2 space-y-2 font-normal"
                >
                  {skillList.map((skill, index) => {
                    return (
                      <>
                        <DropdownMenu
                          key={index}
                          data={skill.data}
                          nav={skill.nav}
                        />
                      </>
                    );
                  })}
                </ul>
                {/* Dropdown menu */}
                <div
                  id="dropdownHover1"
                  className="z-10 hidden py-2 space-y-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 group"
                >
                  <ul
                    className="py-2 text-sm text-grays font-normal dark:text-gray-200"
                    aria-labelledby="dropdownHoverButton1"
                  >
                    {skillList.map((skill, index) => {
                      return (
                        <>
                          <DropDownMenuHover
                            key={index}
                            data={skill.data}
                            nav={skill.nav}
                          />
                        </>
                      );
                    })}
                  </ul>
                </div>
              </li>
              <li>
                <Link to="/grammar">
                  <button
                    id="dropdownHoverButton2"
                    data-dropdown-toggle="dropdownHover2"
                    data-dropdown-trigger="hover"
                    className="hidden lg:flex group items-center justify-between w-full py-2 px-3 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary lg:p-0 md:w-auto"
                    type="button"
                    aria-current="page"
                  >
                    <span
                      class={`me-1 font-bold flex gap-1 ${
                        location.pathname.startsWith("/grammar")
                          ? "group text-primary"
                          : "text-grays hover:text-primary"
                      }`}
                    >
                      វេយ្យាករណ៍
                      <FaAngleDown className="mt-1 me-2 cursor-pointer group-hover:rotate-180 transform transition-transform duration-300" />
                    </span>
                  </button>
                  <button
                    id="dropdownHoverButton2"
                    data-collapse-toggle="dropdown-example2"
                    data-dropdown-trigger="click"
                    onClick={toggleDropdown2}
                    className="flex lg:hidden group items-center justify-between w-full py-2 px-3 text-blue-300 hover:text-primary rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 md:hover:text-primary lg:p-0"
                    type="button"
                    aria-current="page"
                  >
                    <span
                      class={`font-bold w-full flex justify-between ${
                        location.pathname.startsWith("/grammar")
                          ? "group text-primary"
                          : "text-grays hover:text-primary"
                      }`}
                    >
                      វេយ្យាករណ៍
                      <FaAngleDown
                        onClick={toggleDropdown2}
                        class={`mt-1 cursor-pointer transform transition-transform duration-300 ${
                          isOpen2 ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  </button>
                </Link>
                <ul
                  id="dropdown-example2"
                  className="hidden lg:hidden text-grays py-2 space-y-2 font-normal"
                >
                  {grammmarLevelList.map((gLevel, index) => {
                    return (
                      <>
                        <DropdownMenu
                          key={index}
                          data={gLevel.data}
                          nav={gLevel.nav}
                        />
                      </>
                    );
                  })}
                </ul>
                {/* Dropdown menu */}
                <div
                  id="dropdownHover2"
                  className="z-10 hidden py-2 space-y-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 group"
                >
                  <ul
                    className="py-2 text-sm text-grays font-normal"
                    aria-labelledby="dropdownHoverButton2"
                  >
                    {grammmarLevelList.map((gLevel, index) => {
                      return (
                        <>
                          <DropDownMenuHover
                            key={index}
                            data={gLevel.data}
                            nav={gLevel.nav}
                          />
                        </>
                      );
                    })}
                  </ul>
                </div>
              </li>
              <li className="text-gray-700 hover:text-primary">
                <Link to="/vocabulary">
                  <button
                    id="dropdownHoverButton3"
                    data-dropdown-toggle="dropdownHover3"
                    data-dropdown-trigger="hover"
                    className="hidden lg:flex group items-center justify-between w-full py-2 px-3 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary lg:p-0 md:w-auto dark:text-white"
                    type="button"
                    aria-current="page"
                  >
                    <span
                      class={`me-1 font-bold flex gap-1 ${
                        location.pathname.startsWith("/vocabulary")
                          ? "group text-primary"
                          : "text-grays hover:text-primary"
                      }`}
                    >
                      ពាក្យគន្លឹះ
                      <FaAngleDown className="mt-1 me-2 cursor-pointer group-hover:rotate-180 transform transition-transform duration-300" />
                    </span>
                  </button>
                  <button
                    id="dropdownHoverButton3"
                    data-collapse-toggle="dropdown-example3"
                    data-dropdown-trigger="click"
                    onClick={toggleDropdown3}
                    className="flex lg:hidden group items-center justify-between w-full py-2 px-3 text-blue-300 hover:text-primary rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 md:hover:text-primary lg:p-0"
                    type="button"
                  >
                    <span
                      class={`font-bold w-full flex justify-between ${
                        location.pathname.startsWith("/vocabulary")
                          ? "group text-primary"
                          : "text-grays hover:text-primary"
                      }`}
                    >
                      ពាក្យគន្លឹះ
                      <FaAngleDown
                        onClick={toggleDropdown3}
                        class={`mt-1 cursor-pointer transform transition-transform duration-300 ${
                          isOpen3 ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  </button>
                </Link>
                <ul
                  id="dropdown-example3"
                  className="hidden lg:hidden text-gray-700 hover:text-primary py-2 space-y-2 font-normal"
                >
                  {vocabularyLevelList.map((vLevel, index) => {
                    return (
                      <>
                        <DropdownMenu
                          key={index}
                          data={vLevel.data}
                          nav={vLevel.nav}
                        />
                      </>
                    );
                  })}
                </ul>
                {/* Dropdown menu */}
                <div
                  id="dropdownHover3"
                  className="z-10 hidden py-2 space-y-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 group"
                >
                  <ul
                    className="py-2 text-sm text-grays font-normal"
                    aria-labelledby="dropdownHoverButton3"
                  >
                    {vocabularyLevelList.map((vLevel, index) => {
                      return (
                        <>
                          <DropDownMenuHover
                            key={index}
                            data={vLevel.data}
                            nav={vLevel.nav}
                          />
                        </>
                      );
                    })}
                  </ul>
                </div>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className={`block py-2 px-3 font-bold text-grays lg:p-0 ${
                    location.pathname === "/about-us"
                      ? "text-primary bg-gray-100 rounded lg:bg-transparent"
                      : "hover:text-primary"
                  }`}
                  aria-current="page"
                >
                  អំពីពួក​យើង
                </Link>
              </li>
              <li>
                <Link
                  to="/ielts"
                  className={`block py-2 px-3 font-bold text-grays lg:p-0 ${
                    location.pathname === "/ielts"
                      ? "text-primary bg-gray-100 rounded lg:bg-transparent"
                      : "hover:text-primary"
                  }`}
                  aria-current="page"
                >
                  IELTS
                </Link>
              </li>
              <li>
                <Link
                  to="/more-videos"
                  className={`block py-2 px-3 font-bold text-grays lg:p-0 ${
                    location.pathname === "/more-videos"
                      ? "text-primary bg-gray-100 rounded lg:bg-transparent"
                      : "hover:text-primary"
                  }`}
                  aria-current="page"
                >
                  វីដេអូជំនួយ
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section>
        <div
          id="popup-modal"
          tabIndex="-1"
          className="w-full hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="md:w-[550px] md:right-16 lg:right-16 relative bg-white rounded-lg shadow dark:bg-gray-700">
              <button
                type="button"
                className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="popup-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="grid grid-cols-1 p-4 md:p-5 text-center">
                <div className="w-32 mx-auto object-cover mt-8 mb-4 text-gray-400 dark:text-gray-200">
                  <img
                    src="http://136.228.158.126:50005/files/077018c8-ccc4-4a1a-bb45-30deafd41b8e.png"
                    alt="logo/image"
                  />
                </div>
                <h3 className="mb-5 py-4 text-lg font-normal text-gray-500 dark:text-gray-400">
                  តើ​អ្នក​ប្រាកដ​ជា​ចង់ចាក់​ចេញឬ?
                </h3>

                <button
                  data-modal-hide="popup-modal"
                  type="button"
                  className="py-3 px-5 mb-2.5 ms-3 text-lg font-medium text-gray-600 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-900 focus:z-10  dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  បន្តការចូលគណនី
                </button>
                {getAccessToken() && (
                  <Link
                    onClick={handleLogout}
                    as={Link}
                    to="/"
                    data-modal-hide="popup-modal"
                    className="py-3.5 px-5 mb-2 ms-3 text-lg text-white font-medium focus:outline-none bg-red-600 rounded-lg border border-gray-200 hover:bg-red-800 focus:z-10  dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    ការចាកចេញ
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
