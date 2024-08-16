import React, { useEffect, useState } from "react";
import {
  BsPieChartFill,
  BsPersonLinesFill,
  BsPersonCheckFill,
} from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { BsBoxArrowInLeft } from "react-icons/bs";
import "./Style.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { AiFillPieChart } from "react-icons/ai";
import { IoCamera } from "react-icons/io5";
import Chart from "react-apexcharts";
import { useDispatch, useSelector } from "react-redux";
import { selectUsers } from "../../redux/verify/verifyUserSlice";
import { fetchUserData } from "../../redux/verify/verifyUserSlice";
import { getAccessToken } from "../../lib/secureLocalStorage";
import { fetchUpdateUserInfo } from "../../redux/features/user/userSlice";
import {
  selectFileURL,
  fetchUploadFile,
} from "../../redux/features/user/userSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import {
  fetchSubmitExercises,
  fetchSubmitExercisesByLevel,
  selectAllSubmitExercises,
  selectSubmitExercisesByLevel,
} from "../../redux/features/exerciseSubmit/exerciseSubmitSlice";
import {
  fetchExcersices,
  selectExcersice,
} from "../../redux/features/lessondetail/lessondetailSlice";

export default function Dashboard() {
  const validationSchema = Yup.object({
    user_name: Yup.string().required("សូមបញ្ជូលឈ្មោះរបស់អ្នក"),
    bio: Yup.string().required("សូមបញ្ជូលជីវប្រវតិ្តរបស់អ្នក"),
  });
  const dispatch = useDispatch();
  const [token, setToken] = useState("");
  const [status, setStatus] = useState(false);

  useEffect(() => {
    const token1 = getAccessToken();
    setToken(token1);
    // console.log("token before dispatching the fetchUserData:", token);
    if (token) {
      dispatch(fetchUserData(token));
    }
  }, [dispatch, token]);
  const user = useSelector(selectUsers);
  // console.log("user:", user);

  const handleUpdateProfile = async (
    user_uuid = user.user_uuid,
    token,
    user_name = user.user_name,
    profile = profileImage || user.profile, // Profile remains unchanged if no new value is provided
    bio = user.bio || ""
  ) => {
    try {
      // Prepare profile data
      const profileToUpdate = profileImage ? profileImage : user.profile;
      await dispatch(
        fetchUpdateUserInfo({
          user_uuid,
          user_name,
          profile: profileToUpdate,
          bio,
          token,
        })
      ).unwrap();
      toast.success("ទិន្នន័យរបស់អ្នកត្រូវបានកែប្រែបានជោគជ័យ");
      setStatus(true);
    } catch (error) {
      console.error("Update profile error:", error);
      toast.error(
        `ទិន្នន័យរបស់អ្នកត្រូវបានកែប្រែមិនបានជោគជ័យ: ${error.message}`
      );
      setStatus(false);
    }
  };

  const [profilePreview, setProfilePreview] = useState(user?.profile || "");
  const [profileImage, setProfileImage] = useState(user?.profile || "");
  const fileURL = useSelector(selectFileURL);

  const [exercises, setExercises] = useState({
    A1: {},
    A2: {},
    B1: {},
    B2: {},
    C1: {},
    C2: {},
  });

  const handleFileChange = async (event, setFieldValue) => {
    const selectedFile = event.currentTarget.files[0];
    if (selectedFile) {
      try {
        // Dispatch the thunk to upload the file
        const uploadResult = await dispatch(
          fetchUploadFile({ file: selectedFile })
        ).unwrap();
        const fileUrl = uploadResult.payload.file_urls[0].file_path;
        // Update Formik field value and state with the new file URL
        setFieldValue("profile", fileUrl);
        setProfilePreview(fileUrl);
        setProfileImage(fileUrl); // Update the profile image state
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };

  console.log("user:", user?.user_uuid);
  const userId = user?.user_uuid || "";

  useEffect(() => {
    if (userId && token) {
      dispatch(fetchSubmitExercises({ user_uuid: userId, token }));
    } else {
      console.error("User ID or token is missing.");
    }
  }, [dispatch, userId, token]);

  useEffect(() => {
    if (userId && token) {
      const levels = ["A1", "A2", "B1", "B2", "C1", "C2"];

      levels.forEach((level) => {
        const exercisePromise = dispatch(
          fetchSubmitExercisesByLevel({ user_uuid: userId, token, level })
        );

        exercisePromise
          .then((result) => {
            setExercises((prevExercises) => ({
              ...prevExercises,
              [level]: result,
            }));
            console.log(`${level} exercise:`, result);
          })
          .catch((error) => {
            console.error(`Error fetching ${level} exercise:`, error);
          });
      });
    } else {
      console.error("User ID or token is missing.");
    }
  }, [dispatch, userId, token]);

  const exerciseA1Data = exercises.A1.payload?.length;
  const exerciseA2Data = exercises.A2.payload?.length;
  const exerciseB1Data = exercises.B1.payload?.length;
  const exerciseB2Data = exercises.B2.payload?.length;
  const exerciseC1Data = exercises.C1.payload?.length;
  const exerciseC2Data = exercises.C2.payload?.length;
  console.log("exerciseA1Data:", exerciseA1Data);

  useEffect(() => {
    dispatch(fetchExcersices());
  }, [dispatch]);

  const submitExercises = useSelector(selectAllSubmitExercises);
  const allExercises = useSelector(selectExcersice);
  const groupedExercises = allExercises.reduce((acc, exercise) => {
    const level = exercise.exercise_level;

    // If the level doesn't exist in the accumulator, create it
    if (!acc[level]) {
      acc[level] = [];
    }

    // Add the current exercise to the corresponding level
    acc[level].push(exercise);

    return acc;
  }, {});
  const numAllExercises = allExercises?.length;
  const numAllSubmitExercises = submitExercises?.payload?.length;
  const total = (numAllSubmitExercises / numAllExercises) * 100;
  const totalA1 = parseFloat(
    ((exerciseA1Data / groupedExercises["A1"]?.length) * 100).toFixed()
  );
  const totalA2 = parseFloat(
    ((exerciseA2Data / groupedExercises["A2"]?.length) * 100).toFixed()
  );
  const totalB1 = parseFloat(
    ((exerciseB1Data / groupedExercises["B1"]?.length) * 100).toFixed()
  );
  const totalB2 = parseFloat(
    ((exerciseB2Data / groupedExercises["B2"]?.length) * 100).toFixed()
  );
  const totalC1 = parseFloat(
    ((exerciseC1Data / groupedExercises["C1"]?.length) * 100).toFixed()
  );
  const totalC2 = parseFloat(
    ((exerciseC2Data / groupedExercises["C2"]?.length) * 100).toFixed()
  );

  console.log("groupedExercises['A1']: ", groupedExercises["A1"]);

  const options = {
    xaxis: {
      categories: ["សរុបទាំងអស់", "C2", "C1", "B2", "B1", "A2", "A1"],
      labels: {
        show: true,
        style: {
          colors: [
            "#F16622",
            "#F16622",
            "#F16622",
            "#F16622",
            "#F16622",
            "#F16622",
            "#F16622",
          ],
          fontSize: "15px",
          fontFamily: "Suwannaphum",
        },
      },
    },
    markers: {
      size: 5,
      hover: {
        size: 10,
      },
    },
    plotOptions: {
      radar: {
        polygons: {
          strokeColor: "#e8e8e8",
          fill: {
            colors: ["#f8f8f8", "#fff"],
          },
        },
      },
    },
  };

  const series = [
    {
      name: "Exercises",
      data: [total, totalC2, totalC1, totalB2, totalB1, totalA2, totalA1],
      color: "#0EBC87",
    },
  ];

  return (
    <section>
      <nav className="fixed top-0 z-50 w-full bg-gray-100 border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
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
              <a href="/" className="flex ms-2 sm:block md:me-24">
                <img
                  src="http://136.228.158.126:50005/files/077018c8-ccc4-4a1a-bb45-30deafd41b8e.png"
                  className="h-16 me-3"
                  alt="Logo"
                />
              </a>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ms-3">
                <div>
                  <button
                    type="button"
                    className="flex text-sm bg-gray-800 rounded-full"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                  >
                    {user?.profile ? (
                      <img
                        className="w-10 h-10 rounded-full object-cover"
                        src={profileImage || user?.profile}
                        alt="user photo"
                      />
                    ) : (
                      <img
                        className="w-10 h-10 rounded-full object-cover"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2WQTIyI3gDR7pusOaPAIGJKzMZ9aUxcfsJQ&s"
                        alt="user photo"
                      />
                    )}
                    <span className="self-center font-suwannaphum text-white text-lg pr-3 sm:text-lg ml-2 whitespace-nowrap hidden sm:block">
                      {user?.user_name}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-24 transition-transform -translate-x-full bg-gray-100 border-r border-gray-200 sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 mt-2 overflow-y-auto bg-gray-100">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-white group"
              >
                <IoHome className="text-gray-500 group-hover:text-gray-900" />
                <span className="ms-3">គេហទំព័រដើម</span>
              </a>
            </li>
            <li>
              <a
                href="/dashboard"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-white group"
              >
                <FaUserAlt className="text-gray-500 group-hover:text-gray-900" />
                <span className="ms-3">ព័ត៍មានអ្នកប្រើប្រាស់</span>
              </a>
            </li>
            <li>
              <a
                href="/login"
                className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-white group"
              >
                <BsBoxArrowInLeft className="text-xl text-gray-500 group-hover:text-gray-900" />
                <span className="ms-2">ការចាកចេញ</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <div className="px-4 pt-4 sm:ml-64 mt-8">
        <div className="p-4 bg-gray-200 rounded-lg dark:border-gray-700 mt-14">
          <h2 className="text-[18px] md:text-[24px] font-semibold mb-4 dark:text-gray-800">
            កែសម្រួលគណនី
          </h2>
          <p className="w-full h-[2px] bg-yellow-50 mb-8"></p>
          <Formik
            initialValues={{
              user_name: user?.user_name || "",
              bio: user?.bio || "",
              profile: user?.profile || "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              handleUpdateProfile(
                user.user_uuid,
                token,
                values.user_name,
                fileURL,
                values.bio
              );
              setSubmitting(false); // stop the submission process after the function is called
            }}
            enableReinitialize={true}
          >
            {({ setFieldValue, isSubmitting }) => (
              <Form>
                <ToastContainer position="top-right" autoClose={3000} />
                <div className="grid grid-cols-1 gap-4 mb-4">
                  <div className="relative flex flex-col items-center">
                    <div className="w-32 h-32 bg-green-500 rounded-full flex items-center justify-center mb-2">
                      {profilePreview ? (
                        <img
                          className="rounded-full w-32 h-32 object-cover text-white"
                          src={profilePreview}
                          alt="user profile"
                        />
                      ) : (
                        <img
                          className="rounded-full w-32 h-32 object-cover text-white"
                          src={
                            user?.profile ||
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2WQTIyI3gDR7pusOaPAIGJKzMZ9aUxcfsJQ&s"
                          }
                          alt="default profile"
                        />
                      )}
                    </div>
                    <input
                      type="file"
                      name="profile"
                      id="file"
                      className="hidden"
                      onChange={(event) =>
                        handleFileChange(event, setFieldValue)
                      }
                    />
                    <label
                      htmlFor="file"
                      className="absolute top-[60%] left-[53%] cursor-pointer border bg-gray-300 text-gray-700 rounded-full py-2 px-2"
                    >
                      <IoCamera />
                    </label>
                  </div>
                  <div className="text-[20px] md:text-[30px] lg:text-[35px] grid grid-flow-col place-content-center place-items-center mb-[4px] md:mb-[8px]">
                    <p className="text-blues font-bold">សូមស្វាគមន៍ </p>
                    <span className="font-semibold text-gray-800 ml-2">
                      {user?.user_name}
                    </span>
                  </div>
                </div>
                <div className="w-[100%] md:w-[100%] lg:w-[50%] mx-auto grid grid-cols-1 gap-4">
                  <div className="flex flex-col">
                    <label className="text-gray-700 font-suwannaphum">
                      ឈ្មោះ
                    </label>
                    <Field
                      type="text"
                      name="user_name"
                      className="mt-2 px-4 py-3 border border-gray-300 rounded-md"
                      placeholder="បញ្ចូលឈ្មោះរបស់អ្នក"
                    />
                    {/* <ErrorMessage
                      name="user_name"
                      component="div"
                      className="text-red-500 text-sm"
                    /> */}
                  </div>

                  <div className="flex flex-col">
                    <label className="text-gray-700 font-suwannaphum">
                      ជីវប្រវត្តិ
                    </label>
                    <div className="relative">
                      <Field
                        type="text"
                        name="bio"
                        className="mt-1 px-4 py-3 font-suwannaphum border border-gray-300 rounded-md w-full"
                        placeholder="បញ្ជូលជីវប្រវតិ្តរបស់អ្នក"
                      />
                    </div>
                    {/* <ErrorMessage
                      name="bio"
                      component="div"
                      className="text-red-500 text-sm"
                    /> */}
                  </div>
                  <div className="flex justify-end mb-4">
                    <button
                      type="submit"
                      className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-primary"
                      disabled={isSubmitting}
                    >
                      រក្សាទុក
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>

      <div class="p-4 sm:ml-64 pt-14">
        <div class="p-4 bg-gray-200 rounded-lg">
          <h2 class="text-[18px] md:text-[24px] font-semibold mb-4">
            អត្រានៃការបញ្ចប់មេរៀន
          </h2>
          <p class="w-full h-[2px] bg-yellow-50 mb-4"></p>
          <div className="grid grid-cols-1 gap-5">
            <div className="grid lg:grid-flow-col place-items-center place-content-center text-second bg-slate-50 rounded-xl pt-14">
              <div
                className="w-[20rem] h-[20rem] md:w-[25rem] md:h-[25rem] 
              lg:w-[30rem] lg:h-[30rem] chart"
              >
                <Chart
                  options={options}
                  series={series}
                  type="radar"
                  width="100%"
                  height="100%"
                />
              </div>
              <img
                className="h-[300px]"
                src="src/assets/img/completion.png"
                alt="Completion"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="px-4 sm:ml-64 mb-4">
        <div class="p-4 bg-gray-200 rounded-lg">
          <h2 class="text-2xl font-semibold mb-4">
            ព័ត៌មានលម្អិតអំពីការធ្វើលំហាត់
          </h2>
          <p class="w-full h-[2px] bg-yellow-50 mb-4"></p>
          <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-clos-2 gap-4 newClasss">
            {/* A1 */}
            <Link to={`/dashboard/a1`}>
              <div className="transition-all duration-300 hover:scale-105">
                <div className="grid grid-cols-2 bg-slate-50 rounded-lg">
                  <div className="p-6">
                    <img
                      className="h-[56px] object-cover -ml-5"
                      src="src/assets/img/listening.png"
                      alt="listening"
                    />
                    <p className="text-md font-medium pt-4">A1</p>
                    <p className="pt-0">
                      <span className="text-blues text-md">{`${exerciseA1Data} / ${groupedExercises["A1"]?.length}`}</span>{" "}
                      <span className="text-sm font-extralight">បានធ្វើ</span>
                    </p>
                  </div>

                  <div className="lg:p-[1.5rem] lg:ml-[4rem] md:p-[0.75rem] md:ml-[3.5rem] p-[1rem] ml-[3.4rem]">
                    <div
                      className="text-sm"
                      role="progressbar"
                      aria-valuenow={`${totalA1}`}
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{
                        "--value": totalA1,
                        width: "80px",
                        height: "80px",
                        position: "relative",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "12px",
                          color: "var(--ks-body-color-main, #555)",
                          position: "absolute",
                          marginTop: "20px",
                        }}
                      >
                        Done
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* A2 */}
            <Link to={`/dashboard/a2`}>
              <div className="transition-all duration-300 hover:scale-105">
                <div className="grid grid-cols-2 bg-slate-50 rounded-lg">
                  <div className="p-6">
                    <img
                      className="h-[56px] object-cover -ml-8"
                      src="src/assets/img/reading10.png"
                      alt="reading"
                    />
                    <p className="text-md font-medium pt-4">A2</p>
                    <p className="pt-0">
                      <span className="text-blues text-md">{`${exerciseA2Data} / ${groupedExercises["A2"]?.length}`}</span>{" "}
                      <span className="text-sm font-extralight">បានធ្វើ</span>
                    </p>
                  </div>

                  <div className="lg:p-[1.5rem] lg:ml-[4rem] md:p-[0.75rem] md:ml-[0.5rem] p-[1rem] ml-[3.4rem]">
                    <div
                      className="text-sm"
                      role="progressbar"
                      aria-valuenow="67"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{
                        "--value": totalA2,
                        width: "80px",
                        height: "80px",
                        position: "relative",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "12px",
                          color: "var(--ks-body-color-main, #555)",
                          position: "absolute",
                          marginTop: "20px",
                        }}
                      >
                        Done
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            <Link to={`/dashboard/b1`}>
              {/* B1 */}
              <div className="transition-all duration-300 hover:scale-105">
                <div className="grid grid-cols-2 bg-slate-50 rounded-lg">
                  <div className="p-6">
                    <img
                      className="h-[56px] object-cover -ml-6"
                      src="src/assets/img/speaking10.png"
                      alt="speaking"
                    />
                    <p className="text-md font-medium pt-4">B1</p>
                    <p className="pt-0">
                      <span className="text-blues text-md">{`${exerciseB1Data} / ${groupedExercises["B1"]?.length}`}</span>{" "}
                      <span className="text-sm font-extralight">បានធ្វើ</span>
                    </p>
                  </div>

                  <div className="lg:p-[1.5rem] lg:ml-[4rem] md:p-[0.75rem] md:ml-[0.5rem] p-[1rem] ml-[3.4rem]">
                    <div
                      className="text-sm"
                      role="progressbar"
                      aria-valuenow="67"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{
                        "--value": totalB1,
                        width: "80px",
                        height: "80px",
                        position: "relative",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "12px",
                          color: "var(--ks-body-color-main, #555)",
                          position: "absolute",
                          marginTop: "20px",
                        }}
                      >
                        Done
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* B2 */}
            <Link to={`/dashboard/b2`}>
              <div className="transition-all duration-300 hover:scale-105">
                <div className="grid grid-cols-2 bg-slate-50 rounded-lg">
                  <div className="p-6">
                    <img
                      className="h-[56px] object-cover -ml-6"
                      src="src/assets/img/writing.png"
                      alt="writing"
                    />
                    <p className="text-md font-medium pt-4">B2</p>
                    <p className="pt-0">
                      <span className="text-blues text-md">{`${exerciseB2Data} / ${groupedExercises["B2"]?.length}`}</span>{" "}
                      <span className="text-sm font-extralight">បានធ្វើ</span>
                    </p>
                  </div>

                  <div className="lg:p-[1.5rem] lg:ml-[4rem] md:p-[0.75rem] md:ml-[0.5rem] p-[1rem] ml-[3.4rem]">
                    <div
                      className="text-sm"
                      role="progressbar"
                      aria-valuenow="67"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{
                        "--value": totalB2,
                        width: "80px",
                        height: "80px",
                        position: "relative",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "12px",
                          color: "var(--ks-body-color-main, #555)",
                          position: "absolute",
                          marginTop: "20px",
                        }}
                      >
                        Done
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* C1 */}
            <Link to={`/dashboard/c1`}>
              <div className="transition-all duration-300 hover:scale-105">
                <div className="grid grid-cols-2 bg-slate-50 rounded-lg">
                  <div className="p-6">
                    <img
                      className="h-[56px] object-cover -ml-6"
                      src="src/assets/img/vocabulary.png"
                      alt="vocabulary"
                    />
                    <p className="text-md font-medium pt-4">C1</p>
                    <p className="pt-0">
                      <span className="text-blues text-md">{`${exerciseC1Data} / ${groupedExercises["C1"]?.length}`}</span>{" "}
                      <span className="text-sm font-extralight">បានធ្វើ</span>
                    </p>
                  </div>

                  <div className="lg:p-[1.5rem] lg:ml-[4rem] md:p-[0.75rem] md:ml-[0.5rem] p-[1rem] ml-[3.4rem]">
                    <div
                      className="text-sm"
                      role="progressbar"
                      aria-valuenow="67"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{
                        "--value": totalC1,
                        width: "80px",
                        height: "80px",
                        position: "relative",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "12px",
                          color: "var(--ks-body-color-main, #555)",
                          position: "absolute",
                          marginTop: "20px",
                        }}
                      >
                        Done
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* C2 */}
            <Link to={`/dashboard/c2`}>
              <div className="transition-all duration-300 hover:scale-105">
                <div className="grid grid-cols-2 bg-slate-50 rounded-lg">
                  <div className="p-6">
                    <img
                      className="h-[56px] object-cover -ml-6"
                      src="src/assets/img/garmmar1.png"
                      alt="grammar"
                    />
                    <p className="text-md font-medium pt-4">C2</p>
                    <p className="pt-0">
                      <span className="text-blues text-md">{`${exerciseC2Data} / ${
                        groupedExercises["C2"]?.length || 0
                      }`}</span>{" "}
                      <span className="text-sm font-extralight">បានធ្វើ</span>
                    </p>
                  </div>

                  <div className="lg:p-[1.5rem] lg:ml-[4rem] md:p-[0.75rem] md:ml-[0.5rem] p-[1rem] ml-[3.4rem]">
                    <div
                      className="text-sm"
                      role="progressbar"
                      aria-valuenow="67"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{
                        "--value": totalC2,
                        width: "80px",
                        height: "80px",
                        position: "relative",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "12px",
                          color: "var(--ks-body-color-main, #555)",
                          position: "absolute",
                          marginTop: "20px",
                        }}
                      >
                        Done
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
