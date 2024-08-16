import React, { useState } from "react";
import img from "../../assets/img/Skill_Reading.png";
import Levelcard from "../../components/Levelcard";
import { GrAssistListening } from "react-icons/gr";
import { ReactTyped } from "react-typed";
import listening from "../../assets/img/Listening2.png";
import { useParams } from "react-router-dom";
import skillListening from "../../assets/img/Listening2.png";
import skillWritting from "../../assets/img/writting.png";
import skillSpeaking from "../../assets/img/Speaking2.jpg";
import skillReading from "../../assets/img/Skill_Reading.png";
import {
  fetchSkillByName,
  selectSkillByName,
} from "../../redux/features/skill/skillSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import ContenSkillLevel from "../../components/common/ContenSkillLevel";
import { AiOutlineRead } from "react-icons/ai";
import { TfiWrite } from "react-icons/tfi";
import Slide from "../../components/contents-update/Slide";
import CardContentUpdate from "../../components/common/cards/CardContentUpdate";
import "../../pages/skill-level/SkillLevel.css";
import { RiSpeakLine } from "react-icons/ri";
import LoadingAllSkill from "../../components/common/loading/LoadingAllSkill";
export default function SkillLevel() {
  const param = useParams();
  let names = "";
  let img = null;
  let title = "";
  let title1 = "";
  let icon = null;
  if (param.skill_name === "reading") {
    names = "អាន";
    img = skillReading;
    title =
      "នៅទីនេះអ្នកអាចស្វែងរកសកម្មភាពដើម្បីអនុវត្តជំនាញអានរបស់អ្នក។ ការអាននឹងជួយអ្នកឱ្យប្រសើរឡើងនូវការយល់ដឹងរបស់អ្នកអំពីភាសា និងបង្កើតវាក្យសព្ទរបស់អ្នក។";
    icon = <AiOutlineRead />;
    title1 = "ការអានកម្រិត";
  } else if (param.skill_name === "listening") {
    names = "ស្តាប់";
    img = skillListening;
    title =
      "នៅទីនេះអ្នកអាចស្វែងរកសកម្មភាពដើម្បីអនុវត្តជំនាញស្តាប់របស់អ្នក។ ការស្តាប់នឹងជួយអ្នកឱ្យប្រសើរឡើងនូវការយល់ដឹងរបស់អ្នកអំពីភាសា និងការបញ្ចេញសំឡេងរបស់អ្នក។";
    icon = <GrAssistListening />;
    title1 = "ការស្តាប់កម្រិត";
  } else if (param.skill_name === "writing") {
    names = "សរសេរ";
    img = skillWritting;
    title =
      "នៅទីនេះអ្នកអាចស្វែងរកសកម្មភាពដើម្បីអនុវត្តជំនាញសរសេររបស់អ្នក។ អ្នកអាចកែលម្អការសរសេររបស់អ្នកដោយការយល់ដឹងអំពីអត្ថបទគំរូ និងរបៀបដែលពួកវាត្រូវបានរៀបចំឡើង។";
    icon = <TfiWrite />;
    title1 = "ការសរសេរកម្រិត";
  } else {
    names = "និយាយ";
    img = skillSpeaking;
    title =
      "នៅទីនេះអ្នកអាចស្វែងរកសកម្មភាពដើម្បីអនុវត្តជំនាញនិយាយរបស់អ្នក។ អ្នកអាចកែលម្អការនិយាយរបស់អ្នកដោយការយល់ដឹងអំពីអត្ថបទគំរូ និងរបៀបដែលពួកវាត្រូវបានរៀបចំឡើង។";
    icon = <RiSpeakLine />;
    title1 = "ការនិយាយកម្រិត";
  }
  console.log("param", param.skill_name);
  console.log("param", param);
  const skill = useSelector(selectSkillByName);
  const [skillLevels, setskillLevels] = useState([]);
  useEffect(() => {
    const filteredSkills = skill.filter(
      (item) => !item.description.includes("IELTS")
    );
    setskillLevels(filteredSkills);
  }, [skill]);
  const skillSet = new Set();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    dispatch(fetchSkillByName(param?.skill_name));
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsLoading(false);
    };

    fetchData();
  }, []);
  if (isLoading) {
    return <LoadingAllSkill/>;
  }
  console.log("skills", skill);
  return (
    <>
      <div className="relative w-[100%] mx-auto">
        {skillLevels.map((skill, index) => {
          const isUnique = !skillSet.has(skill.skill_name); // Check if skill name is in Set
          if (isUnique) {
            skillSet.add(skill.skill_name); // Add unique skill name to Set
            return (
              <>
                <ContenSkillLevel
                  key={index}
                  skill_name={skill.skill_name || "No_Name"}
                  img={img || "No_Image"}
                  description={title || "No_Description"}
                />
              </>
            );
          }
        })}
      </div>
      <div className="">
        <section className="font-bold text-[32px] text-second flex items-center gap-4 justify-center mt-10 h-10">
          {icon}
          <ReactTyped
            strings={[`កម្រិតនៃការ${names}`]}
            typeSpeed={200}
            loop
            backSpeed={20}
            showCursor={false}
          />
        </section>
      </div>
      <section className="">
        <div className="mt-10 lg:w-[80%] w-[90%] mx-auto grid  gap-10 md:grid-cols-2 lg:grid-cols-2 grid-cols-1 mb-10 exclude-1024">
          {skillLevels.map((skill, index) => {
            return (
              <>
                <Levelcard
                  key={index}
                  skill_level={skill.skill_level || "No skill_level"}
                  skill_name={skill.skill_name || "No skill_name"}
                  image={skill.thumbnail}
                  title={`${skill.skill_level}`}
                  dis={skill.description}
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
