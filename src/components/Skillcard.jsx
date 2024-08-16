import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import React from "react";
export default function Skillcard({ skill_name, des, photo }) {
  const skillName = skill_name.toLowerCase();
  return (
    <div className="max-w-[590px] relative overflow-hidden">
      <Link to={`${skillName}`}>
        <img
          className="h-[400px] object-cover transform transition-transform duration-300 hover:scale-105 hover:brightness-75 brightness-50"
          src={photo}
          alt="Card"
        />
        <div className="absolute bottom-10 left-10 right-5 text-white transition-colors duration-300">
          <h1 className="text-[24px] font-bold hover:text-second mt-5">
            {skill_name}
          </h1>
          <p className="text-sm md:text-lg sm:text-sm my-5">{des}</p>
          <Button color="warning">រៀនបន្ត</Button>
        </div>
      </Link>
    </div>
  );
}
