import React from "react";
import Lessoncard from "../../components/common/cards/Lessoncard";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useState } from "react";
import parse from "html-react-parser";
import {
  fetchSkillNameLevel,
  selectNameLevel,
} from "../../redux/skillnamelevel/skillnamelevel";
import { useEffect } from "react";
import Listening from "../../assets/img/Listening2.png";
import { FaRegHandPointRight } from "react-icons/fa";
import "../skill-exercise-page/SKillEcercise.css";
import LoadingExerciseGrammar from "../../components/common/loading/LoadingExerciseGrammar";
export default function SkillExercise() {
  const param = useParams();
  const [skillLevels, setskillLevels] = useState([]);
  let title = "";
  console.log(param);
  console.log("param", param.skill_name);
  if (param.skill_name === "reading") {
    title = "ការអានកម្រិត​";
  } else if (param.skill_name === "listening") {
    title = "ការស្តាប់កម្រិត​";
  } else if (param.skill_name === "writing") {
    title = "ការសរសេរកម្រិត";
  } else {
    title = "ការសរសេរនិយាយ";
  }
  const skill_level = param["skill_level-skill_name"];
  const skillNameLevels = useSelector(selectNameLevel);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    dispatch(fetchSkillNameLevel(skill_level));
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsLoading(false);
    };
    fetchData();
  }, []);
  //
  useEffect(() => {
    const filteredSkills = skillNameLevels.filter(
      (item) => !item.description.includes("IELTS")
    );
    setskillLevels(filteredSkills);
  }, [skillNameLevels]);
  if(isLoading){
    return <LoadingExerciseGrammar/>;
  }
  return (
    <div className="w-[90%] mx-auto">
      <section className="flex flex-col lg:flex-row mx-auto justify-evenly items-center mt-10 md:gap-10 gap-10">
        <div className=" md:w-[100%] lg:w-[600px] relative overflow-hidden">
          {skillLevels.map((v) => {
            return (
              <img className="object-cover" src={v.thumbnail} alt="Picture" />
            );
          })}
        </div>
        <div className="">
          {skillLevels.map((v) => {
            return (
              <>
                <div className="">
                  <div>
                    <h1 className=" text-blue-950  md:text-[1.8rem] lg:text-[2rem] text-[24px] font-bold flex gap-5 text-center">
                      <div className="">{parse(`${title}`)}</div>
                      <div className="">{parse(`${v.skill_level}`)}</div>
                    </h1>
                  </div>
                  <div className="md:w-[100%] lg:w-[500px]  text-[18px] mt-5 leading-10 text-start">
                    <p className="text-grays">{parse(v.description)}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
      <div>
        <h1 className="font-bold md:text-[30px] text-[24px] flex gap-5 justify-center my-10 text-primary items-center">
          <FaRegHandPointRight />
          សូមធ្វើការជ្រើសរើសមេរៀន
        </h1>
      </div>
      <div className="mx-auto my-10 justify-center items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 w-[320px] md:w-[90%] exclude">
        {skillLevels.map((selectNameLevel) => {
          return selectNameLevel.exercises.map((excersice, index) => {
            return (
              <>
                <Lessoncard
                  pic={excersice.thumbnail}
                  title={parse(excersice.title)}
                  des={parse(excersice.description)}
                />
              </>
            );
          });
        })}
      </div>
    </div>
  );
}
