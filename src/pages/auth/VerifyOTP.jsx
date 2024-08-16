import React, { useEffect, useRef, useState } from "react";
import { Formik, Form, useField } from "formik";
import { BsChevronLeft } from "react-icons/bs";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmailOtp, selectUserPassword } from "../../redux/features/user/userSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { HiInformationCircle } from "react-icons/hi";
import { Alert } from "flowbite-react";

const initialValues = {
  otp: Array(6).fill("")
};

const validationSchema = Yup.object({
  otp: Yup.array()
    .of(
      Yup.string()
        .length(1, "ត្រូវតែជាលេខមួយខ្ទង់")
        .required("ត្រូវតែទាមទារ")
    )
    .length(6, "ត្រូវតែមាន 6 ខ្ទង់")
    .required("OTP ត្រូវបានទាមទារ"),
});

const OtpInput = ({ index, handleChange, handleBackspaceAndEnter, otpBoxReference }) => {
  const [field, meta, helpers] = useField(`otp[${index}]`);

  return (
    <input
      {...field}
      type="text"
      maxLength={1}
      onChange={(e) => {
        helpers.setValue(e.target.value);
        handleChange(e.target.value, index);
      }}
      onKeyUp={(e) => handleBackspaceAndEnter(e, index)}
      ref={(reference) => (otpBoxReference.current[index] = reference)}
      className="min-w-10 min-h-10 text-xl text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500
                 md:w-16 md:h-16 md:text-2xl
                 lg:w-18 lg:h-18 lg:text-3xl"
    />
  );
};

export default function VerifyOTP() {
  const userResponse = useSelector(selectUserPassword);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  console.log("location: ", location);
  const email = location?.state;
  const otpBoxReference = useRef([]);

  function handleChange(value, index) {
    if (value && index < 5) {
      otpBoxReference.current[index + 1].focus();
    }
  }

  function handleBackspaceAndEnter(e, index) {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      otpBoxReference.current[index - 1].focus();
    }
    if (e.key === "Enter" && e.target.value && index < 5) {
      otpBoxReference.current[index + 1].focus();
    }
  }

  useEffect(() => {
    if (userResponse?.status === 200) {
      navigate("/new-password", { state: { email } });
    }
  }, [userResponse?.status, navigate, email]);

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

  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    const otp = values.otp.join("");
    console.log("Submitting OTP: ", otp);
    console.log("Email: ", email);
    
    setSubmitting(true);

    setTimeout(() => {
      dispatch(fetchEmailOtp({ otp, email }))
        .finally(() => setSubmitting(false));
      resetForm();
    }, 500);
  };

  return (
    <section className="flex flex-col items-center justify-center xl:w-9/12 mx-auto min-h-screen px-2 bg-white">
      <div className="flex flex-col items-center justify-center lg:flex-row w-full lg:w-4/5 py-16 bg-gray-100 rounded-tr-[50px] md:rounded-tr-[100px] rounded-bl-[50px] md:rounded-bl-[100px] overflow-hidden">
        <div className="flex w-full lg:w-1/2 items-center justify-center bg-gray-100 mb-4">
          <img
            src="http://136.228.158.126:50005/files/077018c8-ccc4-4a1a-bb45-30deafd41b8e.png"
            alt="English Club Logo"
            className="w-3/4 lg:w-2/3 md:w-3/5"
          />
        </div>

        <div className="w-full lg:w-1/2 px-2 md:px-4">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-5 md:px-16 lg:pr-18">
                
                {userResponse?.status === 409 && (
                  <Alert color="failure" icon={HiInformationCircle}>
                    {userResponse?.message}
                  </Alert>
                )}

                <h2 className="text-2xl md:text-4xl font-bold text-center text-blues mb-5">
                  សូមបំពេញ OTP ប្រាំមួយខ្ទង់<span className="text-second">*</span>
                </h2>

                <div className="flex flex-col md:py-4">
                  <div className="flex justify-between space-x-2 md:space-x-4"> 
                    {initialValues.otp.map((_, index) => (
                      <OtpInput
                        key={index}
                        index={index}
                        handleChange={handleChange}
                        handleBackspaceAndEnter={handleBackspaceAndEnter}
                        otpBoxReference={otpBoxReference}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex justify-end mt-5">
                  <button
                    type="submit"
                    className="w-full px-5 py-3 font-suwannaphum text-sm md:text-lg font-medium text-white bg-blue-900 rounded-lg hover:bg-primary hover:text-blues focus:ring-4 focus:outline-none focus:ring-blue-100"
                  >
                    {isSubmitting ? (
                      handleLoading()
                    ) : (
                      "ផ្ទៀងផ្ទាត់ OTP"
                    )}
                  </button>
                </div>

                <div className="flex justify-end font-suwannaphum hover:text-blues hover:underline">
                  <BsChevronLeft className="-mt-1" />
                  <a href="/forgot-password" className="-mt-2">
                    ត្រឡប់ទៅចូលប្រើប្រាស់
                  </a>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
}
