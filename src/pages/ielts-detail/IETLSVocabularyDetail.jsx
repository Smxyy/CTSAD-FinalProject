import React, { useEffect, useState } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Listening from "../../assets/img/Listening.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsVolumeUp } from "react-icons/bs";
import { useRef } from "react";
import {
  fetchExcersiceById,
  fetchExcersices,
  selectExcersice,
  selectExcersiceById,
} from "../../redux/features/lessondetail/lessondetailSlice";
import {
  fetchSkillNameLevel,
  selectNameLevel,
} from "../../redux/skillnamelevel/skillnamelevel";
import parse from "html-react-parser";
import DOMPurify from "dompurify";
import { submitAnswer } from "../../redux/features/submit/submitSlice";
import { selectSubmit } from "../../redux/features/submit/submitSlice";
import { Button, Modal } from "flowbite-react";
import { fetchUserData } from "../../redux/verify/verifyUserSlice";
import { getAccessToken } from "../../lib/secureLocalStorage";
import "../lesson-detail-page/lesson.css";
import { BsPatchCheck } from "react-icons/bs";
import lose1 from "../../assets/img/lose1.gif";
import lose2 from "../../assets/img/lose2.gif";
import lose3 from "../../assets/img/lose3.gif";
import lose4 from "../../assets/img/lose4.gif";
import lose5 from "../../assets/img/lose5.gif";
import lose6 from "../../assets/img/lose6.gif";
import win1 from "../../assets/img/win1.gif";
import win2 from "../../assets/img/win2.gif";
import win3 from "../../assets/img/win3.gif";
import win4 from "../../assets/img/win4.gif";
import win5 from "../../assets/img/win5.gif";
import voicelose1 from "../../assets/video/voicelose1.mp3";
import voicelose2 from "../../assets/video/voicelose2.mp3";
import voicelose3 from "../../assets/video/voicelose3.mp3";
import voicelose4 from "../../assets/video/voicelose4.mp3";
import voicewin1 from "../../assets/video/voicewin7.mp3";
import voicewin2 from "../../assets/video/voicewin8.mp3";
import voicewin3 from "../../assets/video/voicewin9.mp3";
import voicewin4 from "../../assets/video/voicewin10.mp3";
import voicewin5 from "../../assets/video/voicewin11.mp3";
import voicewin6 from "../../assets/video/win1.mp3";
import voicewin7 from "../../assets/video/win2.mp3";
import voicewin8 from "../../assets/video/win3.mp3";
import voicewin9 from "../../assets/video/win4.mp3";
import voicewin10 from "../../assets/video/win5.mp3";
import bag from "../../assets/img/bag.jpg";
import loading from "../../assets/img/loading.gif";
import bag1 from "../../assets/img/bag1.jpg";
import { selectUsers } from "../../redux/verify/verifyUserSlice";
import { FaLess, FaRegHandPointRight } from "react-icons/fa6";
import { fetchGrammarsByLevel } from "../../redux/features/grammar/grammarSllice";
import {
  fetchLessons,
  fetchLessonsById,
  selectAllLessons,
  selectAllLessonsById,
} from "../../redux/features/lessons/LessonsSlice";
import {
  fetchSkillByName,
  fetchSkills,
  selectAllSkills,
  selectSkillByName,
} from "../../redux/features/skill/skillSlice";
import ExerciseComponent from "../vocabulary-detail-page/ExerciseComponet";
import ExerciseComponetIETlS from "./ExerciseComponetIETlS";

