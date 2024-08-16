import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCreateUser,
  selectUser,
} from "../../redux/features/user/userSlice";
import { HiInformationCircle } from "react-icons/hi";
import { Alert } from "flowbite-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const strongPasswordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,}$/;

const initialValues = {
  username: "",
  email: "",
  password: "",
  confirm_password: "",
};

const validationSchema = Yup.object({
  username: Yup.string().required("ឈ្មោះត្រូវបានទាមទារ"),
  email: Yup.string().email("អុីមែលមិនត្រឹមត្រូវ").required("អុីមែលត្រូវបានទាមទារ"),
  password: Yup.string()
    .matches(
      strongPasswordRegex,
      "ពាក្យសម្ងាត់ត្រូវតែមានអក្សរធំមួយ អក្សរតូចមួយ តួអក្សរពិសេសមួយ លេខ ហើយត្រូវមានយ៉ាងហោចណាស់ 8 តួអក្សរ"
    )
    .required("លេខសម្ងាត់ត្រូវបានទាមទារ"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), null],"ពាក្យសម្ងាត់ត្រូវតែ​ដូចគ្នា")
    .required("បញ្ជាក់លេខសម្ងាត់ត្រូវបានទាមទារ"),
});

export default function Register() {
  const userResponse = useSelector(selectUser);
  const location = useLocation();
  console.log("location: ", location);
  const email = location?.state?.email;
  // console.log("useResponse", userResponse);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [cShowPassword, setCShowPassword] = useState(false);

  // handle navigate
  // useEffect(() => {
  //   if (userResponse?.status === 201) {
  //     navigate("/login", { state: { email } });
  //   }
  // }, [userResponse?.status, navigate, email]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleCShowPasswordVisibility = () => {
    setCShowPassword(!cShowPassword);
  };

  const handleSubmit = (values, { resetFrom, setSubmitting }) => {
    setSubmitting(true);
    dispatch(fetchCreateUser(values))
      .unwrap()
      .then(() => {
        toast.success("អុីមែល ឬ លេខសម្ងាត់ ត្រឹមត្រូវ");
        setTimeout(() => {
          setSubmitting(false);
          navigate("/login", { state: { email } });
        }, 1500);
      })
      .catch((error) => {
        toast.error("អុីមែល ឬ លេខសម្ងាត់ មិនត្រឹមត្រូវ");
        setSubmitting(false);
      });
    resetFrom();
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
    <section className="flex flex-col items-center justify-center xl:w-9/12 mx-auto min-h-screen px-4 py-5 bg-white">
      <div className="flex justify-center items-center flex-col px-3 md:px-8 py-8 md:py-14 lg:flex-row w-full md:w-4/5 bg-gray-100 rounded-tr-[50px] md:rounded-tr-[100px] rounded-bl-[50px] md:rounded-bl-[100px] overflow-hidden">
        <div className="w-full md:px-4 lg:px-4 lg:w-1/2">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => {
              return (
                <Form className="space-y-5 mt-4">
                  
                  {/* {userResponse?.status === 409 && (
                    <Alert color="failure" icon={HiInformationCircle}>
                      {userResponse?.message}
                    </Alert>
                  )} */}

                  <ToastContainer position="top-right" autoClose={3000} />

                  <h2 className="text-3xl md:text-5xl lg:text-4xl font-bold font-suwannaphum text-center text-blues mb-5">
                    បង្កើតគណនីថ្មី
                  </h2>

                  <div>
                    <label
                      htmlFor="username"
                      className="block mb-2 text-xl font-suwannaphum font-medium text-blues"
                    >
                      ឈ្មោះ<span className="text-second">*</span>
                    </label>
                    <Field
                      type="text"
                      id="username"
                      name="username"
                      className="w-full px-4 py-3 font-suwannaphum border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      placeholder="បញ្ជូលឈ្មោះរបស់អ្នក"
                      required
                    />
                    <ErrorMessage
                      component="div"
                      name="username"
                      className="text-red-700"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-xl font-suwannaphum font-medium text-blues"
                    >
                      អុីមែល<span className="text-second">*</span>
                    </label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 font-suwannaphum border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
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
                      className="block mb-2 text-xl font-suwannaphum font-medium text-blues"
                    >
                      លេខសម្ងាត់<span className="text-second">*</span>
                    </label>
                    <div className="relative">
                      <Field
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        className="w-full px-4 py-3 font-suwannaphum border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder="បញ្ជូលលេខសម្ងាត់របស់អ្នក"
                        required
                      />
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
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

                  <div>
                    <label
                      htmlFor="confirm_password"
                      className="block mb-2 text-xl font-suwannaphum font-medium text-blues"
                    >
                      បញ្ជាក់លេខសម្ងាត់<span className="text-second">*</span>
                    </label>
                    <div className="relative">
                      <Field
                        type={cShowPassword ? "text" : "password"}
                        id="confirm_password"
                        name="confirm_password"
                        className="w-full px-4 py-3 font-suwannaphum border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder="បញ្ជាក់លេខសម្ងាត់របស់អ្នក"
                        required
                      />
                      <button
                        type="button"
                        onClick={toggleCShowPasswordVisibility}
                        className="absolute inset-y-0 right-1 pr-3 flex items-center text-xl leading-5"
                      >
                        {cShowPassword ? <FaEye /> : <FaEyeSlash />}
                      </button>
                    </div>
                    <ErrorMessage
                      component="div"
                      name="confirm_password"
                      className="text-red-700"
                    />
                  </div>

                  <div className="flex justify-end mt-5">
                    <button
                      type="submit"
                      className="w-full px-5 py-3 mt-1 mb-4 text-lg font-medium text-white bg-blue-900 rounded-lg hover:bg-primary hover:text-blues focus:ring-4 focus:outline-none focus:ring-blue-100"
                    >
                      { isSubmitting ? handleLoading() : "បង្កើតគណនី" }
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
        <div className="flex w-full order-first lg:order-last md:w-1/2 items-center justify-center bg-gray-100 p-4 mb-4">
          <img
            src="http://136.228.158.126:50005/files/077018c8-ccc4-4a1a-bb45-30deafd41b8e.png"
            alt="English Club Logo"
            className="w-8/12 lg:w-10/12"
          />
        </div>
      </div>
    </section>
  );
}
