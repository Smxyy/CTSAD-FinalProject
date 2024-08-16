import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "./pages/error-page/NotFoundPage.jsx";
import Layout from "./components/layout/Layout.jsx";
import SkillPage from "./pages/skill-page/SkillPage.jsx";
import SkillLevel from "./pages/skill-level/SkillLevel.jsx";
import SkillExercise from "./pages/skill-exercise-page/SkillExercise.jsx";
import LessonDetail from "./pages/lesson-detail-page/LessonDetail.jsx";
import VocabularyDetail from "./pages/vocabulary-detail-page/VocabularyDetail.jsx";
import Login from "./pages/auth/Login.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import Register from "./pages/auth/Register.jsx";
import VerifyOTP from "./pages/auth/VerifyOTP.jsx";
import NewPassword from "./pages/auth/NewPassword.jsx";
import ForgotPassword from "./pages/auth/ForgotPassword.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { ImOpt } from "react-icons/im";
import SkillExerciseGrammar from "./pages/skill-exercise-page/SkillExerciseGrammar.jsx";
import SkillVocabularyPage from "./pages/skill-exercise-page/SkillVocabularyPage.jsx";
import LessonDetailGrammar from "./pages/grammar-detail-page/LessonDetailGrammar.jsx";
import SkillExerciseVocabluary from "./pages/skill-exercise-page/SkillExerciseVocabluary.jsx";
import IELTS from "./pages/ielts/IELTS.jsx";
import IETLSSkill from "./pages/ietlsskill/IETLSSkill.jsx";
import IELTSkillDetail from "./pages/ielts-detail/IELTSkillDetail.jsx";
import AboutUs from "./pages/about-us/AboutUs/About-Us.jsx";
import SkillGrammarPage from "./pages/skill-exercise-page/SkillGrammarPage.jsx";
import LessonTest from "./pages/lesson-detail-page/LessonTest.jsx";
import Seach from "./pages/search/Seach.jsx";
import VocabularyDetailSearch from "./pages/vocabulary-detail-page/VocabularyDetailSearch.jsx";
import MoreVideo from "./pages/videopage/MoreVideo.jsx";
import SearchPage from "./pages/search/SearchPage.jsx";
import SearchDetailExcerSice from "./pages/search/SearchDetailExcerSice.jsx";
import SearchDetailLessons from "./pages/search/SearchDetailLessons.jsx";
import EachResult from "./pages/dashboard/EachResult.jsx";

// import DetailPage from "./pages/lesson-detail-page/DetailPage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/search",
        element: <Seach />,
      },
      {
        path: "/grammar/:level-:category/",
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/more-videos",
        element: <MoreVideo />,
      },
      {
        path: "/ielts",
        element: <IELTS />,
      },
      {
        path: "/ielts/:ielts-name",
        element: <IETLSSkill />,
      },
      {
        path: "/ielts/:ielts-name/:title",
        element: <IELTSkillDetail />,
      },
      {
        path: "/ielts/:ielts-name",
        element: <IETLSSkill />,
      },
      {
        path: "/ielts/:ielts-name/:title",
        element: <IELTSkillDetail />,
      },
      {
        path: "/skills",
        element: <SkillPage />,
      },
      {
        path: "/skills/:skill_name",
        element: <SkillLevel />,
      },
      {
        path: "/skills/:skill_name/:skill_level-skill_name",
        element: <SkillExercise />,
      },
      {
        path: "/skills/:skill_name/:skill_level-skill_name/:title",
        element: <LessonDetail />,
      },
      {
        path: "/grammar",
        element: <SkillGrammarPage />,
      },
      {
        path: "/searchs",
        element: <SearchPage />,
      },
      {
        path: "/vocabulary",
        element: <SkillVocabularyPage />,
      },
      {
        path: "/grammar/:level-grammar",
        element: <SkillExerciseGrammar />,
      },
      {
        path: "/vocabulary/:level-vocabulary",
        element: <SkillExerciseVocabluary />,
      },
      {
        path: "/grammar/:level-grammar/:title",
        element: <LessonDetailGrammar />,
      },
      {
        path: "/excersice/:title",
        element: <SearchDetailExcerSice />,
      },
      {
        path: "/lesson/:title",
        element: <SearchDetailLessons />,
      },
      {
        path: "/vocabulary/:level-vocabulary/:title",
        element: <VocabularyDetail />,
      },
    ],
  },
  {
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/:level",
        element: <EachResult />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/otp-verify",
    element: <VerifyOTP />,
  },
  {
    path: "/new-password",
    element: <NewPassword />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>
);
