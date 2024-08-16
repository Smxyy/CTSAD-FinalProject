import React, { useEffect, useState } from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup"; // Corrected import from Yub to Yup
import { useDispatch } from "react-redux";
import {
  fetchUserLogin,
  selectIsLoginIn,
  selectUserToken,
} from "../../redux/features/user/userSlice";
import { getAccessToken } from "../../lib/secureLocalStorage";
import { useNavigate } from "react-router-dom";
import { HiInformationCircle } from "react-icons/hi";
import { Alert } from "flowbite-react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [accessToken, setAccessToken] = useState("");
  const userToken = useSelector(selectUserToken);
  const isLoginIn = useSelector(selectIsLoginIn);
  const [loginError, setLoginError] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };
  
  const validationSchema = Yup.object({
    email: Yup.string().email("អុីមែលមិនត្រឹមត្រូវ").required("អុីមែលត្រូវបានទាមទារ"),
    password: Yup.string().required("លេខសម្ងាត់ត្រូវបានទាមទារ"),
  });

  const handleSubmit = (values, {setSubmitting}) =>{
    setSubmitting(true);
    dispatch(fetchUserLogin(values))
      .unwrap()
      .then(()=>{
        toast.success("អុីមែល ឬ លេខសម្ងាត់ ត្រឹមត្រូវ");
        setTimeout(() => {
          setSubmitting(false);
          window.location.href = "/";
        }, 1500);
      })
      .catch((error) => {
        console.log("Login error:", error);
        console.log("Error message:", error.message);
        setTimeout(() => {
          if (error.message === "User is not verified 😏") {
            toast.error("សូមផ្ទៀងផ្ទាត់អុីមែលរបស់អ្នក មុននឹងចូលប្រើប្រាស់ 🥳");
          }
          else {
            toast.error("អុីមែល ឬ លេខសម្ងាត់ មិនត្រឹមត្រូវ");
          }
          setSubmitting(false);
        }, 500);
      });
  }; 
  
  // useEffect(() => {
  //   console.log("user Token in login page", userToken);
  //   console.log("is login", isLoginIn);
  //   if (isLoginIn) {
  //     window.location.href = "/";
  //   }
  // },[isLoginIn]);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLoading = () => (
    <section>
      <div>
        <svg aria-hidden="true" role="status" className="inline w-6 h-6 me-3 animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
        </svg>
      </div>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
        <video
          className="w-full h-full object-cover opacity-55"
          autoPlay
          muted
          loop
          preload="auto"
        >
          <source src="src/assets/video/loading.mp4" type="video/mp4" />
        </video>
      </div>
  </section>
  );

  return (
    <section className="flex flex-col items-center justify-center xl:w-9/12 mx-auto min-h-screen px-4 bg-white">
      <div className="flex justify-center items-center flex-col lg:flex-row w-full py-10 lg:w-4/5 bg-gray-100 rounded-tr-[50px] md:rounded-tr-[100px] rounded-bl-[50px] md:rounded-bl-[100px] overflow-hidden">
        <div className="w-full flex lg:w-1/2 items-center justify-center bg-gray-100 ">
          <img
            src="http://136.228.158.126:50005/files/077018c8-ccc4-4a1a-bb45-30deafd41b8e.png"
            alt="English Club Logo"
            className="w-9/12 md:w-3/5"
          />
        </div>

        <div className="w-full lg:w-1/2 px-4 py-8">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-5 lg:mr-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-blues mb-5">
                  ចូលប្រើប្រាស់គណនីរបស់អ្នក
                </h2>

                <ToastContainer position="top-right" autoClose={3000} />

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-xl font-medium text-blues"
                  >
                    អុីមែល<span className="text-second">*</span>
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="បញ្ជូលអុីមែលរបស់អ្នក"
                    required
                  />
                  <ErrorMessage
                    component="div"
                    name="email"
                    className="text-red-700"
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-xl font-medium text-blues"
                  >
                    លេខសម្ងាត់<span className="text-second">*</span>
                  </label>
                  <div className="relative">
                    <Field
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      placeholder="បញ្ជូលលេខសម្ងាត់របស់អ្នក"
                      required
                    />
                    <button
                      type="button"
                      onClick={toggleShowPassword}
                      className="absolute inset-y-0 right-1 pr-3 flex items-center text-xl leading-5"
                    >
                      {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </button>
                  </div>
                  <ErrorMessage
                    component="div"
                    name="password"
                    className="text-red-700"
                  />
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href="/forgot-password"
                    className="-mt-3 hover:text-blues hover:underline"
                  >
                    ភ្លេចលេខសម្ងាត់
                  </a>
                  <a
                    href="/register"
                    className="-mt-3 hover:text-blues hover:underline"
                  >
                    បង្កើតគណនីថ្មី
                  </a>
                </div>

                <div className="flex justify-end mt-5">
                  <button
                    type="submit"
                    className="w-full px-5 py-3 -mt-1 text-lg bg-blue-900 font-medium text-white rounded-lg hover:bg-primary hover:text-blues focus:ring-4 focus:outline-none focus:ring-blue-100"
                  >
                    {isSubmitting ? handleLoading() : "ចូលប្រើប្រាស់"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
}
