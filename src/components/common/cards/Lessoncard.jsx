import React from "react";
import { Link } from "react-router-dom";
import "../cards/Lessoncard.css";
export default function Lessoncard({ onClick, title, des, pic, uuid }) {
  const newtitle = title.replace(/ /g, "-");
  const convert = newtitle.toLowerCase();
  const handleClick = () => {
    onClick(uuid);
  };
  return (
    <div onClick={handleClick}>
      <Link to={`${convert}`}>
        <div>
          <div className="max-w-[430px] max-h-[261px] rounded-tr-3xl rounded-bl-3xl relative">
            <img
              className="rounded-tr-3xl rounded-bl-3xl brightness-50 w-[400px] h-[250px] object-cover hover:brightness-75 transition-transform duration-300 hover:scale-105"
              src={pic}
              alt="champion"
            />
            <div className="">
              <div className="absolute md:top-[3.5rem]  lg:top-[3.5rem] top-[4rem]  text-white transition-colors justify-center duration-300">
                <h1 className="text-[18px] md:text-[20px] fontSize lg:text-[24px] text-white font-bold text-center mt-5 drop-shadow-lg shadow-black line-clamp-1 px-5">
                  {title}
                </h1>
                <p className="text-[12px] md:text-[18px] text-center mt-1 line-clamp-2 px-5">
                  {des}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
