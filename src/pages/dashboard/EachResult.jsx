import { IoHome } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { BsBoxArrowInLeft } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getAccessToken } from "../../lib/secureLocalStorage";
import { selectUsers, fetchUserData } from "../../redux/verify/verifyUserSlice";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchExcersices, selectExcersice } from "../../redux/features/lessondetail/lessondetailSlice";
import { fetchSubmitExercisesByLevel, selectSubmitExercisesByLevel } from "../../redux/features/exerciseSubmit/exerciseSubmitSlice";

export default function EachResult() {
    const dispatch = useDispatch();
  const [token, setToken] = useState("");

  useEffect(() => {
    const token1 = getAccessToken();
    setToken(token1);
    // console.log("token before dispatching the fetchUserData:", token);
    if (token) {
      dispatch(fetchUserData(token));
    }
  }, [dispatch, token]);
  const user = useSelector(selectUsers);
  const userId = user?.user_uuid || "";
  const {level} = useParams();
  console.log("level:",level);
  
  useEffect(()=>{
    if(userId && token){
      const data = dispatch(fetchSubmitExercisesByLevel({ user_uuid: userId, token, level }));
      console.log("data:",data)
    }
  }, [dispatch, userId, token])

  const submittedExerciseByLevel = useSelector(selectSubmitExercisesByLevel);
  console.log("submittedExerciseByLevel:",submittedExerciseByLevel);

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
                    <img
                      className="w-10 h-10 rounded-full"
                      src={user?.profile || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2WQTIyI3gDR7pusOaPAIGJKzMZ9aUxcfsJQ&s"}
                      alt="user photo"
                    />
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
        <div className="p-4 border-2 border-none bg-gray-200 rounded-lg dark:border-gray-700 mt-14 mb-4">
          <h2 class="text-[18px] md:text-[24px] font-semibold mb-4">
            លទ្ធផលនៃលំហាត់
          </h2>
          <p class="w-full h-[2px] bg-white mb-4"></p>

          <div className="bg-white rounded-lg">
            <section>
              <div class="relative overflow-x-auto sm:rounded-lg">
                <table class="w-full text-center">
                  <thead class="text-[14px] md:text-[20px] bg-slate-100 text-primary">
                    <tr>
                      <th scope="col" class="py-5">
                        លំហាត់
                      </th>
                      <th scope="col" class="py-5">
                        ពិន្ទុសរុប
                      </th>
                      <th scope="col" class="py-5">
                        កាលបរិច្ឆេទធ្វើ
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {submittedExerciseByLevel.map((exercise, index) => {
                      // Compute the date and formattedDate outside the JSX
                      const date = new Date(exercise?.complete_date);
                      const formattedDate = date.toISOString().split('T')[0];

                      return (
                        <tr key={index} className="text-gray-700 border-b text-[12px] md:text-[16px]">
                          <td className="py-5  pl-8 text-left">{exercise?.ex_title}</td>
                          <td className="py-5">{exercise?.scores}</td>
                          <td className="py-5">{formattedDate}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
