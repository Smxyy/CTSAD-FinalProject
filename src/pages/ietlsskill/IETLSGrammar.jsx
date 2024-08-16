import React, { useState } from "react";
import Lessoncard from "../../components/common/cards/Lessoncard";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchSkillNameLevel,
  selectNameLevel,
} from "../../redux/skillnamelevel/skillnamelevel";
import { useEffect } from "react";
import { FaRegHandPointRight } from "react-icons/fa";
import "../skill-exercise-page/SKillEcercise.css";
import LessonIETLSCard from "../../components/common/cards/LessonIETLSCard";
import {
  fetchGrammarsByLevel,
  selectAllGrammarsByLevel,
} from "../../redux/features/grammar/grammarSllice";
export default function IETLSGrammarDetail() {
  const param = useParams();
  const grammarslevel = useSelector(selectAllGrammarsByLevel);
  const [ieltsGrammar, setieltsGrammar] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGrammarsByLevel("b1"));
  }, []);
  useEffect(() => {
    const filteredGrammarslevel = grammarslevel.filter((item) =>
      item.description.includes("IELTS")
    );
    setieltsGrammar(filteredGrammarslevel);
  }, [grammarslevel]);
  console.log("ieltsLevels", ieltsLevels);
  return (
    <>
      <div className="w-[90%] mx-auto">
        <section className="flex flex-col lg:flex-row mx-auto justify-evenly items-center mt-10 md:gap-10 gap-10">
          <div className=" md:w-[100%] lg:w-[600px] relative overflow-hidden">
            {ieltsGrammar?.map((v) => {
              return (
                <img className="object-cover" src={v.thumbnail} alt="Picture" />
              );
            })}
          </div>
          <div className="">
            {ieltsGrammar.map((v) => {
              return (
                <>
                  <div className="">
                    <div>
                      <h1 className=" text-blue-950  md:text-[1.8rem] lg:text-[2rem] text-[24px] font-bold flex gap-5 text-center">
                        <div className="">{newname.toLocaleUpperCase()}</div>
                      </h1>
                    </div>
                    <div className="md:w-[100%] lg:w-[500px]  text-[18px] mt-5 leading-10 text-start">
                      <p className="text-grays">{v.description}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </section>
        <div>
          <h1 className="font-bold md:text-[30px] text-[18px] flex gap-5 justify-center my-10 text-primary items-center">
            <FaRegHandPointRight />
            ចាប់ផ្តើមតេស្តអនុវត្តការអាន IELTS ឥឡូវនេះ
          </h1>
        </div>
        <div className="mx-auto my-10 justify-center items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 w-[320px] md:w-[90%] exclude">
          {ieltsGrammar?.map((selectNameLevel) => {
            return selectNameLevel.lessons
              .slice()
              .reverse()
              .map((exercise, index) => {
                console.log("exercise", exercise);
                return (
                  <LessonIETLSCard
                    key={index}
                    pic={exercise.thumbnail}
                    title={exercise.title}
                  />
                );
              });
          })}
        </div>
      </div>
    </>
  );
}
