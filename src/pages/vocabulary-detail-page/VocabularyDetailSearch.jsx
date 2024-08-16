import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { BsVolumeUp } from "react-icons/bs";
import { useRef } from "react";
import { FaRegHandPointRight } from "react-icons/fa";

import {
  fetchExcersices,
  selectExcersice,
  selectExcersiceById,
} from "../../redux/features/lessondetail/lessondetailSlice";
import {
  fetchSkillNameLevel,
  selectNameLevel,
} from "../../redux/skillnamelevel/skillnamelevel";
import { selectSubmit } from "../../redux/features/submit/submitSlice";
import { fetchUserData } from "../../redux/verify/verifyUserSlice";
import { getAccessToken } from "../../lib/secureLocalStorage";
import "../lesson-detail-page/lesson.css";
import { BsPatchCheck } from "react-icons/bs";
import loading from "../../assets/img/loading.gif";
import {
  fetchLessons,
  fetchLessonsById,
  selectAllLessons,
  selectAllLessonsById,
} from "../../redux/features/lessons/LessonsSlice";
import ExerciseComponent from "./ExerciseComponent";
import "../grammar-detail-page/LessonDetailGrammar.css";
import {
  fetchVocabularysByLevel,
  selectAllVocabluaryByLevel,
} from "../../redux/features/vocabulary/vocabularySlice";
import "../skill-level/SkillLevel.css";