export default function IELTSkillDetail() {
  const param = useParams();
  const newtitle = param.title.replace(/-/g, " ");
  const newname = newtitle.split(" ");
  const newstr = `b1-${newname[1]}`;
  const convert = newtitle.toUpperCase();
  const [finaluuid, setFinaluuid] = useState(null);
  const excercises = useSelector(selectExcersice);
  const excersiceById = useSelector(selectExcersiceById);
  const lessons = useSelector(selectAllLessons);
  const lessonsById = useSelector(selectAllLessonsById);
  const [ieltsVocabluary, setieltsVocabluary] = useState([]);
  const skillNamelevel = useSelector(selectNameLevel);
  const dispatch = useDispatch();
  //
  useEffect(() => {
    dispatch(fetchExcersices());
  }, [dispatch]);
  //
  console.log("excercises", excercises);
  useEffect(() => {
    if (lessons.length > 0) {
      const matchedExcersice = lessons.find(
        (e) => e.title.toUpperCase() === convert
      );
      if (matchedExcersice) {
        setFinaluuid(matchedExcersice.lesson_uuid);
      }
    }
  }, [lessons, convert]);
  //
  useEffect(() => {
    if (finaluuid) {
      dispatch(fetchLessonsById(finaluuid));
    }
  }, [finaluuid, dispatch]);
  console.log("excersiceByIdNew", excersiceById);
  //
  useEffect(() => {
    dispatch(fetchSkillNameLevel(newstr));
  }, []);

  useEffect(() => {
    const filteredSkills = skillNamelevel.filter((item) =>
      item.description.includes("IELTS")
    );
    setieltsVocabluary(filteredSkills);
  }, [skillNamelevel]);
  //
  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
      >
        <span class="sr-only">Open sidebar</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
      <div className="flex">
        <aside
          id="default-sidebar"
          className="max-sm:fixed new excludeNew pt-2  md:px-6 px-5 h-screen lg:sticky left-0 z-40 w-48 lg:w-64 lg:pt-4 transition-transform -translate-x-full sm:translate-x-0 bg-white md:border-r border-gray-200"
          aria-label="Sidebar"
        >
          <div className="h-full px-3 w-[160px] overflow-y-auto bg-white pb-8 ">
            <ul className="space-y-4 font-suwannaphum">
              {ieltsVocabluary?.map((selectNameLevel) => {
                return selectNameLevel.exercises
                  .slice()
                  .reverse()
                  .map((exercise, index) => {
                    console.log("exercise", exercise);
                    return (
                      <li key={exercise.id}>
                        <a href="#">{exercise.title}</a>
                      </li>
                    );
                  });
              })}
            </ul>
          </div>
        </aside>
        <main className="flex-1 md:px-[28px] md:pb-[28px] pb-[28px] px-[20px]">
          <div>
            <div className="md:p-[40px] lg:p-[40px] p-[20px] bg-[#f5f5f5]">
              <div className="flex gap-4 flex-col  lg:flex-row">
                <img
                  src={lessonsById?.thumbnail || Listening}
                  alt=""
                  className="w-[350px] object-cover rounded-lg"
                />
                <div className="">
                  <h2 className="w-fit  bg-[#ffc30e] md:px-20 px-10 py-2 text-white font-bold text-lg">
                    {lessonsById?.title || "No title"}
                  </h2>
                  <div className="flex gap-4 mt-4 text-grays items-center">
                    <BsPatchCheck className=" text-[60px] lg:text-2xl md:text-xl text-second" />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-300">
              <h2 className="w-full bg-[#ffc30e] px-10 py-2 text-[#F5F5F5] text-xl font-bold mt-7">
                ការសន្ទនា
              </h2>
              <div className="bg-[#faf5e6] md:p-[40px] lg:p-[40px] p-[20px]">
                <div className="px-8 py-6 border-2 bg-white rounded-xl">
                  <p
                    // dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
                    className="text-[20px] leading-[3rem]"
                  >
                    {parse(`${excersiceById?.transcript}`)}
                    {parse(`${excersiceById?.reading_text}`)}
                    {/* {console.log("exerciseId:",excersiceById)} */}
                  </p>
                </div>
              </div>
            </div>
            {lessonsById?.questions?.map((question, index) => {
              console.log("question", question.type);
              return (
                <>
                  <ExerciseComponetIETlS question={question} />
                </>
              );
            })}
          </div>
        </main>
      </div>
    </>
  );
}
