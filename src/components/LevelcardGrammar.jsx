import React from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser"

export default function LevelcardGrammar({
  image,
  title2,
  title,
  dis,
  skill_name,
  skill_level,
}) {
  const skillname = skill_name.toLowerCase();
  const skilllevel = skill_level.toLowerCase();
  let level = "";
  if (skilllevel === "a1") {
    level = "a2";
  } else if (skilllevel === "b1") {
    level = "b2";
  } else {
    level = "";
  }
  const newtitle = skillname.replace(/ /g, "-");
  const maintitle = title.slice(0, 5);
  return (
    <>
      <Link 
        to={skill_level === 'C1' ? (`${skill_level.toLowerCase()}-grammar`) : (`${skilllevel}-${level}-grammar`)}
        className="flex gap-3 items-center  bg-white border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 flex-1">
        <img
          class="object-cover lg:w-[200px] md:w-[120px] w-[120px] h-full rounded-tl-lg"
          src={image}
          alt={title}/>
        <div class="flex flex-col justify-between p-4 leading-normal">
          <div className="">
            <h5 class="mb-2 font-bold tracking-tight text-blues flex items-center">
              {title.toLowerCase().includes("c1") ? 
              (<>
                <div className="lg:text-2xl">{title2}</div>
                <div className="lg:text-[23px]">C1 វេយ្យាករណ៍</div>
              </>) : (
              <>
                <div className="lg:text-2xl">{title2}</div>
                <div className="lg:text-[23px]">{`${maintitle} វេយ្យាករណ៍`}</div>
              </>
              )}
            </h5>
          </div>
          <p class="mb-3 font-normal text-gray-700 md:line-clamp-3 line-clamp-2 lg:line-clamp-4">
            {parse(dis)}
          </p>
        </div>
      </Link>
    </>
  );
}
