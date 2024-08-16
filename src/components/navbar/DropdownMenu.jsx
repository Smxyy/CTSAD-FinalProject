import React from "react";

export function DropdownMenu({ data, nav }) {
  return (
    <>
      <li>
        <a
          href={`${nav}`}
          className={`flex items-center w-full text-sm hover:bg-gray-100 p-2 transition duration-75 rounded-lg pl-11 ${
            location.pathname === nav
              ? "group text-primary"
              : "text-gray-700 hover:text-primary"
          }`}
        >
          {data}
        </a>
      </li>
    </>
  );
}

export function DropDownMenuHover({ data, nav }) {
  return (
    <>
      <li>
        <a
          href={`${nav}`}
          className={`block px-4 py-2 hover:bg-gray-100 ${
            location.pathname === nav
              ? "group text-primary"
              : "text-gray-700 hover:text-primary"
          }`}
        >
          {data}
        </a>
      </li>
    </>
  );
}

export function DropDownUserMenu({ data, nav, icon }) {
  return (
    <>
      <li>
        <a
          href={`${nav}`}
          className={`block px-4 py-2 text-sm ${
            location.pathname === nav
              ? "group text-primary"
              : "text-gray-700 hover:text-primary"
          }`}
          role="menuitem"
        >
        <span className="flex flex-row gap-2 justify-start items-center">
          <span className="text-lg">{icon}</span>
          <span >{data}</span>
        </span>
        </a>
      </li>
    </>
  );
}
