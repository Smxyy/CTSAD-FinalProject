import React, { useState } from "react";
import img from "../../assets/img/Skill_Reading.png";
import Levelcard from "../../components/Levelcard";
import { GrAssistListening } from "react-icons/gr";
import { ReactTyped } from "react-typed";
import listening from "../../assets/img/Listening2.png";
import { useParams } from "react-router-dom";
import grammartitle from "../../assets/img/grammartitlt.jpg";
import { selectSkillByName } from "../../redux/features/skill/skillSlice";
import { useSelector, useDispatch } from "react-redux";
import ContenSkillLevel from "../../components/common/ContenSkillLevel";
import { AiOutlineRead } from "react-icons/ai";
import { TfiWrite } from "react-icons/tfi";
import Slide from "../../components/contents-update/Slide";
import { useEffect } from "react";
import parse from "html-react-parser";
import "../skill-level/SkillLevel.css";
import selectAllGrammar, {
  fetchGrammars,
} from "../../redux/features/grammar/grammarSllice";
import LevelcardGrammar from "../../components/LevelcardGrammar";
import LoadingSkillGrammar from "../../components/common/loading/LoadingSkillGrammar";
export default function SkillGrammarPage() {
  const param = useParams();
  const [skillGrammar, setskillGrammar] = useState([]);
  let names = "";
  let img = null;
  let title = "";
  let title1 = "";
  let icon = null;
  console.log("param", param.skill_name);
  console.log("param", param);
  const grammars = useSelector((state) => state.grammar.grammars);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    dispatch(fetchGrammars());

    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsLoading(false);
    };

    fetchData();
  }, []);
  useEffect(() => {
    const filteredSkills = grammars.filter(
      (item) => !item.description.includes("IELTS")
    );
    setskillGrammar(filteredSkills);
  }, [grammars]);

  if(isLoading){
    return <LoadingSkillGrammar/>;
  }
  return (
    <>
      <div className="relative w-[100%] mx-auto">
        <ContenSkillLevel
          skill_name={"វេយ្យាករណ៍" || "No_Name"}
          img={grammartitle || "No_Image"}
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
            strings={[`កម្រិតនៃវេយ្យាករណ៍`]}
            typeSpeed={200}
            loop
            backSpeed={20}
            showCursor={false}
          />
        </section>
      </div>
      <section className="">
        <div className="mt-10 lg:w-[80%] w-[90%] mx-auto grid  gap-10 md:grid-cols-2 lg:grid-cols-2 grid-cols-1 mb-10 exclude-1024">
          {skillGrammar.map((grammar, index) => {
            console.log("grammar in Grammar page:", grammar);
            return (
              <>
                <LevelcardGrammar
                  key={index}
                  skill_level={grammar.grammar_level || "No grammar_level"}
                  skill_name={grammar.title || "No skill_name"}
                  image={grammar.thumbnail || "No pic"}
                  title={grammar.title || "No title"}
                  dis={grammar.description || "No description"}
                  title2={title1}
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
