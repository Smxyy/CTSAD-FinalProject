import React, { useState } from "react";
import Lessoncard from "../../components/common/cards/Lessoncard";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchSkillNameLevel,
  selectNameLevel,
} from "../../redux/skillnamelevel/skillnamelevel";
import { useEffect } from "react";
import Listening from "../../assets/img/Listening2.png";
import { FaRegHandPointRight } from "react-icons/fa";
import { fetchGrammarsByLevel } from "../../redux/features/grammar/grammarSllice";
import {
  fetchVocabularysByLevel,
  selectAllVocabluaryByLevel,
} from "../../redux/features/vocabulary/vocabularySlice";
import "../skill-exercise-page/SKillEcercise.css";
import parse from "html-react-parser";
import LoadingExerciseGrammar from "../../components/common/loading/LoadingExerciseGrammar";

export default function SkillExerciseVocabluary() {
  const param = useParams();

  let title = "";
  const levels = param["level-vocabulary"];
  const newlevels = levels.split("-");
  const VocabularyLevel = useSelector(selectAllVocabluaryByLevel);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    dispatch(fetchVocabularysByLevel(newlevels[0]));
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsLoading(false);
    };

    fetchData();
  }, []);
  if (isLoading) {
    return <LoadingExerciseGrammar/>;
  }
  return (
    <div className="w-[90%] mx-auto">
      <section className="flex flex-col lg:flex-row mx-auto justify-evenly items-center mt-10 md:gap-10 gap-10">
        <div className="md:w-[100%] lg:w-[600px] relative overflow-hidden">
          {VocabularyLevel.map((v) => {
            return (
              <img
                className="object-cover"
                src={v.thumbnail_url}
                alt="Picture"
              />
            );
          })}
        </div>
        <div className="">
          {VocabularyLevel.map((v) => {
            return (
              <>
                <div>
                  <h1 className="text-blue-950  md:text-[1.8rem] lg:text-[2rem] text-[24px] font-bold flex  text-center">
                    <div className="text-second">{parse(`${title}`)}</div>
                    <div className="">{parse(`${v.titles}`)}</div>
                  </h1>
                </div>
                <div className="md:w-[100%] lg:w-[500px]  text-[18px] mt-5 leading-10 text-start">
                  <p className="text-grays">{parse(`${v.description}`)}</p>
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
        {VocabularyLevel.map((selectNameLevel) => {
          console.log("selectNameLevel", selectNameLevel);
          return selectNameLevel.lessons.map((excersice) => {
            // console.log("excersice", excersice);
            return (
              <>
                <Lessoncard
                  pic={excersice.thumbnail}
                  title={excersice.lesson_title}
                  des={excersice.description}
                />
              </>
            );
          });
        })}
      </div>
    </div>
  );
}
