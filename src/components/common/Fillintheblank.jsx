import React from "react";

export default function Filltheblank({
  w1,
  w2,
  w3,
  w4,
  w5,
  s1,
  s2,
  s3,
  s4,
  s5,
}) {
  return (
    <>
      <section className=" max-w-full ld:max-w-[692px] ld:min-h-[614px] justify-center align-middle items-center m-auto">
        <div className=" max-w-[692px] min-h-[53px] flex flex-row bg-gray-400 items-center justify-around text-blue-950 border-solid border-red-600 ">
          <h1>Task</h1>
          <h1>Task</h1>
        </div>
        <div className="max-w-[692px] min-h-[563px] flex flex-row bg-zinc-600 items-center justify-around -z-0">
          <div className="w-[651px] min-h-[524px]  bg-white items-center justify-around z-10 px-5">
            <div>
              <h1 className="font-bold text-blue-900 ">Reading A-1</h1>
              <p>Put the answers to the questions in the gaps</p>
            </div>
            <div className="flex flex-row  gap-5 justify-center align-middle items-center m-auto  max-w-[465px] px-5 my-5 h-[46px] bg-slate-700 rounded-md">
              <div className="w-auto text-center max-h-[24px] px-3 bg-white text-md rounded-md">
                <p>{w1}</p>
              </div>
              <div className="w-auto text-center max-h-[26px] px-3 bg-white text-md rounded-md">
                <p>{w2}</p>
              </div>
              <div className="w-autotext-center max-h-[26px] px-3 bg-white text-md rounded-md">
                <p>{w3}</p>
              </div>
              <div className="w-auto text-center max-h-[26px] px-3 bg-white text-md rounded-md">
                <p>{w4}</p>
              </div>
              <div className="w-auto text-center max-h-[26px] px-3 bg-white text-md rounded-md">
                <p>{w5}</p>
              </div>
            </div>
            <div className="flex flex-col gap-[30px]">
              <div>
                <label>
                  {s1}
                  <input
                    color="purple"
                    className="w-[80px] h-[30px] text-center mx-3 rounded-md hover:border-blue-700 "
                    type="text"
                  />
                </label>
              </div>
              <div>
                <label>
                  {s2}
                  <input
                    color="purple"
                    className="w-[80px] h-[30px] text-center mx-3 rounded-md hover:border-blue-700 "
                    type="text"
                  />
                </label>
              </div>
              <div>
                <label>
                  {s3}
                  <input
                    color="purple"
                    className="w-[80px] h-[30px] text-center mx-3 rounded-md hover:border-blue-700 "
                    type="text"
                  />
                </label>
              </div>
              <div>
                <label>
                  {s4}
                  <input
                    color="purple"
                    className="w-[80px] h-[30px] text-center mx-3 rounded-md hover:border-blue-700 "
                    type="text"
                  />
                </label>
              </div>
              <div>
                <label>
                  {s5}
                  <input
                    color="purple"
                    className="w-[80px] h-[30px] text-center mx-3 rounded-md hover:border-blue-700 "
                    type="text"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
