import React, { useState, useRef } from "react";
import { Button, Modal } from "flowbite-react";
import { BsVolumeUp, BsSignpost } from "react-icons/bs";
import loading from "../../assets/img/loading.gif";
import { getAccessToken } from "../../lib/secureLocalStorage";
import { useDispatch, useSelector } from "react-redux";
import parse from "html-react-parser"
import {
  selectSubmit,
  submitAnswer,
} from "../../redux/features/submit/submitSlice";
import "../../pages/lesson-detail-page/lesson.css";
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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import voicewin10 from "../../assets/video/win5.mp3";
const notify = () => toast.error("សូមបញ្ចូលចម្លើយឱ្យបានគ្រប់សំណួរ");
//import { fetchExcersiceById } from "../../redux/features/lessondetail/lessondetailSlice";
import { useEffect } from "react";
import { fetchUserData, selectUsers } from "../../redux/verify/verifyUserSlice";
import { fetchResubmitExercise } from "../../redux/features/resubmit/reSumitSlice";
import { validateYupSchema } from "formik";
const IELTSSkillExerciseComponent = ({ exercise, key }) => {
  const [score, setScore] = useState(0);
  const submits = useSelector(selectSubmit);
  useEffect(() => {
    if (submits?.payload?.exercises?.scores !== undefined) {
      setScore(submits.payload.exercises.scores);
    }
  }, [submits]);
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
  const [scoreSound, setScoreSound] = useState(null);
  // const audioRefs = useRef({});
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [inputValues, setInputValues] = useState({});
  const [showResult, setShowResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingIndex, setLoadingIndex] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [showScore, setShowScore] = useState(false);
  const dispatch = useDispatch();
  const [answersToShow, setAnswersToShow] = useState({});
  const audioRefs = useRef([]);
  const spanRefs = useRef([]);
  const [scoreArray, setScoreArray] = useState({});
  const [correct_answer, setCorrectAnswer] = useState([]);
  const checkCorrectAnswer = (question) => {
    question.correct_answer.map((answer, aIndex) =>{
      correct_answer[question.q_uuid] = answer.answer;
    })
  }

  useEffect(() => {
    if (openModal && scoreSound) {
      scoreSound.loop = true;
      scoreSound.currentTime = 0;
      scoreSound.play();
    } else if (scoreSound) {
      scoreSound.loop = false;
      scoreSound.pause();
    }
  }, [openModal, scoreSound]);

  const unselectRadio = (name, q_uuid) => {
    const radioBtns = document.querySelectorAll(
      "input[type='radio'][name='" + name + "']"
    );
    radioBtns.forEach((radioBtn) => {
      if (radioBtn.checked === true) {
        radioBtn.checked = false;
      }
    });
    onAnswerChange(q_uuid, "");
  };

  const playAudio = (index) => {
    const audio = audioRefs.current[index];
    setLoadingIndex(index);
    setIsLoading(true);

    setTimeout(() => {
      audio.play();
      audio.onplaying = () => {
        setIsLoading(false);
        setLoadingIndex(null);
      };
      audio.onended = () => {
        setIsLoading(false);
        setLoadingIndex(null);
      };
    }, 1000);
  };

  const onAnswerChange = (questionId, value, inputIndex = null) => {
    setSelectedAnswers((prevAnswers) => {
      const updatedAnswers = { ...prevAnswers };
      if (inputIndex !== null) {
        if (!updatedAnswers[questionId]) {
          updatedAnswers[questionId] = [];
        }
        updatedAnswers[questionId][inputIndex] = value;
      } else {
        updatedAnswers[questionId] = value;
      }
      return updatedAnswers;
    });

    setInputValues((prevValues) => {
      const updatedValues = { ...prevValues };
      if (inputIndex !== null) {
        if (!updatedValues[questionId]) {
          updatedValues[questionId] = [];
        }
        updatedValues[questionId][inputIndex] = value;
      } else {
        updatedValues[questionId] = value;
      }
      return updatedValues;
    });
  };
  const token = getAccessToken();
  useEffect(() => {
    console.log("token before dispatching the fetchUserData:", token);
    if (token) {
      dispatch(fetchUserData(token));
    }
  }, [dispatch, token]);

  const user = useSelector(selectUsers);
  const uid = user?.user_uuid;
  console.log("user in Exercise:", user);
  const handleSubmit = async (lexerciseUuid, excersice) => {
    const unansweredQuestions = excersice?.questions?.filter(
      (question) => !selectedAnswers[question.q_uuid]
    );

    if (unansweredQuestions.length > 0) {
      notify();
      //new alert
      return;
    }

    const userAnswers = Object.entries(selectedAnswers).map(
      ([q_uuid, answer]) => ({
        q_uuid,
        answers: Array.isArray(answer) ? answer : [answer],
      })
    );
    const dataToSubmit = {
      user_uuid: uid || "", // Replace, this with dynamic user UUID if available
      user_answer: userAnswers,
    };
    console.log("token", getAccessToken());
    
    if (lexerciseUuid) {
      try {
        const response = await dispatch(
          submitAnswer({ uuid: lexerciseUuid, ...dataToSubmit })
        );
        setIsSubmitted(true); // Mark as submitted
        setShowResults(true);
        handleShowAnswers(lexerciseUuid);
        setShowScore(true); // Ensure score is shown after submission
        setOpenModal(true);
        console.log("response in exercise:", response);
        const points = response.payload.payload.exercises.scores;
        scoreArray[lexerciseUuid] = parseFloat(points);
        console.log("scoreArray:", scoreArray[lexerciseUuid]);
        // Determine which sound to play based on the score
        const soundToPlay = points >= 5 ? randomVoiceWin : randomVoiceLose;
        //const scoreSound = new Audio(soundToPlay);
        setScoreSound(new Audio(soundToPlay));
        // Open modal after submission
      } catch (error) {
        console.error("Submit Error:", error);
      }
    }
  };

  const handleTryAgain = (user_uuid, lexerciseUuid) => {
    setSelectedAnswers({});
    setAnswersToShow({});
    setInputValues({});
    setShowResults(false);
    setOpenModal(false);
    setScore(0);
    setShowScore(false); // Reset showScore
    setIsSubmitted(false); // Reset isSubmitted
    console.log("Exercise UUID:", lexerciseUuid);
    const exercise_uuids = [lexerciseUuid];
    dispatch(
      fetchResubmitExercise({ user_uuid, exercises_uuids: exercise_uuids })
    );
  };

  const handleShowAnswers = (lexerciseUuid) => {
    if (lexerciseUuid?.questions) {
      const answers = lexerciseUuid.questions.reduce((acc, question) => {
        const correctChoice = question.choices.find(
          (choice) => choice.is_correct
        );
        acc[question.q_uuid] = {
          correctChoice: correctChoice.text,
        };
        return acc;
      }, {});
      setAnswersToShow({ answers });
    }
  };

  const handleShowScore = (lexerciseUuid) => {
    if (isSubmitted) {
      console.log("exercise in handleScore:", lexerciseUuid);
      const newScore = scoreArray[lexerciseUuid];
      console.log("new score: ", newScore);
      if (newScore !== undefined) {
        setScore(newScore);
        setShowScore(true);
        setOpenModal(true);
      } else {
        console.error("Score not found for exercise:", lexerciseUuid);
      }
    } else {
      alert("Please submit your answers first.");
    }
  };

  const groupedQuestions = exercise?.questions?.reduce((groups, question) => {
    const { type } = question;
    if (!groups[type]) {
        groups[type] = [];
    }
    groups[type].push(question);
    return groups;
}, {});

  useEffect(() => {
    // Check if inputValues is empty, which means the "Try Again" button was clicked
    if (Object.keys(inputValues).length === 0) {
      // Reset all input widths to the default 100px
      const allInputElements = document.querySelectorAll(`input[data-q_uuid]`);
      allInputElements.forEach((input) => {
        input.style.width = "100px";
      });
    } else {
      // Update the width of each input based on its corresponding span
      Object.keys(inputValues).forEach((q_uuid) => {
        if (spanRefs.current[q_uuid]) {
          const inputElements = document.querySelectorAll(`input[data-q_uuid="${q_uuid}"]`);
          inputElements.forEach((input, index) => {
            const spanWidth = spanRefs.current[q_uuid][index].offsetWidth;
            input.style.width = `${Math.max(spanWidth + 50, 100)}px`; // 10px for padding, 50px is the minimum width
          });
        }
      });
    }
  }, [inputValues]);

  return (
    <>
      <ToastContainer />
      <div className="bg-gray-300 mt-5">
        <h2 className="w-full bg-[#ffc30e] px-10 py-2 text-[#F5F5F5] text-xl font-bold">
          លំហាត់អនុវត្តន៍
        </h2>
        <div className="bg-[#faf5e6] md:p-[40px] lg:p-[40px] p-[20px]">
          <div className="p-8 border-2 bg-white rounded-xl">
            <h1 className="text-primary text-2xl">
              {parse(exercise?.title || "Vocabulary Exercise")}
            </h1>
            {groupedQuestions && Object.keys(groupedQuestions).map((type, index) => (
                  <>
                    {type === "FILL_IN_THE_BLANK" && (
                      <>
                        <div className="flex items-center mt-4 ml-4 gap-3 text-lg text-second">
                          <BsSignpost />
                          <p className="text-xl">{"ចូរបំពេញចន្លោះឱ្យបានត្រឹមត្រូវ"}</p>
                        </div>
                        {groupedQuestions[type].map((question, qIndex) => (
                          <div key={qIndex}>
                            {checkCorrectAnswer(question)}
                            {qIndex === 0 && question?.choices.length > 1 && (
                              <div className="inline-flex flex-wrap p-3 m-4 bg-slate-200 rounded-md">
                                {question.choices.map((choice, choiceIndex) => (
                                  <span
                                    key={choiceIndex}
                                    className="px-4 py-2 m-1 text-xl bg-slate-50 border border-gray-300 rounded-md">
                                    {parse(choice.text)}
                                  </span>
                                ))}
                              </div>
                            )}
                            <div className="flex flex-row flex-wrap ml-4 mt-2 items-center gap-4 text-xl">
                              <span className="flex items-center gap-3">
                                {`${qIndex + 1}. `}
                                {question.voice && isLoading && loadingIndex === qIndex ? (
                                  <img src={loading} alt="Loading..." className="w-[36px]" />
                                ) : question.voice ? (
                                  <>
                                    <audio
                                      ref={(el) => (audioRefs.current[qIndex] = el)}
                                      id={qIndex + 1}
                                      src={question.voice}
                                    ></audio>
                                    <BsVolumeUp
                                      className={`audio-button border-2 border-gray-200 p-1 text-4xl text-black rounded-md ${
                                        qIndex === 0 ? "m-[2px]" : ""}`}
                                      onClick={() => playAudio(qIndex)}
                                    />
                                  </>
                                ) : null}
                              </span>
                              <div className={`cursor-pointer flex flex-wrap items-center gap-2 ${qIndex === 0 ? "m-[2px]" : ""}`}>
                                {question.question_text.split("#").map((part, partIndex) => (
                                  <React.Fragment key={partIndex}>
                                    <label htmlFor={`choice-${question.q_uuid}-${qIndex}`} className="cursor-pointer ml-2 flex flex-row gap-2 mt-1">
                                    <span className="text-xl">{parse(part)}</span>
                                    {partIndex < question.question_text.split("#").length - 1 && (
                                      <>
                                        <span
                                          ref={(el) => {
                                            if (!spanRefs.current[question.q_uuid])
                                              spanRefs.current[question.q_uuid] = [];
                                            spanRefs.current[question.q_uuid][partIndex] = el;
                                          }}
                                          className="invisible absolute whitespace-pre">
                                          {inputValues[question.q_uuid]?.[partIndex] || " "}
                                        </span>
                                        <input
                                          id={`choice-${question.q_uuid}-${qIndex}`}
                                          name={`choice-${question.q_uuid}`}
                                          type="text"
                                          className={`cursor-pointer px-3 w-[100px] text-xl border rounded-md border-gray-300 text-gray-300 focus:border-pink-200 focus:ring-pink-20 text-center  ${
                                            showResult
                                              ? inputValues[question.q_uuid]?.[partIndex] ===
                                                correct_answer[question.q_uuid]
                                                ? "text-green-500 border-green-500"
                                                : "text-red-500 border-red-500"
                                              : "border-gray-300 text-gray-700 focus:border-pink-200 focus:ring-pink-200"
                                          }`}
                                          data-q_uuid={question.q_uuid}
                                          value={inputValues[question.q_uuid]?.[partIndex] || ""}
                                          onChange={(e) =>
                                            onAnswerChange(
                                              question.q_uuid,
                                              e.target.value,
                                              partIndex
                                            )
                                          }
                                        />
                                        {showResult ? (
                                          inputValues[question.q_uuid]?.[partIndex] ===
                                          correct_answer[question.q_uuid] ? (
                                            <></>
                                          ) : (
                                            <p className="text-green-500 mt-2 ml-2">
                                              {`(${correct_answer[question.q_uuid]})`}
                                            </p>
                                          )
                                        ) : (
                                          <></>
                                        )}
                                      </>
                                    )}
                                     </label>
                                  </React.Fragment>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </>
                    )}

                    {type === "TRUE_OR_FALSE" && (
                      <>
                      <div className="flex items-center mt-4 ml-4 gap-3 text-lg text-second">
                        <BsSignpost />
                          <p className=" text-xl">
                            {"តើប្រយោគនេះត្រូវ ឬខុស?"}
                          </p>
                      </div>
                      
                      {groupedQuestions[type].map((question, qIndex) => (
                    <div className="flex gap-3 flex-col ml-4 mt-3 text-xl">
                      <div className="flex gap-2">
                        <span>{`${qIndex + 1}.`}</span>
                        <p>{parse(question.question_text)}</p>
                      </div>
                      {question.choices.map((choice) => (
                        <div key={choice.choice_uuid}>
                          <input
                            className="me-3 cursor-pointer"
                            type="radio"
                            id={`${choice.choice_uuid}`}
                            name={`choice-${question.q_uuid}`}
                            value={choice.text}
                            onChange={(e) =>
                              onAnswerChange(question.q_uuid, e.target.value)
                            }
                            checked={
                              selectedAnswers[question.q_uuid] === choice.text
                            }
                            disabled={showResult}
                            onClick={() =>
                              unselectRadio(
                                `choice-${question.q_uuid}`,
                                `${question.q_uuid}`
                              )
                            }
                          />
                          <label
                            htmlFor={`${choice.choice_uuid}`}
                            className={`cursor-pointer ${
                              showResult &&
                              (choice.is_correct
                                ? "text-green-500"
                                : selectedAnswers[question.q_uuid] === choice.text
                                ? "text-red-500"
                                : "")
                            }`}
                          >
                            {choice.text || "No choice"}
                          </label>
                        </div>
                      ))}
                    </div>
                      ))}
                      </>
                    )}

                    {type === "MULTIPLE_CHOICES" && (
                      <>
                      <div className="flex items-center mt-4 ml-4 gap-3 text-lg text-second">
                        <BsSignpost  />
                          <p className=" text-xl">
                            {"ចូរជ្រើសរើសចម្លើយឱ្យបានត្រឹមត្រូវ"}
                          </p>
                      </div>
                      
                      {groupedQuestions[type].map((question, qIndex) => (
                    <div className="flex gap-3 flex-col ml-4 mt-3 text-xl">
                      <div className="flex gap-2">
                        <span>{`${qIndex + 1}.`}</span>
                        <p>{parse(question.question_text)}</p>
                      </div>
                      {question.choices.map((choice) => (
                        <div key={choice.choice_uuid}>
                          <input
                            className="me-3 cursor-pointer"
                            type="radio"
                            id={`${choice.choice_uuid}`}
                            name={`choice-${question.q_uuid}`}
                            value={choice.text}
                            onChange={(e) =>
                              onAnswerChange(question.q_uuid, e.target.value)
                            }
                            checked={
                              selectedAnswers[question.q_uuid] === choice.text
                            }
                            disabled={showResult}
                            onClick={() =>
                              unselectRadio(
                                `choice-${question.q_uuid}`,
                                `${question.q_uuid}`
                              )
                            }
                          />
                          <label
                            htmlFor={`${choice.choice_uuid}`}
                            className={`cursor-pointer ${
                              showResult &&
                              (choice.is_correct
                                ? "text-green-500"
                                : selectedAnswers[question.q_uuid] === choice.text
                                ? "text-red-500"
                                : "")
                            }`}
                          >
                            {choice.text || "No choice"}
                          </label>
                        </div>
                      ))}
                    </div>
                      ))}
                      </>
                    )}
                  </>
        ))}
            <div className="flex gap-4 mt-5 md:flex-row flex-col">
              <Button
                id={key}   
                color="blue"            
                onClick={() => handleSubmit(exercise.ex_uuid, exercise)}
                disabled={showResult}
                className="w-fit"
              >
                បញ្ចូន
              </Button>
              <Button
                color="blue"
                onClick={() => handleTryAgain(uid, exercise.ex_uuid)}
                className="w-fit"
              >
                ម្តងទៀត
              </Button>
              {isSubmitted && (
                <Button
                  color="blue"
                  onClick={() => handleShowScore(exercise.ex_uuid)}
                  className="w-fit"
                >
                  ពិន្ទ
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
      {console.log("score: ", score)}
      <div
        id="popup-modal"
        tabIndex="-1"
        className={`fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden h-full bg-black bg-opacity-50 ${
          openModal ? (score >= 5 ? "sucess-new" : "faild-new") : "hidden"
        }`}
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow">
            <button
              type="button"
              className="absolute top-3 right-2.5  bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={() => setOpenModal(false)}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="p-4 md:p-5 text-center">
              {score >= 5 ? (
                <img
                  src={randomImgWin}
                  alt=""
                  className="mx-auto mb-4 w-20 object-cover"
                />
              ) : (
                <img
                  src={randomImgLose}
                  alt=""
                  className="mx-auto mb-4 h-28 w-28 object-cover"
                />
              )}
              <h3 className="mb-5 text-3xl font-normal text-gray-500 dark:">
                {/* {submits?.message || "Submission Result"} */}
                {score >= 5 ? `${randomMessageWin}` : `${randomMessageLose}`}
              </h3>
              {showScore ? (
                <p className="text-xl">
                  <strong>ពិន្ទុសរុប:</strong> {score || 0}
                </p>
              ) : (
                <p>{submits?.payload?.excercises?.score}</p>
              )}
              <div className="flex justify-center gap-4 mt-3">
                <button
                  type="button"
                  className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                  onClick={() => setOpenModal(false)}
                >
                  បិទ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IELTSSkillExerciseComponent;
