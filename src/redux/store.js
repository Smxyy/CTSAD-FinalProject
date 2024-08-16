import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import skillSlice from "./features/skill/skillSlice";
import skillnamelevel from "./skillnamelevel/skillnamelevel";
import lessondetailSlice from "./features/lessondetail/lessondetailSlice";
import submitsSlice from "../redux/features/submit/submitSlice";
import verifyUserSlice from "./verify/verifyUserSlice";
import grammarSllice from "./features/grammar/grammarSllice";
import LessonsSlice from "./features/lessons/LessonsSlice";
import vocabularySlice from "./features/vocabulary/vocabularySlice";
import resubmitSlice from "./features/resubmit/reSumitSlice";
import SearchSlide from "./features/search/SearchSlide";
import exerciseSlice from "./features/exerciseSubmit/exerciseSubmitSlice";
export const store = configureStore({
    reducer: {
        user: userSlice,
        skill: skillSlice,
        skillNameLevel: skillnamelevel,
        excersice: lessondetailSlice,
        submits: submitsSlice,
        userVerify: verifyUserSlice,
        grammar: grammarSllice,
        lesson: LessonsSlice,
        vocabluary: vocabularySlice,
        resubmit: resubmitSlice,
        search: SearchSlide,
        exercise: exerciseSlice,
        // vocabulary : vocabularySlice
    },
});