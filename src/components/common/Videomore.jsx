import React from "react";

export default function Videomore({ url }) {
  return (
    <div>
      <iframe
        className="rounded-xl border-4 border-yellow-400 m-1  w-[310px] h-[174.38px] xl:w-[450px] xl:h-[251.13px] xl:m-3 hover:drop-shadow-xl hover:brightness-75"
        src={url}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        allowFullScreen
      ></iframe>
    </div>
  );
}
