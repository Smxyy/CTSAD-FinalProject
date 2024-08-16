import React from "react";
import { Link } from "react-router-dom";

export default function Levelcard({
  image,
  title2,
  title,
  dis,
  skill_level,
  skill_name,
}) {
  const skilllevel = skill_level.toLowerCase();
  const skillname = skill_name.toLowerCase();
  return (
    <>
      <Link
        to={`${skilllevel}-${skillname}`}
        className="flex gap-3 items-center  bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 flex-1"
      >
        <img
          class="object-cover lg:w-[200px] md:w-[120px] w-[120px] h-full rounded-tl-lg"
          src={image}
          alt={title}
        />
        <div class="flex flex-col justify-between p-4 leading-normal">
          <div className="">
            <h5 class="mb-2 font-bold tracking-tight text-blues flex gap-3 items-center ">
              <div className="lg:text-2xl ">{title2}</div>
              <div className="lg:text-[23px] ">{`${title}`}</div>
            </h5>
          </div>
          <p class="mb-3 font-normal text-gray-700 md:line-clamp-3 line-clamp-2 lg:line-clamp-4 ">
            {dis}
          </p>
        </div>
      </Link>
    </>
  );
}
