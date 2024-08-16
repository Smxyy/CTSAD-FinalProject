import React, { useEffect, useState } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Listening from "../../assets/img/Listening2.png";
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
// import "./LessonDetailGrammar.css";
import "../grammar-detail-page/LessonDetailGrammar.css";
// import ExerciseComponent from "../../components/exercise-component/ExerciseComponent";
import ExerciseComponet from "../../components/exercise-component/ExerciseComponent";
import Search from "./Seach";

export default function SearchDetailLessons() {
  const param = useParams();
  console.log("param", param);
  const newtitle = param.title.replace(/-/g, " ");
  const convert = newtitle.toUpperCase();
  console.log("convertnew", convert);
  // const lessons = useSelector(selectAllLessons);
  const excercises = useSelector(selectExcersice);
  const excersiceById = useSelector(selectExcersiceById);
  const grammarLevel = useSelector((state) => state.grammar.grammarLevels);
  const submits = useSelector(selectSubmit);
  const dispatch = useDispatch();
  const lessons = useSelector(selectAllLessons);
  const lessonsById = useSelector(selectAllLessonsById);
  const users = useSelector(selectUsers);
  const status = useSelector((state) => state.userVerify.status);
  const error = useSelector((state) => state.userVerify.error);
  const succeeded = useSelector((state) => state.userVerify.succeeded);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [finaluuid, setFinaluuid] = useState(null);
  const [lessonuuid, setLessonsuuid] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [answersToShow, setAnswersToShow] = useState({});
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  // const submitAudio = new Audio(submitSound);
  // const incorrectAudio = new Audio(sad);
  const modalBodyRef = useRef(null);
  // const levels = param["level-grammar"];
  // const newlevels = levels.split("-");
  const messageLose = [
    "ស៊ូៗម្តងទៀត",
    "ព្យាយាមពេលក្រោយ",
    "ចូលរួមសោកស្តាយ",
    "កុំអស់សង្ឃឹម",
    "លើកក្រោយនឹងល្អជាងនេះ",
  ];
  const messageWin = [
    "Wow , អស្ចារ្យមែន",
    "ពិតជាមិនធម្មតា",
    "ខ្លាំងរបស់គេ",
    "អបអរសាទរ ",
    "អេមខ្លាំងមែនទែន",
  ];
  const voiceWin = [
    voicewin1,
    voicewin2,
    voicewin3,
    voicewin4,
    voicewin5,
    voicewin6,
    voicewin7,
    voicewin8,
    voicewin9,
    voicewin10,
  ];
  const voiceLose = [voicelose1, voicelose2, voicelose3, voicelose4];
  const imgLose = [lose1, lose2, lose3, lose4, lose5, lose6];
  const imgWin = [win1, win2, win3, win4, win5];
  const randomIndex = Math.floor(Math.random() * voiceWin.length);
  const randomIndex1 = Math.floor(Math.random() * voiceLose.length);
  const randomIndex2 = Math.floor(Math.random() * messageWin.length);
  const randomIndex3 = Math.floor(Math.random() * messageLose.length);
  const randomIndex4 = Math.floor(Math.random() * imgWin.length);
  const randomIndex5 = Math.floor(Math.random() * imgLose.length);
  const randomVoiceWin = voiceWin[randomIndex];
  const randomVoiceLose = voiceLose[randomIndex1];
  const randomMessageWin = messageWin[randomIndex2];
  const randomMessageLose = messageLose[randomIndex3];
  const randomImgWin = imgWin[randomIndex4];
  const randomImgLose = imgLose[randomIndex5];
  const [audioUrl, setAudioUrl] = useState("");
  const audioRefs = useRef({});
  const [loadingSection, setLoadingSection] = useState(null);
  const [voiceSection, setvoiceSection] = useState("");

  useEffect(() => {
    dispatch(fetchUserData(getAccessToken()));
  }, []);

  useEffect(() => {});

  useEffect(() => {
    dispatch(fetchExcersices());
  }, []);

  useEffect(() => {
    dispatch(fetchLessons());
  }, []);
  console.log("lessonsnew", lessons);
  useEffect(() => {
    if (lessons.length > 0) {
      const matchedlessons = lessons.find(
        (e) => e.lesson_title.toUpperCase() === convert
      );
      console.log("matchedlessons", matchedlessons);
      if (matchedlessons) {
        setLessonsuuid(matchedlessons.lesson_uuid);
      }
    }
  }, [lessons, convert]);
  console.log("finaluuid", lessonuuid);
  useEffect(() => {
    if (lessonuuid) {
      dispatch(fetchLessonsById(lessonuuid));
    }
  }, [lessonuuid, dispatch]);
  console.log("lesson_uuid", lessonuuid);
  console.log("excersiceById", excersiceById);
  console.log("excercises", excercises);

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

  const skill_level = param["skill_level-skill_name"];
  useEffect(() => {
    dispatch(fetchSkillNameLevel(skill_level));
  }, []);

  useEffect(() => {
    if (submits?.payload?.exercises?.scores !== undefined) {
      setScore(submits.payload.exercises.scores);
    }
  }, []);

  const handleChange = (questionId, answer) => {
    setSelectedAnswers((prevState) => ({
      ...prevState,
      [questionId]: answer,
    }));
  };
  console.log("lessonsByIdnew", lessonsById);
  useEffect(() => {
    if (lessonsById?.sections) {
      lessonsById.sections.forEach((section) => {
        section?.voice.forEach((e) => {
          if (e.voice_url) {
            setvoiceSection(e.voice_url);
          }
        });
      });
    }
  }, [lessonsById]);
  console.log("voice section", voiceSection);
  const handleSubmit = async () => {
    const unansweredQuestions = excersiceById?.questions?.filter(
      (question) => !selectedAnswers[question.q_uuid]
    );

    if (unansweredQuestions.length > 0) {
      alert("Please answer all questions before submitting.");
      //new alert
      return;
    }

    const userAnswers = Object.entries(selectedAnswers).map(
      ([q_uuid, answer]) => ({
        q_uuid,
        answers: [answer],
      })
    );
    const dataToSubmit = {
      user_uuid: "", // Replace, this with dynamic user UUID if available
      user_answer: userAnswers,
    };
    console.log("token", getAccessToken());
    if (finaluuid) {
      try {
        const response = await dispatch(
          submitAnswer({ uuid: finaluuid, ...dataToSubmit })
        );
        setIsSubmitted(true); // Mark as submitted
        setShowResults(true);
        handleShowAnswers();
        setShowScore(true); // Ensure score is shown after submission
        setOpenModal(true);

        const score = response.payload.payload.exercises.scores;
        // Determine which sound to play based on the score
        const soundToPlay = score >= 5 ? randomVoiceWin : randomVoiceLose;
        const scoreSound = new Audio(soundToPlay);
        // Play score sound
        scoreSound.play();

        // Open modal after submission
      } catch (error) {
        console.error("Submit Error:", error);
      }
    }
  };

  const handleTryAgain = () => {
    setSelectedAnswers({});
    setAnswersToShow({});
    setShowResults(false);
    setOpenModal(false);
    setScore(0);
    setShowScore(false); // Reset showScore
    setIsSubmitted(false); // Reset isSubmitted
    if (finaluuid) {
      dispatch(fetchExcersiceById(finaluuid));
      console.log("finaluuid", finaluuid);
    }
  };

  const handleShowAnswers = () => {
    if (excersiceById?.questions) {
      const answers = excersiceById.questions.reduce((acc, question) => {
        const correctChoice = question.choices.find(
          (choice) => choice.is_correct
        );
        acc[question.q_uuid] = {
          correctChoice: correctChoice.text,
        };
        return acc;
      }, {});
      setAnswersToShow(answers);
    }
  };
  console.log("lessonId", lessonsById);
  const handleShowScore = () => {
    if (isSubmitted) {
      setShowScore(true);
      setOpenModal(true);
    } else {
      alert("Please submit your answers first.");
    }
  };
  console.log("excersice", excersiceById.voice);
  const sanitizedHTML = DOMPurify.sanitize(excersiceById?.transcript);
  console.log("submits", submits);
  console.log("selectNameLevel", selectNameLevel);
  const [voiceState, setVoiceState] = useState("");
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
            <ul className="space-y-4">
              <li key={lessonsById.lesson_uuid}>{lessonsById.lesson_title}</li>
            </ul>
          </div>
        </aside>
        <main className="flex-1 md:px-[28px] md:pb-[28px] pb-[28px] px-[20px]">
          <div>
            <div className="md:p-[40px] lg:p-[40px] p-[20px] bg-[#f5f5f5]">
              <div className="">
                <div className="flex gap-4 flex-col lg:flex-row">
                  <img
                    src={
                      lessonsById?.thumbnail ||
                      "https://i0.wp.com/thinkfirstcommunication.com/wp-content/uploads/2022/05/placeholder-1-1.png?fit=1200%2C800&ssl=1"
                    }
                    alt=""
                    className="w-[350px] object-cover rounded-lg"
                  />
                  <div className="">
                    <h2 className="w-fit bg-[#ffc30e] md:px-20 px-10 py-2 text-white md:text-lg text-md font-bold md:line-clamp-1">
                      {lessonsById?.lesson_title || "No title available"}
                    </h2>
                    <div className="flex gap-4 mt-4 text-grays">
                      <BsPatchCheck className="text-[40px] md:text-[30px] text-second" />
                      <p className="md:text-lg md:line-clamp-none line-clamp-2">
                        {lessonsById?.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {voiceSection ? (
            <>
              <h2 className="w-full bg-[#ffc30e] px-10 py-2 text-[#F5F5F5] text-xl font-bold mt-7">
                ពាក្យគន្លឹះ
              </h2>
              <div className="bg-[#faf5e6] md:p-[40px] lg:p-[40px] p-[20px]">
                <div className="p-8 border-2 bg-white rounded-xl">
                  <h1 className="text-xl ms-2 text-gray-500 mb-6">
                    រៀននឹងស្តាប់ពាក្យខាងក្រោម៖
                  </h1>
                  <div className="grid gap-10 md:gap-5 lg:gap-10 md:grid-cols-2 lg:grid-cols-4 grid-cols-1 exclude-1024-vocabulary w-fit mx-auto">
                    {lessonsById?.sections?.map((section) => {
                      return (
                        <div
                          key={section.section_uuid}
                          className="border-2 md:mx-auto border-gray-200 lg:w-[250px] p-1 rounded-xl"
                        >
                          <img
                            src={section?.thumbnail_url}
                            alt={section?.title}
                            className="object-cover w-[250px] h-[150px] relative rounded-t-lg"
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
                                }
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
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="bg-gray-300">
              <h2 className="w-full bg-[#ffc30e] px-10 py-2 text-[#F5F5F5] text-xl font-bold mt-7">
                ការពន្យល់វេយ្យាករណ៍
              </h2>
              <div className="bg-[#faf5e6] md:p-[40px] lg:p-[40px] p-[20px]">
                <div className="px-8 border-2 bg-white rounded-xl">
                  {lessonsById?.sections?.map((section) => {
                    return (
                      <div className="mb-5" key={section.section_uuid}>
                        {!section?.title
                          .toLowerCase()
                          .includes("grammar explanation") && (
                          <div className="flex items-center mt-8 gap-3 text-primary">
                            <FaRegHandPointRight />
                            <h1 className="font-bold lg:text-2xl md:text-2xl text-xl flex-1">
                              {parse(section?.title)}
                            </h1>
                          </div>
                        )}
                        <p className="mt-2 leading-10 text-[1rem]">
                          {parse(section?.description)}
                        </p>
                        {!section?.title
                          .toLowerCase()
                          .includes("grammar explanation") && (
                          <>
                            {section.examples.map((example, index) => {
                              if (example.example.includes("#")) {
                                const parts = example.example.split("#");
                                return (
                                  <div
                                    key={index}
                                    className="example-container"
                                  >
                                    <p className="mt-5 leading-10 text-[1rem]">
                                      {parse(parts[0])}
                                    </p>
                                    {parts[1] && (
                                      <div>
                                        <h1 className="md:text-xl text-lg font-bold mt-1 text-second">
                                          ឧទាហរណ៍:
                                        </h1>
                                        <p className="mt-3 text-[1rem]">
                                          {parse(parts[1])}
                                        </p>
                                      </div>
                                    )}
                                  </div>
                                );
                              } else {
                                return (
                                  <div key={index}>
                                    {index === 0 && (
                                      <h1 className="md:text-xl text-lg font-bold mt-1 text-second">
                                        ឧទាហរណ៍:
                                      </h1>
                                    )}
                                    <p className="mt-3 text-[1rem]">
                                      {parse(example.example)}
                                    </p>
                                  </div>
                                );
                              }
                            })}
                          </>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {lessonsById?.exercises?.map((exercise) => {
            console.log("Each exercise", exercise);
            return (
              <>
                <ExerciseComponet key={exercise.ex_uuid} exercise={exercise} />
              </>
            );
          })}
        </main>
      </div>
    </>
  );
}
