import React from "react";
import { BsFillBalloonHeartFill } from "react-icons/bs";

export default function Contact() {
  return (
    <>
      <section className="w-10/12 mx-auto grid lg:grid-cols-2 grid-cols-1 gap-8 items-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-purple-900 text-4xl font-bold mb-4">
            ទំនាក់ទំនងមកយើង
          </h1>
          <p className="text-gray-600 text-[20px] mb-4 leading-10">
            សួស្តី! សូមស្វាគមន៍មកកាន់{" "}
            <span className="text-orange-500 font-bold">វេបសាយ</span>{" "}
            របស់យើងខ្ញុំ។ បើសិនជាអ្នកមានចម្ងល់ ឬត្រូវការការណែនាំដែលទាក់ទងទៅនឹងសំណួរផ្សេងៗ សូមចូលទៅកាន់តាម
            <span className="text-orange-500 font-bold"> ប្រអប់សារ</span>{" "}
            ដើម្បីផ្ញើសារមកកាន់ក្រុមការងាររបស់យើងអាចជួយដោះស្រាយជូន។ <br />
            សូមអរគុណ! <BsFillBalloonHeartFill className="ml-8" />
          </p>
        </div>
        <div className="flex justify-end items-end">
          <img
            src="src/assets/FAQs-bro.png"
            alt="FAQ Illustration"
            className="max-w-full w-10/12"
          />
        </div>
      </section>

      <section className="w-10/12 mx-auto grid lg:grid-cols-2 grid-cols-1 gap-8 items-center pb-16 -mt-16">
        <div className="flex justify-start items-start">
          <img
            src="src/assets/Chat bot-bro.png"
            alt="Chatbot Illustration"
            className="max-w-full w-10/12"
          />
        </div>
        <div className="flex flex-col bg-white p-6 rounded-lg shadow-lg">
          <form className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                ឈ្មោះ<span className="text-second">*</span>
              </label>
              <input
                type="text"
                id="email"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="បញ្ចូលឈ្មោះរបស់អ្នក"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                អ៊ីម៉ែល<span className="text-second">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="បញ្ចូលអ៊ីម៉ែលរបស់អ្នក"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                លេខទូរស័ព្ទ<span className="text-second">*</span>
              </label>
              <input
                type="text"
                id="phone"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="បញ្ចូលលេខទូរស័ព្ទរបស់អ្នក"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                ផ្ញើរសារ<span className="text-second">*</span>
              </label>
              <textarea
                id="message"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="បញ្ចូលសារបស់អ្នក"
                rows="4"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full text-white py-2 px-4 rounded-md bg-green-400 hover:bg-second transition duration-300"
              >
                ផ្ញើរ
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
