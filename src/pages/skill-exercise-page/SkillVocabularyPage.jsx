import React, { useState } from "react";
import img from "../../assets/img/Skill_Reading.png";
import Levelcard from "../../components/Levelcard";
import { GrAssistListening } from "react-icons/gr";
import { ReactTyped } from "react-typed";
import listening from "../../assets/img/Listening2.png";
import { useParams } from "react-router-dom";
import vacabluary from "../../assets/img/Vocablulary.jpg";
import { selectSkillByName } from "../../redux/features/skill/skillSlice";
import { useSelector, useDispatch } from "react-redux";
import ContenSkillLevel from "../../components/common/ContenSkillLevel";
import { AiOutlineRead } from "react-icons/ai";
import { TfiWrite } from "react-icons/tfi";
import Slide from "../../components/contents-update/Slide";
import { useEffect } from "react";
import parse from "html-react-parser";
import {
  fetchvocabularys,
  selectAllVocabluary,
} from "../../redux/features/vocabulary/vocabularySlice";
import LevelcardVocabulary from "../../components/LevelcardVocabulary";
import "../skill-level/SkillLevel.css";
import LoadingSkillGrammar from "../../components/common/loading/LoadingSkillGrammar";
import LoadingSkillVocabulary from "../../components/common/loading/LoadingSkillVocabulary";
export default function SkillVocabularyPage() {
  const param = useParams();
  let names = "";
  let img = null;
  let title = "";
  let title1 = "";
  let icon = null;
  console.log("param", param.skill_name);
  console.log("param", param);
  const vocabularys = useSelector(selectAllVocabluary);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    dispatch(fetchvocabularys());

    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsLoading(false);
    };

    fetchData();
  }, []);
  if (isLoading) {
    return <LoadingSkillVocabulary />;
  }
  console.log("vocabularys", vocabularys);
  return (
    <>
      <div className="relative w-[100%] mx-auto">
        <ContenSkillLevel
          skill_name={"ពាក្យគឹន្លះ" || "No_Name"}
          img={vacabluary || "No_Image"}
          description={
            "ពិនិត្យឡើងវិញ និងអនុវត្តវេយ្យាករណ៍របស់អ្នក ដើម្បីជួយអ្នកបង្កើនទំនុកចិត្ត និងបង្កើនកម្រិតភាសារបស់អ្នក។" ||
            "No_Description"
          }
        />
      </div>
      <div className="">
        <section className="font-bold text-[32px] text-second flex items-center gap-4 justify-center mt-10 h-10">
          {icon}
          <ReactTyped
            strings={[`កម្រិតនៃការពាក្យគន្លឹះ`]}
            typeSpeed={200}
            loop
            backSpeed={20}
            showCursor={false}
          />
        </section>
      </div>
      <section className="">
        <div className="mt-10 lg:w-[80%] w-[90%] mx-auto grid  gap-10 md:grid-cols-2 lg:grid-cols-2 grid-cols-1 mb-10 exclude-1024">
          {vocabularys.map((vocabulary, index) => {
            console.log("vocabulary", vocabulary);
            return (
              <>
                <LevelcardVocabulary
                  key={index}
                  skill_level={vocabulary.vocab_level || "No grammar_level"}
                  skill_name={parse(`${vocabulary.title}`) || "No skill_name"}
                  image={vocabulary.thumbnail_url || "No pic"}
                  title={parse(`${vocabulary.titles}`) || "No title"}
                  dis={parse(`${vocabulary.description}`) || "No description"}
                  title2={parse(`${title1}`) || "No title"}
                />
              </>
            );
          })}
        </div>
      </section>
      <section className="my-10">
        <Slide />
      </section>
    </>
  );
}
