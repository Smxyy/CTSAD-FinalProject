import React from 'react';
import parse from "html-react-parser";
import { BsPatchCheck } from 'react-icons/bs';
import { BsSignpost } from 'react-icons/bs';
import { Button } from 'flowbite-react';
export default function LessonTest() {
    const lesson = {
      "title": "English Language Practice",
      "thumbnail": "http://example.com/thumbnail.jpg",
      "description": "Practice your English skills with a variety of exercises, including fill-in-the-blank, multiple choice, and true/false questions.",
      "tip": "Remember to review the reading material before answering the questions.",
      "reading_text": "<b>English Grammar Essentials</b><br> In this exercise, you will test your knowledge of key grammar points.<br> Be sure to read each question carefully before selecting your answer.",
      "video": null,
      "voice": "http://example.com/voice.mp3",
      "transcript": "Transcript of the reading text.",
      "q_uuids": [
        "1","2","3","4","5", "6", "7"
      ],
      "questions": [
        {
          "question_text": "Select the colors of the French flag:",
          "voice": "",
          "video": "",
          "image": "",
          "type": "MULTIPLE_CHOICES",
          "question_level": "A1",
          "correct_answer": [
            {
              "answer": "Blue"
            },
            {
              "answer": "White"
            },
            {
              "answer": "Red"
            }
          ],
          "choices": [
            {
              "text": "Green",
              "is_correct": false
            },
            {
              "text": "Blue",
              "is_correct": true
            },
            {
              "text": "Yellow",
              "is_correct": false
            },
            {
              "text": "White",
              "is_correct": true
            },
            {
              "text": "Red",
              "is_correct": true
            }
          ]
        },
        {
          "question_text": "Which of the following are fruits?",
          "voice": "",
          "video": "",
          "image": "",
          "type": "MULTIPLE_CHOICES",
          "question_level": "A1",
          "correct_answer": [
            {
              "answer": "Apple"
            },
            {
              "answer": "Banana"
            },
            {
              "answer": "Orange"
            }
          ],
          "choices": [
            {
              "text": "Carrot",
              "is_correct": false
            },
            {
              "text": "Apple",
              "is_correct": true
            },
            {
              "text": "Banana",
              "is_correct": true
            },
            {
              "text": "Orange",
              "is_correct": true
            },
            {
              "text": "Cucumber",
              "is_correct": false
            }
          ]
        },
        {
          "question_text": "Complete the sentence: The cat # on the mat.",
          "voice": "",
          "video": "",
          "image": "",
          "type": "FILL_IN_THE_BLANK",
          "question_level": "A2",
          "correct_answer": [
            {
              "answer": "is sitting"
            }
          ],
          "choices": []
        },
        {
          "question_text": "What is the capital of France?",
          "voice": "",
          "video": "",
          "image": "",
          "type": "MULTIPLE_CHOICES",
          "question_level": "A1",
          "correct_answer": [
            {
              "answer": "Paris"
            }
          ],
          "choices": [
            {
              "text": "Berlin",
              "is_correct": false
            },
            {
              "text": "Paris",
              "is_correct": true
            },
            {
              "text": "Rome",
              "is_correct": false
            }
          ]
        },
        {
          "question_text": "The Earth revolves around the Sun. True or False?",
          "voice": "",
          "video": "",
          "image": "",
          "type": "TRUE_OR_FALSE",
          "question_level": "A2",
          "correct_answer": [
            {
              "answer": "True"
            }
          ],
          "choices": [
            {
              "text": "True",
              "is_correct": true
            },
            {
              "text": "False",
              "is_correct": false
            }
          ]
        },
        {
          "question_text": "Choose the correct form: They _____ dinner when I called.",
          "voice": "",
          "video": "",
          "image": "",
          "type": "MULTIPLE_CHOICES",
          "question_level": "B1",
          "correct_answer": [
            {
              "answer": "were having"
            }
          ],
          "choices": [
            {
              "text": "was having",
              "is_correct": false
            },
            {
              "text": "were having",
              "is_correct": true
            },
            {
              "text": "had",
              "is_correct": false
            }
          ]
        },
        {
          "question_text": "Fill in the blank: She # to the store every Sunday.",
          "voice": "",
          "video": "",
          "image": "",
          "type": "FILL_IN_THE_BLANK",
          "question_level": "A2",
          "correct_answer": [
            {
              "answer": "goes"
            }
          ],
          "choices": []
        }
      ]
    }; 
  const groupedQuestions = lesson?.questions?.reduce((groups, question) => {
    const { type } = question;
    if (!groups[type]) {
        groups[type] = [];
    }
    groups[type].push(question);
    return groups;
}, {});
  return (
    <>
    <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
        <span class="sr-only">Open sidebar</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
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
          aria-label="Sidebar">
          <div className="h-full px-3 w-[160px] overflow-y-auto bg-white pb-8 ">
            <ul className="space-y-4 font-suwannaphum">
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            </ul>
          </div>
        </aside>
        <main className="flex-1 md:px-[28px] md:pb-[28px] pb-[28px] px-[20px]">
          <div>
            <div className="md:p-[40px] lg:p-[40px] p-[20px] bg-[#f5f5f5]">
              <div className="flex gap-4 flex-col  lg:flex-row">
                <img src={lesson?.thumbnail || Listening}
                  alt=""
                  className="w-[350px] object-cover rounded-lg"
                />
                <div className="">
                  <h2 className="w-fit  bg-[#ffc30e] md:px-20 px-10 py-2 text-white font-bold text-lg">
                    {lesson?.title || "No title"}
                  </h2>
                  <div className="flex gap-4 mt-4 text-grays items-center">
                    <BsPatchCheck className=" text-[60px] lg:text-2xl md:text-xl text-second" />
                    <p className="lg:text-xl text-[18px] md:line-clamp-none line-clamp-1">
                      {lesson?.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {lesson.voice && (
              <div className="mt-7">
              <audio
                controls
                className="w-full"
                src={lesson.voice}
              ></audio>
            </div>
            )}
            {lesson?.transcript &&
            (
              <div className="bg-gray-300 mt-7">
              <h2 className="w-full bg-[#ffc30e] px-10 py-2 text-[#F5F5F5] text-xl font-bold">
                ការសន្ទនា
              </h2>
              <div className="bg-[#faf5e6] md:p-[40px] lg:p-[40px] p-[20px]">
                <div className="px-8 py-6 border-2 bg-white rounded-xl">
                  <p className="text-[20px] leading-[3rem]">
                    {parse(`${lesson?.transcript}`)}
                  </p>
                </div>
              </div>
            </div>
            )}
            {lesson.reading_text && (
              <div className="bg-gray-300 mt-7">
                <h2 className="w-full bg-[#ffc30e] px-10 py-2 text-[#F5F5F5] text-xl font-bold">
                  អត្ថបទអំណាន
                </h2>
                <div className="bg-[#faf5e6] md:p-[40px] lg:p-[40px] p-[20px]">
                  <div className="px-8 py-6 border-2 bg-white rounded-xl">
                    <p className="text-[20px] leading-[3rem]">
                      {parse(lesson?.reading_text)}
                    </p>
                  </div>
                </div>
              </div>
            )}
            {lesson.tip && (
              <div className="bg-gray-300 mt-7">
                <h2 className="w-full bg-[#ffc30e] px-10 py-2 text-[#F5F5F5] text-xl font-bold">
                  គន្លឹះ
                </h2>
                <div className="bg-[#faf5e6] md:p-[40px] lg:p-[40px] p-[20px]">
                  <div className="px-8 py-6 border-2 bg-white rounded-xl">
                    <div className="text-[20px] leading-[3rem]">
                      {parse(lesson?.tip)}
                      {/* <div dangerouslySetInnerHTML={{ __html: lesson.tip }} /> */}
                    </div>
                  </div>
                </div>
              </div>
            )}
             <div className="b-gray-300">
              <h2 className="w-full bg-[#ffc30e] px-10 py-2 text-[#F5F5F5] text-xl font-bold mt-7">
              លំហាត់អនុវត្តន៍
              </h2>
              <div className="bg-[#faf5e6] md:p-[40px] lg:p-[40px] p-[20px]">
                <div className="p-8 border-2 bg-white rounded-xl">
                <h1 className="text-primary text-2xl">
                  {lesson.title || "Vocabulary Exercise"}
                </h1>
                {groupedQuestions && Object.keys(groupedQuestions).map((type, index) => (
                  <>
                  {
                  // console.log("type:",type)
                  type === "FILL_IN_THE_BLANK" && (
                    <>
                    <div className="flex items-center mt-4 ml-4 gap-3 text-lg">
                      <BsSignpost className="text-gray-400" />
                        <p className="text-gray-400 text-xl">
                          {"ចូរបំពេញចន្លោះឱ្យបានត្រឹមត្រូវ"}
                        </p>
                    </div>
                    <>
                    {groupedQuestions[type].map((question, qIndex) => (
                      (lesson.title.toLowerCase().includes("spelling") || question.voice ) ? 
                      (
                        <div className="flex ml-4 mt-2 items-center gap-4 flex-row text-xl">
                        <span className="flex items-center gap-3">
                          {qIndex + 1}.
                          {isLoading && loadingIndex === qIndex ? (
                            <img
                              src={loading}
                              alt="Loading..."
                              className="w-[36px]"
                            />
                          ) : (
                            <>
                              <audio
                                ref={(el) => (audioRefs.current[qIndex] = el)}
                                // id={index+1}
                                id = {qIndex + 1}
                                src={question.voice}
                              ></audio>
                              <BsVolumeUp
                                className={`audio-button border-2 border-gray-200 p-1 text-4xl text-black rounded-md ${qIndex === 0 ? 'm-[2px]' : ''}`}
                                onClick={() => playAudio(qIndex)}
                              />
                            </>
                          )}
                        </span>
                        {question.question_text
                          .split("#")
                          .map((part, partIndex) => (
                            <React.Fragment key={partIndex}>
                              <span className="text-xl">{part}</span>
                              {partIndex <
                                question.question_text.split("#").length -
                                  1 && (
                                <input
                                  type="text"
                                  // ${getInputClass(question,index+1 , partIndex)} 
                                  // ${showResult && question.choices.map((choice, indexA)=>{
                                  //   {Object.entries(userAnswer).map(([q_uuid, answers]) => {
                                  //     console.log("answer in condition:",answers)
                                  //     console.log("choice text:",choice.text)
                                  //     return answers === choice.text && q_uuid === index+1 ? 'border-green-300 text-green-300' : 'border-red-500 text-red-400'
                                  //   })
                                  //   }
                                  // })} 
                                  className={`w-[120px] text-xl border rounded-md focus:border-pink-200 focus:ring-pink-20 text-center`}
                                  // value={                             
                                  //   (inputValues[index+1] &&
                                  //     inputValues[index+1][
                                  //       partIndex
                                  //     ]) ||
                                  //   ""
                                  // }
                                  // onChange={(e) =>
                                  //   onAnswerChange(
                                  //     index+1,
                                  //     e.target.value,
                                  //     partIndex
                                  //   )
                                  // }
                                />
                              )}
                            </React.Fragment>
                          ))}
                      </div>
                      ) : 
                      (
                        <div className="flex ml-4 mt-2 items-center gap-4 flex-row text-xl">
                        {`${qIndex + 1}.`}
                        {question.question_text
                          .split("#")
                          .map((part, partIndex) => (
                            <React.Fragment key={partIndex}>
                              <span>{part}</span>
                              {partIndex <
                                question.question_text.split("#").length -
                                  1 && (
                                <input
                                  type="text"
                                  className="w-[110px] border rounded-md border-gray-200 focus:border-pink-200 focus:ring-pink-200"
                                  // value={
                                  //   (inputValues[index+1] &&
                                  //     inputValues[index+1][
                                  //       partIndex
                                  //     ]) ||
                                  //   ""
                                  // }
                                  // onChange={(e) =>
                                  //   onAnswerChange(
                                  //     index+1,
                                  //     e.target.value,
                                  //     partIndex
                                  //   )
                                  // }
                                />
                              )}
                            </React.Fragment>
                          ))}
                      </div>
                    )
                    ))}
                  </>
                    </>
                  )}

                  {type === "TRUE_OR_FALSE" && (
                    <>
                    <div className="flex items-center mt-4 ml-4 gap-3 text-lg">
                      <BsSignpost className="text-gray-400" />
                        <p className="text-gray-400 text-xl">
                          {"តើប្រយោគនេះត្រូវ ឬខុស?"}
                        </p>
                    </div>
                    
                    {groupedQuestions[type].map((question, qIndex) => (
                  <div className="flex gap-3 flex-col ml-4 mt-3 text-xl">
                    <div className="flex gap-2">
                      <span>{`${qIndex + 1}.`}</span>
                      <p>{question.question_text}</p>
                    </div>
                    {question.choices.map((choice) => (
                      <div key={choice.choice_uuid}>
                        <input
                          className="me-3"
                          type="radio"
                          id={`${choice.choice_uuid}`}
                          name={`choice-${question.q_uuid}`}
                          value={choice.text}
                          // onChange={(e) =>
                          //   onAnswerChange(question.q_uuid, e.target.value)
                          // }
                          // checked={
                          //   selectedAnswers[question.q_uuid] === choice.text
                          // }
                          // disabled={showResult}
                          // onClick={() =>
                          //   unselectRadio(
                          //     `choice-${question.q_uuid}`,
                          //     `${question.q_uuid}`
                          //   )
                          // }
                        />
                        <label
                          htmlFor={`${choice.choice_uuid}`}
                          // className={`${
                          //   showResult &&
                          //   (choice.is_correct
                          //     ? "text-green-500"
                          //     : selectedAnswers[question.q_uuid] === choice.text
                          //     ? "text-red-500"
                          //     : "")
                          // }`}
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
                      {groupedQuestions[type].map((question, qIndex) => (
                        <>
                        {question.correct_answer.length > 1 && 
                        (<div className="flex items-center mt-4 ml-4 gap-3 text-lg">
                        <BsSignpost className="text-gray-400" />
                        <p className="text-gray-400 text-xl">
                          {"ចូរជ្រើសរើសគ្រប់ចម្លើយដែលត្រឹមត្រូវ"}
                        </p>
                      </div>) 
                      } 
                      {question.correct_answer.length < 2 && 
                        (<div className="flex items-center mt-4 ml-4 gap-3 text-lg">
                        <BsSignpost className="text-gray-400" />
                        <p className="text-gray-400 text-xl">
                        {"ចូរជ្រើសរើសចម្លើយឱ្យបានត្រឹមត្រូវ"}
                        </p>
                      </div>) 
                      } 
                        <div className="flex gap-3 flex-col ml-4 mt-3 text-xl" key={question.q_uuid}>
                          <div className="flex gap-2">
                            <span>{`${qIndex + 1}.`}</span>
                            <p>{question.question_text}</p>
                          </div>
                  
                          {question.correct_answer.length > 1 ? (
                            // Render checkboxes if more than one correct answer
                            question.choices.map((choice) => (
                              <div key={choice.choice_uuid}>
                                <input
                                  className="me-3"
                                  type="checkbox"
                                  id={`${choice.choice_uuid}`}
                                  name={`choice-${question.q_uuid}`}
                                  value={choice.text}
                                />
                                <label
                                  htmlFor={`${choice.choice_uuid}`}
                                >
                                  {choice.text || "No choice"}
                                </label>
                              </div>
                            ))
                          ) : (<>
                          
                            {question.choices.map((choice) => (
                              <div key={choice.choice_uuid}>
                                <input
                                  className="me-3"
                                  type="radio"
                                  id={`${choice.choice_uuid}`}
                                  name={`choice-${question.q_uuid}`}
                                  value={choice.text}
                                />
                                <label
                                  htmlFor={`${choice.choice_uuid}`}>
                                  {choice.text || "No choice"}
                                </label>
                              </div>
                            ))}
                          </>)}
                        </div>
                        </>
                      ))}
                    </>
                  )}
                  </>
                  
                  
        ))}

                  <div className="flex gap-4 mt-5 md:flex-row flex-col">
                    <Button
                      color="blue"
                      className="w-fit"
                    >
                      បញ្ចួន
                    </Button>
                    <Button
                      color="blue"
                      className="w-fit"
                    >
                      ម្តងទៀត
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