export default function VocabularyDetailSearch() {
  const param = useParams();
  console.log("param: " + param);
  const newtitle = param.title.replace(/-/g, " ");
  const convert = newtitle.toUpperCase();
  const excercises = useSelector(selectExcersice);
  const excersiceById = useSelector(selectExcersiceById);
  const skillNameLevels = useSelector(selectNameLevel);
  const vocabularylevel = useSelector(selectAllVocabluaryByLevel);
  const lessons = useSelector(selectAllLessons);
  const lessonsById = useSelector(selectAllLessonsById);
  const submits = useSelector(selectSubmit);
  const dispatch = useDispatch();
  const [lessonsuuid, setLessonsuuid] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [score, setScore] = useState(0);
  const [scoreSound, setScoreSound] = useState(null);
  const [loadingSection, setLoadingSection] = useState(null);
  const audioRefs = useRef({});
  // const levels = param["level-vocabulary"];
  // console.log("param", param);
  // const newlevels = levels.split("-");
  useEffect(() => {
    dispatch(fetchUserData(getAccessToken()));
  }, []);

  useEffect(() => {
    dispatch(fetchExcersices());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchLessons());
  }, []);
  console.log("lessons", lessons);
  useEffect(() => {
    if (lessons.length > 0) {
      const matchedLesson = lessons.find(
        (e) => e.lesson_title.toUpperCase() === convert
      );
      if (matchedLesson) {
        setLessonsuuid(matchedLesson.lesson_uuid);
        // console.log("lessonUuid:",matchedLesson.lesson_uuid)
      }
    }
  }, [lessons, convert]);
  useEffect(() => {
    if (openModal && scoreSound) {
      scoreSound.loop = true;
      scoreSound.play();
    } else if (scoreSound) {
      scoreSound.loop = false;
      scoreSound.pause();
    }
  }, [openModal, scoreSound]);

  useEffect(() => {
    if (lessonsuuid) {
      dispatch(fetchLessonsById(lessonsuuid));
    }
  }, [lessonsuuid, dispatch]);
  console.log("lessonsById", lessonsById);

  const skill_level = param["skill_level-skill_name"];
  useEffect(() => {
    dispatch(fetchSkillNameLevel(skill_level));
  }, [dispatch, skill_level]);

  // useEffect(() => {
  //   dispatch(fetchVocabularysByLevel(newlevels[0]));
  // }, []);
  useEffect(() => {
    if (submits?.payload?.exercises?.scores !== undefined) {
      setScore(submits.payload.exercises.scores);
    }
  }, [submits]);

  console.log("excersiceById in VocabularyDetail", excersiceById);
  console.log("excercises in VocabularyDetail", excercises);

  const playAudio = (url, sectionId) => {
    const audio = audioRefs.current[sectionId];
    if (audio) {
      setLoadingSection(sectionId);

      // Set a timeout to simulate loading
      const loadingTimeout = setTimeout(() => {
        audio.src = url;
        audio.play();
        audio.onplaying = () => {
          setLoadingSection(null);
          clearTimeout(loadingTimeout); // Clear the timeout if audio starts playing
        };
        audio.onended = () => {
          setLoadingSection(null);
          clearTimeout(loadingTimeout); // Clear the timeout when audio ends
        };
      }, 500); // Set your desired delay time here in milliseconds
    }
  };

  console.log("submits", submits);
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
          <div className="h-full px-3 w-[160px] overflow-y-auto bg-white pb-8">
            <ul className="space-y-4 font-suwannaphum">
              {vocabularylevel?.map((selectNameLevel) => {
                return selectNameLevel?.lessons.map((excersice) => {
                  const name = excersice.lesson_title.toLowerCase();
                  const formattedTitle = name.replace(/\s+/g, "-");
                  return (
                    <li key={excersice.id}>
                      <NavLink
                        to={`/vocabulary/${param["level-vocabulary"]}/${formattedTitle}`}
                        className={({ isActive }) =>
                          `${isActive ? "text-primary" : "text-black"}`
                        }
                      >
                        {excersice.lesson_title}
                      </NavLink>
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
                  src={
                    lessonsById?.thumbnail ||
                    "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                  }
                  alt=""
                  className="w-[300px] object-cover rounded-lg"
                />
                <div className="">
                  <h2 className="w-fit bg-[#ffc30e] md:px-20 px-10 py-2 text-white md:text-lg text-md font-bold md:line-clamp-2">
                    {lessonsById?.lesson_title || "No title"}
                    {console.log("lessonById:", lessonsById)}
                  </h2>
                  <div className="flex gap-4 mt-4 text-grays">
                    <BsPatchCheck className=" text-[40px] md:text-[30px] text-second md:block  hidden" />
                    <p className="md:text-lg md:line-clamp-none line-clamp-2">
                      {lessonsById?.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="w-full bg-[#ffc30e] px-10 py-2 text-[#F5F5F5] text-xl font-bold mt-7">
              ពាក្យគន្លឹះ
            </h2>
            <div className="bg-[#faf5e6] md:p-[40px] lg:p-[40px] p-[20px]">
              <div className="p-8 border-2 bg-white rounded-xl">
                <h1 className="text-xl  ms-2 text-gray-500 mb-6 ">
                  រៀននឹងស្តាប់ពាក្យខាងក្រោម៖
                </h1>
                <div className="grid gap-10 md:gap-5 lg:gap-10 md:grid-cols-2 lg:grid-cols-4 grid-cols-1 exclude-1024-vocabulary w-fit mx-auto">
                  {lessonsById?.sections?.map((section) => (
                    <div
                      key={section.section_uuid}
                      className="border-2 md:mx-auto border-gray-200 lg:w-[250px] p-1 rounded-xl"
                    >
                      <div>
                        <div className="">
                          <img
                            src={section?.thumbnail_url}
                            alt={section?.title}
                            className="object-cover w-[250px] h-[150px] relative 
                                rounded-t-lg"
                          />
                          <div>
                            {loadingSection === section.section_uuid ? (
                              <img
                                src={loading}
                                alt="Loading"
                                className="border-2 border-gray-100 w-[30px] object-cover p-1 mt-2 rounded-md ml-2"
                              />
                            ) : (
                              <BsVolumeUp
                                className="audio-button border-2 border-gray-200 text-3xl p-1 text-black mt-2 rounded-md ml-2"
                                onClick={() =>
                                  playAudio(
                                    section.voice[0].voice_url,
                                    section.section_uuid
                                  )
                                } // Assuming there's at least one voice URL
                              />
                            )}
                          </div>
                          <p className="text-lg border-2 border-gray-200 text-center p-1 rounded-3xl m-2">
                            {section?.title}
                          </p>
                          <audio
                            ref={(el) =>
                              (audioRefs.current[section.section_uuid] = el)
                            }
                          ></audio>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {lessonsById?.exercises?.map((exercise) => {
            console.log("Each exercise", exercise);
            return (
              <>
                <ExerciseComponent key={exercise.ex_uuid} exercise={exercise} />
              </>
            );
          })}
        </main>
      </div>
    </>
  );
}
