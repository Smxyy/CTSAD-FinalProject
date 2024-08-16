import React from "react";
import { FaFacebook, FaInstagram, FaTelegram, FaYoutube } from "react-icons/fa";
import "flowbite/dist/flowbite.min.css";
import "flowbite";
import { image } from "../../assets/img/img";
export default function Footer() {
  return (
    <div className="bg-primary text-white pt-8 z-10  pb-6 w-full ">
      <div
        //     className="container mx-auto px-10  flex md:flex-row md:justify-between md:items-center border-gray-600 border-b-2 md:pb-5
        // min-[320px]:flex-col  min-[320px]:px-10  min-[320px]:gap-6 min-[320px]:pb-5
        // "
        className="w-full flex md:flex-wrap md:flex-row md:items-center md:justify-between min-[320px]:gap-3 min-[320px]:justify-between  mx-auto md:py-5 md:px-10
        min-[320px]:py-3 min-[320px]:px-7 min-[320px]:flex-col border-gray-600 border-b-2"
      >
        <div className="flex flex-col lg:items-start mb-4 lg:mb-0">
          <a href="">
            <img
              src={image.img1}
              alt=""
              className="
              w-[150px]
              object-cover
              "
            />
          </a>
          <div className="flex gap-10 mt-5 ">
            <div className="">
              <a
                href="#"
                className="hover:text-gray-300 flex items-center font-Inter text-xl"
              >
                <FaFacebook className="mr-1" /> Facebook
              </a>
              <a
                href="#"
                className="hover:text-gray-300 flex items-center font-Inter text-xl mt-2"
              >
                <FaInstagram className="mr-1" /> Instagram
              </a>
            </div>
            <div className="">
              <a
                href="#"
                className="hover:text-gray-300 flex items-center
          font-Inter text-xl"
              >
                <FaTelegram className="mr-1" /> Telegram
              </a>
              <a
                href="#"
                className="hover:text-gray-300 flex items-center
          font-Inter text-xl mt-2"
              >
                <FaYoutube className="mr-1" /> YouTube
              </a>
            </div>
          </div>
          <p></p>
        </div>
        <div className="">
          <a href="/skills">
            <h3 className="font-bold mb-3 font-suwannaphum text-2xl text-black">
              ជំនាញ
            </h3>
          </a>
          <ul className="font-suwannaphum text-lg flex flex-col gap-y-4">
            <li>
              <a href="/skills/listening">ការសរសេរ</a>
            </li>
            <li>
              <a href="/skills/reading"> ការអាន</a>
            </li>
            <li className="md:mb-2 min-[320px]:mb-4">
              <a href="/skills/speaking">ការនិយាយ</a>
            </li>
          </ul>
          <a
            href="/about-us"
            className="font-suwannaphum text-2xl font-bold text-black "
          >
            អំពីពួកយើង
          </a>
        </div>
        <div>
          <a href="/grammar">
            <h3 className="font-bold mb-2 font-suwannaphum text-2xl text-black">
              វេយ្យាករណ៍
            </h3>
          </a>
          <ul className="font-suwannaphum text-lg  flex flex-col gap-y-4">
            <li>
              ​<a href="/grammar/a1-a2-grammar">កម្រិត​​​​ A1-A2</a>
            </li>
            <li>
              ​<a href="/grammar/b1-2-grammar">​កម្រិត B1-B2</a>
            </li>
            <li className="mb-2">
              ​<a href="#">កម្រិត​ C1</a>
            </li>
          </ul>
          <a
            href="/ielts"
            className="font-bold font-suwannaphum text-2xl text-black"
          >
            IELTS
          </a>
        </div>
        <div>
          <h3 className="font-bold mb-2 font-suwannaphum text-2xl text-black">
            <a href="/vocabulary">ពាក្យគន្លឹះ</a>
          </h3>
          <ul className="font-suwannaphum text-lg flex flex-col gap-y-4">
            <li>
              ​<a href="/vocabulary/a1-a2-vocabulary">កម្រិត​ A1-A2</a>
            </li>
            <li>
              ​<a href="/vocabulary/b1-b2-vocabulary">កម្រិត​ B1-B2</a>
            </li>
            <li>
              ​<a href="#"></a>
            </li>
            <li>
              ​<a href="#"></a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-6 text-xl font-Inter">© English Club</div>
    </div>
  );
}
