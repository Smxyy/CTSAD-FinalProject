import React from "react";

export default function IELTSCard({ title2, title1, des }) {
  return (
    <>
      <div className="w-[350px] bg-white text-start p-10 rounded-tr-[50px] rounded-bl-[50px] border-primary  border-l-8">
        <h1 className="text-4xl font-bold text-second">{title1}</h1>
        <h2 className="text-lg font-bold text-blues mt-7">{title2}</h2>
        <p className="leading-8 mt-3 text-[16px] text-grays">{des}</p>
      </div>
    </>
  );
}
