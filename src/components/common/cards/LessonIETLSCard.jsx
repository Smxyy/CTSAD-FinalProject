import React from "react";
import { Link } from "react-router-dom";
import "../cards/Lessoncard.css";
export default function LessonIETLSCard({ onClick, title, des, pic, uuid }) {
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
              <div className="absolute md:top-[6rem] left-7 lg:top-[4.5rem] top-[6rem]  text-white transition-colors justify-center duration-300">
                <h1 className="text-[18px] md:text-[20px] fontSize lg:text-[24px] text-white font-bold  mt-5 drop-shadow-lg shadow-black line-clamp-1 px-5">
                  {title}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
