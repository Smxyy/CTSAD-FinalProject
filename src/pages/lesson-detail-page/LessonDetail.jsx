import React, { useEffect, useState } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Listening from "../../assets/img/Listening.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsVolumeUp } from "react-icons/bs";
import { useRef } from "react";
import parse from "html-react-parser";
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
import DOMPurify from "dompurify";
import { submitAnswer } from "../../redux/features/submit/submitSlice";
import { selectSubmit } from "../../redux/features/submit/submitSlice";
import { Button, ListGroup, Modal } from "flowbite-react";
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
import { NavLink } from "react-router-dom";
import SkillExerciseComponent from "../../components/skill-exercise-component/SkillExerciseComponent";
import LoadingLessonDetail from "../../components/common/loading/LoadingLessonDetail";
export default function LessonDetail() {
  const param = useParams();
  console.log("param", param);
  const newtitle = param.title.replace(/-/g, " ");
  const convert = newtitle.toUpperCase();
  console.log("convert", convert);
  const excercises = useSelector(selectExcersice);
  const excersiceById = useSelector(selectExcersiceById);
  console.log("excersiceById in LessonDetail:", excersiceById);
  const skillNameLevels = useSelector(selectNameLevel);
  const submits = useSelector(selectSubmit);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userVerify.users);
  const status = useSelector((state) => state.userVerify.status);
  const error = useSelector((state) => state.userVerify.error);
  const succeeded = useSelector((state) => state.userVerify.succeeded);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [finaluuid, setFinaluuid] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [answersToShow, setAnswersToShow] = useState({});
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  // const submitAudio = new Audio(submitSound);
  // const incorrectAudio = new Audio(sad);
  const notify = () => toast("Wow so easy!");
  const modalBodyRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingLesson, setIsLoadingLesson] = useState(true);
  const audioRef = useRef(null);
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
  const [skillLevels, setskillLevels] = useState([]);
  console.log("skillLevelname:", skillNameLevels);
  const [audioUrl, setAudioUrl] = useState("");
  const [scoreSound, setScoreSound] = useState(null);
  useEffect(() => {
    dispatch(fetchUserData(getAccessToken()));
  }, []);
  useEffect(() => {
    dispatch(fetchExcersices());
  }, [dispatch]);
  useEffect(() => {
    if (excercises.length > 0) {
      const matchedExcersice = excercises.find(
        (e) => e.title.toUpperCase() === convert
      );
      if (matchedExcersice) {
        setFinaluuid(matchedExcersice.ex_uuid);
      }
    }
  }, [excercises, convert]);

  useEffect(() => {
    if (openModal && scoreSound) {
      scoreSound.loop = true;
      scoreSound.play();
    } else if (scoreSound) {
      scoreSound.loop = false;
      scoreSound.pause();
    }
  }, [openModal, scoreSound]);

  console.log("final uuid", finaluuid);
  useEffect(() => {
    if (finaluuid) {
      dispatch(fetchExcersiceById(finaluuid));
    }
  }, [finaluuid, dispatch]);
  const skill_level = param["skill_level-skill_name"];
  useEffect(() => {
    dispatch(fetchSkillNameLevel(skill_level));
  }, [dispatch, skill_level]);

  useEffect(() => {
    const filteredSkills = skillNameLevels.filter(
      (item) => !item.description.includes("IELTS")
    );
    setskillLevels(filteredSkills);
  }, [skillNameLevels]);

  useEffect(() => {
    if (submits?.payload?.exercises?.scores !== undefined) {
      setScore(submits.payload.exercises.scores);
    }
  }, [submits]);

  // useEffect(() =>{
  //   const fetchData = async () => {
  //     await new Promise((resolve) => setTimeout(resolve, 3000));
  //     setIsLoadingLesson(false);
  //   };

  //   fetchData();
  // })

  // if(isLoadingLesson){
  //   return <LoadingLessonDetail/>
  // }

  const handleChange = (questionId, answer) => {
    setSelectedAnswers((prevState) => ({
      ...prevState,
      [questionId]: answer,
    }));
  };

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
        //const scoreSound = new Audio(soundToPlay);
        setScoreSound(new Audio(soundToPlay));
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
    console.log("finaluuid", finaluuid);
    if (finaluuid) {
      dispatch(fetchExcersiceById(finaluuid));
      console.log("finaluuid", finaluuid);
    }
  };
  console.log("excersiceById", excersiceById);
  console.log("excercises", excercises);
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
  const playAudio = () => {
    const audio = audioRef.current;
    setIsLoading(true);

    // Play audio after a delay to show loading spinner
    setTimeout(() => {
      audio.play();
      // Listen for when the audio actually starts playing
      audio.onplaying = () => {
        setIsLoading(false);
      };
      audio.onended = () => {
        setIsLoading(false);
      };
    }, 1000); // 1000 milliseconds delay
  };

  const handleShowScore = () => {
    if (isSubmitted) {
      setShowScore(true);
      setOpenModal(true);
    } else {
      alert("Please submit your answers first.");
    }
  };
  const handleNavigation = (path) => {
    window.location.href = path;
  };
  console.log("excersice", excersiceById.voice);
  // const sanitizedHTML = DOMPurify.sanitize(excersiceById?.transcript);
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
          <div className="h-full px-4 w-[160px] overflow-y-auto bg-white pb-8 ">
            <ul className="space-y-4 font-bold">
              {skillLevels.map((selectNameLevel) =>
                selectNameLevel.exercises.map((excersice) => {
                  console.log("exercise:", excersice);
                  console.log("excersice.title", excersice.title);
                  const name = excersice.title.toLowerCase();
                  const formattedTitle = name.replace(/\s+/g, "-");
                  return (
                    <>
                      <li key={excersice.id} className="">
                        <NavLink
                          onClick={() =>
                            handleNavigation(
                              `/skills/${param.skill_name}/${param["skill_level-skill_name"]}/${formattedTitle}`
                            )
                          }
                          to={`/skills/${param.skill_name}/${param["skill_level-skill_name"]}/${formattedTitle}`}
                          className={({ isActive }) =>
                            isActive ? "text-primary" : "text-grays"
                          }
                        >
                          {excersice.title}
                        </NavLink>
                      </li>
                    </>
                  );
                })
              )}
            </ul>
          </div>
        </aside>
        <main className="flex-1 md:px-[28px] md:pb-[28px] pb-[28px] px-[20px]">
          <div>
            {excersiceById?.thumbnail &&
            <div className="md:p-[40px] lg:p-[40px] p-[20px] bg-[#f5f5f5]">
              <div className="flex gap-4 flex-col  lg:flex-row">
                <img
                  src={
                    excersiceById?.thumbnail 
                    ||
                    "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                  }
                  alt=""
                  className="w-[350px] object-cover rounded-lg"
                />
                <div className="">
                  <h2 className="w-fit  bg-[#ffc30e] md:px-20 px-10 py-2 text-white font-bold text-lg">
                    {excersiceById?.title 
                    || "No title"
                    }
                  </h2>
                  <div className="flex gap-4 mt-4 text-grays items-center">
                    <BsPatchCheck className=" text-[60px] lg:text-2xl md:text-xl text-second" />
                    <p className="lg:text-xl text-[18px] md:line-clamp-none line-clamp-1">
                      {excersiceById?.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            }
            {console.log("exercise:", excersiceById)}
            {excersiceById?.video && (
              <div className="bg-gray-300 mt-7">
                <h2 className="w-full bg-[#ffc30e] px-10 py-2 text-[#F5F5F5] text-xl font-bold">
                  វីដេអូ
                </h2>
                <div className="bg-[#faf5e6] md:p-[40px] lg:p-[40px] p-[20px]">
                  <div className="px-8 py-6 border-2 bg-white rounded-xl">
                    <div>
                      <video width="100%" controls>
                        <source src={excersiceById.video} type="video/mp4" />
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {excersiceById.voice && (
              <div className="mt-7">
                <audio
                  controls
                  className="w-full"
                  src={excersiceById?.voice}
                ></audio>
              </div>
            )}

            {excersiceById?.transcript &&
              excersiceById?.transcript !== "transcript for reading text" && (
                <div className="bg-gray-300 mt-7">
                  <h2 className="w-full bg-[#ffc30e] px-10 py-2 text-[#F5F5F5] text-xl font-bold">
                    ការសន្ទនា
                  </h2>
                  <div className="bg-[#faf5e6] md:p-[40px] lg:p-[40px] p-[20px]">
                    <div className="px-8 py-6 border-2 bg-white rounded-xl">
                      <p className="text-[20px] leading-[3rem]">
                        {parse(`${excersiceById?.transcript}`)}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            {excersiceById?.reading_text && (
              <div className="bg-gray-300 mt-7">
                <h2 className="w-full bg-[#ffc30e] px-10 py-2 text-[#F5F5F5] text-xl font-bold">
                  អត្ថបទអំណាន
                </h2>
                <div className="bg-[#faf5e6] md:p-[40px] lg:p-[40px] p-[20px]">
                  <div className="px-8 py-6 border-2 bg-white rounded-xl">
                    <p className="text-[20px] leading-[3rem]">
                      {parse(excersiceById?.reading_text)}
                    </p>
                  </div>
                </div>
              </div>
            )}
            {excersiceById.tip && (
              <div className="bg-gray-300 mt-7">
                <h2 className="w-full bg-[#ffc30e] px-10 py-2 text-[#F5F5F5] text-xl font-bold">
                  គន្លឹះ
                </h2>
                <div className="bg-[#faf5e6] md:p-[40px] lg:p-[40px] p-[20px]">
                  <div className="px-8 py-6 border-2 bg-white rounded-xl">
                    <p className="text-[20px] leading-[3rem]">
                      {parse(excersiceById?.tip)}
                    </p>
                  </div>
                </div>
              </div>
            )}
            {excersiceById.ex_uuid && 
              <SkillExerciseComponent
                key={excersiceById.ex_uuid}
                exercise={excersiceById}
              />
            }
          </div>
        </main>
      </div>
    </>
  );
}
