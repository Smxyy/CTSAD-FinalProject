import React from "react";
import { FaGithub, FaTelegram, FaFacebook } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import action from "../../assets/action.jpg";
import action1 from "../../assets/action1.jpg";
import action4 from "../../assets/img/action4.jpg";
import Marquee from "react-fast-marquee";
export default function AboutUs() {
  AOS.init();
  return (
    <section>
      <div class="relative mx-auto lg:w-[1164px] w-full h-auto lg:h-[290px] flex justify-center lg:justify-start object-cover">
        <img
          className="w-full h-auto object-cover"
          src="src/assets/Group1.png"
          alt=""
        />
      </div>

      <section class="flex flex-col md:flex-row gap-5 justify-center items-center ">
        <div class="relative overflow-hidden mt-16 mx-5 md:mx-20 W-[500px]">
          <img
            className="object-cover w-full h-auto"
            src="src/assets/pic main.png"
            alt="Business mission"
          />
        </div>

        <div class="m-5 md:m-20 text-gray-600 lg:w-auto w-[500px] text-justify  md:text-center lg:text-center">
          <h1 class="text-blue-950 text-4xl md:text-3xl font-bold mt-10">
            ការរៀនភាសាអង់គ្លេស
            <span class="text-orange-500">តាមអ៊ីនធឺណិត</span>
            <span>គ្មានដែនកំណត់នៅ</span>
            <span class="text-green-500">
              {" "}
              <br />
              ចុងម្រាមដៃរបស់អ្នក
            </span>
          </h1>

          <div class="mt-5 space-y-2 text-xl  ">
            <p>
              EnglishClub
              ត្រូវបានបង្កើតឡើងដោយនិស្សិតកម្ពុជាមួយក្រុមដែលកំពុងសិក្សានៅមជ្ឈមណ្ឌល
            </p>
            <p>
              អភិវឌ្ឍន៍វិទ្យាសាស្ត្រនិងបច្ចេកវិទ្យាកម្រិតខ្ពស់ (CSTAD)។
              វាត្រូវបានសរសេរជាចម្បងជាភាសាខ្មែរ
            </p>
            <p>
              នៃអត្ថបទរបស់យើងប៉ុន្តែលំហាត់ពួកយើងសរសេរជាភាសាអង់គ្លេស។ប៉ុន្តែយើងមានទំព័រអំពីប្រភេទផ្សេងៗនៃមេរៀន។EnglishClub
              រៀនដោយឥតគិតថ្លៃ។
            </p>
            <p>
              EnglishClub គឺជាក្លឹបរបស់អ្នក។
              សូមប្រើវាតាមមធ្យោបាយណាមួយដែលអ្នកចង់រៀនភាសាអង់គ្លេស។
            </p>
            <p>
              សូម​កុំ​ភ្ញាក់​ផ្អើល​ប្រសិន​បើ​អ្នក​ឃើញ​ពាក្យ​ដែល​អ្នក​គិត​ថា​អក្ខរាវិរុទ្ធ​ខុស។​
              សូម​ផ្តល់​យោបល់​មក​ខ្ញុំ​នៅ​ពាក្យ​
            </p>
            <p>ដែល​ខុស​នោះ!!!សូមសំណាងល្អទាំងអស់គ្នា!!​</p>
          </div>
        </div>
      </section>

      <section class="flex flex-col md:flex-row  gap-5 justify-center items-center ">
        <div class="m-5 md:m-20 text-gray-600  ">
          <h1 class="text-blue-950  md:text-3xl font-bold  text-center text-4xl ">
            បេសកកម្មចម្បង
          </h1>
          <div class="mt-5 space-y-2 text-xl w-[600px] text-justify">
            <p>
              បេសកកម្មរបស់យើងគឺផ្តល់នូវការអប់រំភាសាអង់គ្លេសដែលមានគុណភាពខ្ពស់និងអាចចូលប្រើបានដល់វាយើងមានគោលបំណងបង្កើនឱកាសសម្រាប់បុគ្គលទាំងអស់ដោយផ្តល់ជូននូវមេរៀនដ៏ទូលំទូលាយដែលគ្របដណ្តប់វាក្យសព្ទវេយ្យាករណ៍និងជំនាញភាសាសំខាន់ៗដូចជាការស្តាប់ការនិយាយ។ការសរសេរនិងការអានតាមរយៈការធ្វើឱ្យការអប់រំភាសាអង់គ្លេសមានសម្រាប់មនុស្សគ្រប់គ្នាយើងខិតខំជួយដល់សិស្សនៅតាមជនបទ
              និងពីគ្រួសារក្រីក្រដោយធានាថាពួកគេមានឧបករណ៍ចាំបាច់សម្រាប់ភាពជោគជ័យក្នុងការទំនាក់ទំនងអន្តរជាតិ
              និងឱកាសសកល។
            </p>
          </div>
        </div>
        <div class="relative overflow-hidden w-full md:max-w-[486px] sm:min-h-[243px]">
          <img
            className="object-cover rounded-lg w-full h-auto "
            src="src/assets/Business mission.gif"
            alt="Kids reading"
          />
        </div>
      </section>

      <section class="flex flex-col md:flex-row gap-5 justify-center items-center">
        <div class="relative overflow-hidden w-full md:max-w-[486px] sm:min-h-[243px]">
          <img
            data-aos="fade-up"
            className="object-cover rounded-lg w-full h-auto"
            src="src/assets/Vision board.gif"
            alt="Business mission"
          />
        </div>
        <div class="m-5 md:m-20 text-gray-600">
          <h1 className="text-blue-950  md:text-3xl font-bold mt-10 text-center text-4xl">
            គោលបំណងរបស់យើង
          </h1>
          <div class="mt-5 space-y-2 text-xl text-justify w-[600px]">
            <p>
              ចក្ខុវិស័យ៖ដើម្បីផ្សារភ្ជាប់គម្លាតនៃការអប់រំនិងផ្តល់សិទ្ធិអំណាចដល់វាគ្មិនខ្មែរជាមួយនឹងជំនាញភាសាអង់គ្លេសដែលចាំបាច់ដើម្បីទទួលបានជោគជ័យក្នុងពិភពសាកលភាវូបនីយកម្មដោយធានាថាបុគ្គលគ្រប់រូបដោយមិនគិតពីឧបសគ្គផ្នែកហិរញ្ញវត្ថុមានលទ្ធភាពទទួល
              បានការអប់រំភាសាអង់គ្លេសដែលមានគុណភាពខ្ពស់។
            </p>
          </div>
        </div>
      </section>
      <p className="text-center mt-20 font-bold   text-4xl text-blue-950 ">
        អ្នកណែនាំរបស់យើង
      </p>
      <section className="flex items-center  bg-white-200 mt-20 justify-center  gap-20  lg:left-[95px]  w-full  lg:w-[1164px] h-auto lg:h-[290px] mx-auto flex-col lg:flex-row lg:items-center ">
        <div className="max-w-xs   text-white rounded-2xl overflow-hidden relative p-4 bg-slate-100 transition-colors duration-200 transform  group">
          <div className="flex justify-center ">
            <img
              className="w-32 h-32 object-cover rounded-full border-4 border-yellow-400 p-0"
              src="src\assets\Reksmey.PNG"
              alt="Profile Picture"
            />
          </div>
          <div className="text-center mt-2">
            <h2 className="text-lg font-semibold text-gray-600 font-Inter">
              Mom Reksmey
            </h2>
            <p className="text-sm text-gray-600 font-Inter">
              Instructor - Leader, Data Analysist
            </p>
            <p className="mt-2 text-gray-600 font-Inter">
              Center of Science and Technology Advanced Development
            </p>
          </div>
          <div className="text-center mt-4">
            <p className="bg-blue-800 text-white py-2 px-4 rounded-lg inline-block font-Inter">
              reksmey@gmail.com
            </p>
          </div>
          <div className="flex justify-center mt-4 mb-4 space-x-4">
            <a href="#" className="text-green-500">
              <FaGithub />
            </a>
            <a href="#" className="text-green-500">
              <FaFacebook />
            </a>

            <a href="#" className="text-green-500">
              <FaTelegram />
            </a>
          </div>
        </div>

        <div className="max-w-xs  text-white rounded-2xl overflow-hidden relative p-4  bg-slate-100">
          <div className="flex justify-center ">
            <img
              className="w-32 h-32 object-cover rounded-full border-4 border-yellow-400 p-0"
              src="src\assets\teachersokpheng.jpg"
              alt="Profile Picture"
            />
          </div>
          <div className="text-center mt-2">
            <h2 className="text-lg font-semibold text-gray-600 font-Inter">
              Kim Chansokpheng
            </h2>
            <p className="text-sm text-gray-600 font-Inter">
              Instructor - Cyber security
            </p>
            <p className="mt-2 text-gray-600 font-Inter">
              Center of Science and Technology Advanced Development
            </p>
          </div>
          <div className="text-center mt-4">
            <p className="bg-blue-800 text-white py-2 px-4 rounded-lg inline-block font-Inter">
              sokpheng@gmail.com
            </p>
          </div>
          <div className="flex justify-center mt-4 mb-4 space-x-4">
            <a href="#" className="text-green-500">
              <FaGithub />
            </a>
            <a href="#" className="text-green-500">
              <FaFacebook />
            </a>
            <a href="#" className="text-green-500">
              <FaTelegram />
            </a>
          </div>
        </div>
      </section>

      <p className="text-center mt-24 text-4xl font-bold text-blue-950">
        ក្រុមរបស់ពួកយើង
      </p>

      <section className="flex items-center  bg-white-200 mt-20 justify-center gap-20 lg:left-[95px]  w-full  lg:w-[1164px] h-auto lg:h-[290px] mx-auto  flex-col lg:flex-row lg:items-center ">
        <div className="max-w-xs text-white rounded-2xl overflow-hidden relative p-4  bg-slate-100 ">
          <div className="flex justify-center ">
            <img
              className="w-32 h-32 object-cover rounded-full border-4 border-yellow-400 p-0"
              src="src\assets\DEAP Sokreaksmey.JPG"
              alt="Profile Picture"
            />
          </div>
          <div className="text-center mt-2">
            <h2 className="text-lg font-semibold text-gray-600 font-Inter">
              Deap Sokreaksmey
            </h2>
            <p className="text-sm text-gray-600 font-Inter">UX / UI</p>
            <p className="mt-2 text-gray-600 font-Inter">
              Center of Science and Technology Advanced Development
            </p>
          </div>
          <div className="text-center mt-4">
            <p className="bg-blue-800 text-white py-2 px-4 rounded-lg inline-block font-Inter">
              joeylenerivera@gmail.com
            </p>
          </div>
          <div className="flex justify-center mt-4 mb-4 space-x-4">
            <a href="https://github.com/Smxyy" className="text-green-500">
              <FaGithub />
            </a>
            <a
              href="https://www.facebook.com/sokreaksmey.deap?mibextid=JRoKGi"
              className="text-green-500"
            >
              <FaFacebook />
            </a>
            <a href="https://t.me/Smxyy" className=" text-green-500">
              <FaTelegram />
            </a>
          </div>
        </div>

        <div className="max-w-xs  bg-slate-100 text-white rounded-2xl overflow-hidden relative p-4">
          <div className="flex justify-center ">
            <img
              className="w-32 h-32 object-cover rounded-full border-4 border-yellow-400 p-0"
              src="src\assets\Huon Kanha.JPG"
              alt="Profile Picture"
            />
          </div>
          <div className="text-center mt-2">
            <h2 className="text-lg font-semibold text-gray-600 font-Inter">
              Huon Kanha
            </h2>
            <p className="text-sm text-gray-600 font-Inter">UX / UI</p>
            <p className="mt-2 text-gray-600 font-Inter">
              Center of Science and Technology Advanced Development
            </p>
          </div>
          <div className="text-center mt-4">
            <p className="bg-blue-800 text-white py-2 px-4 rounded-lg inline-block font-Inter">
              joeylenerivera@gmail.com
            </p>
          </div>
          <div className="flex justify-center mt-4 mb-4 space-x-4">
            <a href="https://github.com/Huonkanha" className="text-green-500">
              <FaGithub />
            </a>
            <a
              href="https://www.facebook.com/KanhaKanhaIT?mibextid=ZbWKwL"
              className="text-green-500"
            >
              <FaFacebook />
            </a>
            <a href="https://t.me/Kanha_Kanha0" className="text-green-500">
              <FaTelegram />
            </a>
          </div>
        </div>

        <div className="max-w-xs  bg-slate-100 text-white rounded-2xl overflow-hidden relative p-4">
          <div className="flex justify-center ">
            <img
              className="w-32 h-32 object-cover rounded-full border-4 border-yellow-400 p-0"
              src="src\assets\Huon Sreylen.jpg"
              alt="Profile Picture"
            />
          </div>
          <div className="text-center mt-2">
            <h2 className="text-lg font-semibold text-gray-600 font-Inter">
              Huon Sreylen
            </h2>
            <p className="text-sm text-gray-600 font-Inter">UX / UI</p>
            <p className="mt-2 text-gray-600 font-Inter">
              Center of Science and Technology Advanced Development
            </p>
          </div>
          <div className="text-center mt-4">
            <p className="bg-blue-800 text-white py-2 px-4 rounded-lg inline-block font-Inter">
              joeylenerivera@gmail.com
            </p>
          </div>
          <div className="flex justify-center mt-4 mb-4 space-x-4">
            <a href="https://github.com/SreylenHuon" className="text-green-500">
              <FaGithub />
            </a>
            <a
              href="https://www.facebook.com/ii.ly.71?mibextid=LQQJ4d"
              className="text-green-500"
            >
              <FaFacebook />
            </a>
            <a href="https://t.me/HuonSreylen" className="text-green-500">
              <FaTelegram />
            </a>
          </div>
        </div>
      </section>

      <section className="flex items-center bg-white-200  justify-center gap-20 mt-12   lg:left-[95px]  w-full  lg:w-[1164px] h-auto lg:h-[290px] mx-auto  flex-col lg:flex-row lg:items-center">
        <div className="max-w-xs  bg-slate-100 text-white rounded-2xl overflow-hidden relative p-4 ">
          <div className="flex justify-center ">
            <img
              className="w-32 h-32 object-cover rounded-full border-4 border-yellow-400 p-0"
              src="src\assets\sophy.JPG"
              alt="Profile Picture"
            />
          </div>
          <div className="text-center mt-2">
            <h2 className="text-lg font-semibold text-gray-600 font-Inter">
              Sophy Phorn
            </h2>
            <p className="text-sm text-gray-600 font-Inter">UX / UI</p>
            <p className="mt-2 text-gray-600 font-Inter">
              Center of Science and Technology Advanced Development
            </p>
          </div>
          <div className="text-center mt-4">
            <p className="bg-blue-800 text-white py-2 px-4 rounded-lg inline-block font-Inter">
              joeylenerivera@gmail.com
            </p>
          </div>
          <div className="flex justify-center mt-4 mb-4 space-x-4">
            <a href="https://github.com/phornsophy" className="text-green-500">
              <FaGithub />
            </a>
            <a
              href="https://www.facebook.com/sophy.phorn.39?mibextid=LQQJ4d"
              className="text-green-500"
            >
              <FaFacebook />
            </a>
            <a href="https://t.me/Phy_yyyy" className="text-green-500">
              <FaTelegram />
            </a>
          </div>
        </div>

        <div className="max-w-xs  bg-slate-100 text-white rounded-2xl overflow-hidden relative p-4">
          <div className="flex justify-center ">
            <img
              className="w-32 h-32 object-cover rounded-full border-4 border-yellow-400 p-0"
              src="src\assets\Buthna.jpg"
              alt="Profile Picture"
            />
          </div>
          <div className="text-center mt-2">
            <h2 className="text-lg font-semibold text-gray-600 font-Inter">
              Pheng Bunath
            </h2>
            <p className="text-sm text-gray-600 font-Inter">UX / UI</p>
            <p className="mt-2 text-gray-600 font-Inter">
              Center of Science and Technology Advanced Development
            </p>
          </div>
          <div className="text-center mt-4">
            <p className="bg-blue-800 text-white py-2 px-4 rounded-lg inline-block font-Inter">
              joeylenerivera@gmail.com
            </p>
          </div>
          <div className="flex justify-center mt-4 mb-4 space-x-4">
            <a href="https://github.com/BunathPheng" className="text-green-500">
              <FaGithub />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100027603155423&mibextid=LQQJ4d"
              className="text-green-500"
            >
              <FaFacebook />
            </a>
            <a href="https://t.me/pheng_bunath" className="text-green-500">
              <FaTelegram />
            </a>
          </div>
        </div>

        <div className="max-w-xs  bg-slate-100 text-white rounded-2xl overflow-hidden relative p-4">
          <div className="flex justify-center ">
            <img
              className="w-32 h-32 object-cover rounded-full border-4 border-yellow-400 p-0"
              src="src\assets\Chheam Bunthoeun.jpg"
              alt="Profile Picture"
            />
          </div>
          <div className="text-center mt-2">
            <h2 className="text-lg font-semibold text-gray-600 font-Inter">
              Chheam Bunthoeun
            </h2>
            <p className="text-sm text-gray-600 font-Inter">UX / UI</p>
            <p className="mt-2 text-gray-600 font-Inter">
              Center of Science and Technology Advanced Development
            </p>
          </div>
          <div className="text-center mt-4">
            <p className="bg-blue-800 text-white py-2 px-4 rounded-lg inline-block font-Inter">
              joeylenerivera@gmail.com
            </p>
          </div>
          <div className="flex justify-center mt-4 mb-4 space-x-4">
            <a href="https://github.com/B-T565" className="text-green-500">
              <FaGithub />
            </a>
            <a
              href="https://www.facebook.com/pamak.love.100/"
              className="text-green-500"
            >
              <FaFacebook />
            </a>
            <a href="https://t.me/chheam_Bunthoeun" className="text-green-500">
              <FaTelegram />
            </a>
          </div>
        </div>
      </section>

      <section className="flex items-center bg-white-200 fade-up  justify-center gap-20 mt-12  lg:left-[95px]  w-full  lg:w-[1164px] h-auto lg:h-[290px] mx-auto  flex-col lg:flex-row lg:items-center">
        <div className="max-w-xs  bg-slate-100 text-white rounded-2xl overflow-hidden relative p-4">
          <div className="flex justify-center ">
            <img
              className="w-32 h-32 object-cover rounded-full border-4 border-yellow-400 p-0 items-center"
              src="src\assets\makara.jpg"
              alt="Profile Picture"
            />
          </div>
          <div className="text-center mt-2">
            <h2 className="text-lg font-semibold text-gray-600 font-Inter">
              Noev Chanmakara
            </h2>
            <p className="text-sm text-gray-600 font-Inter">UX / UI</p>
            <p className="mt-2 text-gray-600 font-Inter">
              Center of Science and Technology Advanced Development
            </p>
          </div>
          <div className="text-center mt-4">
            <p className="bg-blue-800 text-white py-2 px-4 rounded-lg inline-block font-Inter">
              joeylenerivera@gmail.com
            </p>
          </div>
          <div className="flex justify-center mt-4 mb-4 space-x-4">
            <a
              href="https://github.com/noevchanmakara126"
              className="text-green-500"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.facebook.com/jr.makara10?mibextid=LQQJ4d"
              className="text-green-500"
            >
              <FaFacebook />
            </a>
            <a href="https://t.me/makaraJr10" className="text-green-500">
              <FaTelegram />
            </a>
          </div>
        </div>

        <div className="max-w-xs  bg-slate-100 text-white rounded-2xl overflow-hidden relative p-4">
          <div className="flex justify-center ">
            <img
              className="w-32 h-32 object-cover rounded-full border-4 border-yellow-400 p-0"
              src="src\assets\Lorn Yuhan.jpg"
              alt="Profile Picture"
            />
          </div>
          <div className="text-center mt-2">
            <h2 className="text-lg font-semibold text-gray-600 font-Inter">
              Lorn Yuhan
            </h2>
            <p className="text-sm text-gray-600 font-Inter">UX / UI</p>
            <p className="mt-2 text-gray-600 font-Inter">
              Center of Science and Technology Advanced Development
            </p>
          </div>
          <div className="text-center mt-4">
            <p className="bg-blue-800 text-white py-2 px-4 rounded-lg inline-block font-Inter">
              joeylenerivera@gmail.com
            </p>
          </div>
          <div className="flex justify-center mt-4 mb-4 space-x-4">
            <a href="https://github.com/yuhanlorn" className="text-green-500">
              <FaGithub />
            </a>
            <a
              href="https://www.facebook.com/lorn.yuhan.5?mibextid=ZbWKwL"
              className="text-green-500"
            >
              <FaFacebook />
            </a>
            <a href="https://t.me/Mycodeiserror404" className="text-green-500">
              <FaTelegram />
            </a>
          </div>
        </div>
        <div className="max-w-xs  bg-slate-100 text-white rounded-2xl overflow-hidden relative p-4">
          <div className="flex justify-center ">
            <img
              className="w-32 h-32 object-cover rounded-full border-4 border-yellow-400 p-0"
              src="src\assets\LOEUNG LINA.jpg"
              alt="Profile Picture"
            />
          </div>
          <div className="text-center mt-2">
            <h2 className="text-lg font-semibold text-gray-600 font-Inter">
              Loeung Lina
            </h2>
            <p className="text-sm text-gray-600 font-Inter">UX / UI</p>
            <p className="mt-2 text-gray-600 font-Inter">
              Center of Science and Technology Advanced Development
            </p>
          </div>
          <div className="text-center mt-4">
            <p className="bg-blue-800 text-white py-2 px-4 rounded-lg inline-block font-Inter">
              joeylenerivera@gmail.com
            </p>
          </div>
          <div className="flex justify-center mt-4 mb-4 space-x-4">
            <a href="#" className="text-green-500">
              <FaGithub />
            </a>
            <a href="#" className="text-green-500">
              <FaFacebook />
            </a>
            <a href="#" className="text-green-500">
              <FaTelegram />
            </a>
          </div>
        </div>
      </section>

      <p className="text-center mt-20 text-4xl font-bold text-blue-950 ">
        <Marquee>
          {" "}
          មជ្ឈមណ្ឌលអភិវឌ្ឍន៍វិទ្យាសាស្ត្រ និងបច្ចេកវិទ្យាកម្រិតខ្ពស់ - CSTAD{" "}
        </Marquee>
      </p>
      <div className="  flex justify-center items-center container mx-auto py-8 mt-20 ">
        <img
          className="lg:left-[95px] rounded justify-between lg:w-[1164px] h-auto lg:h-[290px] mx-auto flex flex-col lg:flex-row lg:items-center"
          src="src\assets\GroupTeamschool.png"
          alt=""
        />
      </div>
      <div className=" grid grid-cols-1 mb-20 md:grid-cols-3 gap-3  ml-24 lg:left-[95px] justify-between lg:w-[1164px] lg:h-[290px] mx-auto lg:flex-row lg:items-center  ">
        <img className="rounded-lg" src={action} alt="" />
        <img className=" rounded-lg" src={action1} alt="" />
        <img className="rounded-lg" src={action4} alt="" />
      </div>
    </section>
  );
}
