import React from "react";
import { useParams } from "react-router-dom";
export default function CardIELTS({ img, title, des }) {
  const newtitle = title.toLowerCase();
  return (
    <>
      <div class="max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 transition duration-500 transform hover:scale-105 hover:shadow-lg">
        <a href={`ielts/${newtitle}`}>
          <img class="rounded-t-lg" src={img} alt="" />
        </a>
        <div class="p-5">
          <a href={`${newtitle}`}>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-primary">
              {title}
            </h5>
          </a>
          <p class="mb-3 font-normal text-lg text-gray-700 dark:text-gray-400">
            {des}
          </p>
        </div>
      </div>
    </>
  );
}
