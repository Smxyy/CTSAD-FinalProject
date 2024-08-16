import React, { useEffect, useState } from "react";
import Ariplan from "../../assets/img/Ariplan.gif";
import Ariplan2 from "../../assets/img/Ariplan2.gif";
import { ReactTyped } from "react-typed";
import CardIELTS from "./CardIELTS";
import { BsCheck2Circle } from "react-icons/bs";
import IELTSCard from "../../components/common/cards/IELTSCard";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSkills,
  selectAllSkills,
} from "../../redux/features/skill/skillSlice";
import { fetchLessonsById } from "../../redux/features/lessons/LessonsSlice";
import reading from "../../assets/img/speaking.jpg";
import "./IELTS.css";
import {
  fetchGrammars,
  selectAllGrammars,
} from "../../redux/features/grammar/grammarSllice";
import { selectAllVocabluary } from "../../redux/features/vocabulary/vocabularySlice";
import LoadingIL from "../../components/common/loading/LoadingIL";
export default function IELTS() {
  const skills = useSelector(selectAllSkills);
  const grammars = useSelector(selectAllGrammars);
  const vocabularys = useSelector(selectAllVocabluary);
  const dispatch = useDispatch();
  const [ieltsSkills, setIeltsSkills] = useState([]);
  const [ieltsgrammar, setIeltsGrammar] = useState([]);
  const [ieltsvocabulary, setIeltsVocabluary] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    dispatch(fetchSkills());
  }, []);
  useEffect(() => {
    const filteredSkills = skills.filter((item) =>
      item.description.includes("IELTS")
    );
    setIeltsSkills(filteredSkills);
  }, [skills]);
  useEffect(() => {
    dispatch(fetchGrammars());
  }, []);
  useEffect(() => {
    const filteredGrammars = grammars.filter((item) =>
      item.description.includes("IELTS")
    );
    setIeltsGrammar(filteredGrammars);
  }, []);
  useEffect(() => {
    const filteredVocabulary = vocabularys.filter((item) =>
      item.description.includes("IELTS")
    );
    setIeltsVocabluary(filteredVocabulary);
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsLoading(false);
    };

    fetchData();
  });
  if(isLoading){
    return <LoadingIL />;
  }
  return (
    <section className="w-full  px-10 main">
      <div className="new-main px-0 pb-20 lg:px-20  lg:py-20 rounded-t-xl ">
        <h1 className="lg:text-[36px] md:text-[24px] text-[20px] h-[50px] text-blues font-bold text-center main">
          <ReactTyped
            strings={[
              `ការធ្វើតេស្ត IELTS អនឡាញដោយឥតគិតថ្លៃសម្រាប់ការអនុវត្តន៍`,
            ]}
            typeSpeed={200}
            loop
            backSpeed={30}
            showCursor={true}
          />
        </h1>
        <p className="lg:text-[20px] md:text-[18px] text-[16px]  mt-7 leading-10 mb-10 text-start md:text-justify">
          <span className="text-second">English Club</span>
          គឺជាគេហទំព័រដែលផ្តល់ជូននូវការធ្វើតេស្តត្រៀមសម្រាប់ប្រឡង IELTS
          តាមអ៊ីនធឺណិតឥតគិតថ្លៃ ជាមួយនឹងសំណួរ
          និងការធ្វើតេស្តជួយអ្នកសិក្សាក្នុងការអនុវត្តគ្រប់ពេលវេលា
          និងគ្រប់ទីកន្លែង។ សំណួរត្រូវបានជ្រើសរើសយ៉ាងប្រុងប្រយ័ត្ន
          និងស្រដៀងទៅនឹងការធ្វើតេស្តជាក់ស្តែង
          ដែលជួយឱ្យអ្នកឆ្លងកាត់ការសាកល្បងបានយ៉ាងងាយស្រួល។
          <p className="text-primary text-center">តោះហាត់ឥលូវនេះ!</p>
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-x-10 gap-y-10 w-fit mx-auto mt-10">
          {ieltsSkills?.map((element, index) => {
            console.log("element: ", element);
            return (
              <>
                <CardIELTS
                  key={index}
                  img={element.thumbnail}
                  title={`IETLS-${element.skill_name}`}
                  des={element.description}
                />
              </>
            );
          })}
        </div>
        <section className="mt-20 main">
          <h1 className="lg:text-[36px] md:text-[24px] text-[20px] font-bold text-blues text-center main">
            អ្វីគ្រប់យ៉ាងដែលអ្នកត្រូវដឹងអំពី
            <span className="text-second">IELTS</span>
            (ធ្វើបច្ចុប្បន្នភាពសម្រាប់ឆ្នាំ 2024)
          </h1>
          <div className="mt-20 ">
            <h1 className="lg:text-[30px] md:text-[20px] text-[18px] font-bold text-primary main">
              1. IELTS ជាអ្វី?
            </h1>
            <p className="md:text-[18px] text-[16px] mt-5 text-grays ">
              <span className="text-second">IELTS</span>{" "}
              តំណាងឱ្យប្រព័ន្ធតេស្តភាសាអង់គ្លេសអន្តរជាតិ
              ដែលបានលេចចេញជាការធ្វើតេស្តសមត្ថភាពភាសាអង់គ្លេសដ៏ពេញនិយមបំផុតមួយនៅទូទាំងពិភពលោកសម្រាប់ការអប់រំខ្ពស់
              និងការធ្វើចំណាកស្រុកជាសកល។
            </p>
            <p className="md:text-[18px] text-[16px] mt-5 text-grays">
              IELTS
              រួមបញ្ចូលនូវជំនាញភាសាអង់គ្លេសពេញលេញដែលចាំបាច់សម្រាប់ទាំងការអប់រំ
              និងគោលបំណងការងារ ដូចជា ការស្តាប់ ការអាន ការសរសេរ និងការនិយាយ។
            </p>
          </div>
          <div className="mt-20">
            <h1 className="lg:text-[30px] md:text-[20px] text-[18px] font-bold mt-10 text-primary main">
              2. ហេតុអ្វីបានជា IELTS មានសារៈសំខាន់?{" "}
            </h1>
            <p className="md:text-[18px] text-[16px] leading-8 mt-5 text-grays">
              <span className="text-second">IELTS</span>
              ត្រូវបានទទួលយកជាសកលដោយអង្គការជាង 11,000 ដោយសារតែឥណទានរបស់ខ្លួន។
              ដូច្នេះ ជំនាញភាសាអង់គ្លេសរបស់អ្នកនឹងត្រូវបានផ្ទៀងផ្ទាត់
              និងទទួលស្គាល់ដោយស្ថាប័នអប់រំ និយោជក
              និងសូម្បីតែរដ្ឋាភិបាលជុំវិញពិភពលោកដែលមិនអាចប្រកែកបាន។
            </p>
            <p className="text-[18px] mt-5 text-grays">
              បានបង្ហាញខ្លួនកាលពី 30 ឆ្នាំមុន IELTS
              នៅតែរក្សាតំណែងនាំមុខរបស់ខ្លួនជាប្រព័ន្ធតេស្តភាសាអង់គ្លេសស្តង់ដារនាពេលបច្ចុប្បន្ននេះ។
            </p>
          </div>
          <div className="mt-20">
            <h1 className="lg:text-[30px] md:text-[20px] text-[18px] font-bold mt-10 text-primary main">
              3.ហេតុអ្វីបានជាអ្នកគួរជ្រើសរើសតេស្ត IELTS
              តាមអ៊ីនធឺណិតដោយមិនគិតថ្លៃ IELTS TEST
            </h1>
            <p className="md:text-[18px] text-[16px] leading-8 mt-5 text-grays">
              <span className="text-second">English Club</span>{" "}
              គឺជាកម្មវិធីមួយដែលជួយសម្រួលដល់អ្នកសិក្សា IELTS
              ជាមួយនឹងសំណួរឥតគិតថ្លៃ ការធ្វើតេស្តការអនុវត្ត ការបង្ហាញ
              និងរបាយការណ៍ពិន្ទុជាមួយនឹងការវិភាគលម្អិត។ ល្អបំផុតជាមួយនឹង English
              Club អ្នកអាចចូលប្រើមុខងារទាំងនេះបានគ្រប់ទីកន្លែង និងគ្រប់ពេលវេលា
              នៅពេលអ្នកចូលគេហទ័ររបស់យើង។
            </p>
            <p className="md:text-[18px] text-[16px] mt-5 text-grays">
              នៅពេលអ្នកអនុវត្តលើ IELTS ដែលចេញដោយ English
              Clubកម្មវិធីនេះតាមដានការអនុវត្តរបស់អ្នក និងបញ្ជាក់ពីភាពខ្លាំង
              និងចំណុចខ្សោយរបស់អ្នកក្នុងការធ្វើតេស្ដរបស់អ្នក
              ដោយជួយអ្នកមិនគិតពីអ្វីដែលអ្នកត្រូវសិក្សា ដើម្បីបង្កើនពិន្ទុតេស្ត
              IELTS របស់អ្នក។
            </p>
          </div>
        </section>
      </div>
    </section>
  );
}
