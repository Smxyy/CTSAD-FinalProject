import { useState, useEffect } from "react";
import React from "react";
import Videomore from "../../components/common/Videomore";
import { lineWobble } from "ldrs";
import { trefoil } from "ldrs";

trefoil.register();

lineWobble.register();

export default function MoreVideo() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the duration as needed

    return () => clearTimeout(timer);
  }, []);
  return (
    // <section className="p-5 mt-5">
    <section
      className="bg-cover  h-auto  pt-5 pb-10   "
      style={{
        backgroundImage: `url(src/assets/kidbackground.jpg)`,
      }}
    >
      {" "}
      <h1 className="text-3xl p-5 text-center font-bold">វីដេអូជំនួយបន្ថែម</h1>
      {loading ? (
        <div className="flex flex-col justify-center items-center h-screen">
          {/* Replace with your preferred loading spinner */}
          <l-line-wobble
            size="1000"
            stroke="30"
            bg-opacity="0.1"
            speed="7"
            color="orange"
          ></l-line-wobble>

          <div className="text-3xl font-bold p-5">កំពុងទាញយកទិន្នន័យ</div>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row gap-5 m-auto justify-center items-center">
          {/* first col */}
          <div className="flex flex-col gap-5">
            {/* learn ABC */}
            <Videomore url="https://www.youtube.com/embed/ccEpTTZW34g?si=Mks5NGbdztCcui2L" />
            <Videomore url="https://www.youtube.com/embed/drlIUqRYM-w?si=JBVxYpFyfoq1FT5y" />
            {/* Speaking */}
            <Videomore url="https://www.youtube.com/embed/zOVXrkk4ClU?si=3gYIDzohiif4I8R7" />
            <Videomore url="https://www.youtube.com/embed/vINQSMVOJB8?si=uaPAGMGdOBQ2s0N9" />
            {/* Reading */}
            <Videomore url="https://www.youtube.com/embed/DSRQuDPkKF4?si=B1gszkEu024k6ugw" />
            <Videomore url="https://www.youtube.com/embed/l3RSiSUwlT0?si=xfZOzqQUze0pWOKO" />
            {/* English Podcast */}
            <Videomore url="https://www.youtube.com/embed/QoKpQMJnBHY?si=PbKLSxSHHzp8sLi5" />
            <Videomore url="https://www.youtube.com/embed/MulSik7xM3c?si=HIv9F-lV7QiG4nQ6" />
          </div>

          {/* second col */}
          <div className="flex flex-col gap-5">
            {/* learn ABC */}
            <Videomore url="https://www.youtube.com/embed/VDld_RPxqgY?si=7kmcQ_tgYG7SjbNP" />
            <Videomore url="https://www.youtube.com/embed/ChqnN3cKzXQ?si=WZE-tiIRAldj3-Nl" />
            {/* Speaking */}
            <Videomore url="https://www.youtube.com/embed/2K9V4VX7SEo?si=65N3GtACLRDJSFLv" />
            <Videomore url="https://www.youtube.com/embed/QAA_pmZ4s4U?si=nN8a44_qlkjUr2B8" />
            {/* Reading */}
            <Videomore url="https://www.youtube.com/embed/o3AoA7ZK5lY?si=LRLXWQySDSP_HZBh" />
            <Videomore url="https://www.youtube.com/embed/LOGzpbW2sUE?si=TSRM0e4PDggUDanp" />
            {/* Podcast */}
            <Videomore url="https://www.youtube.com/embed/lZcuACJw1dc?si=GtTEP2pWXgG3-AF2" />
            <Videomore url="https://www.youtube.com/embed/k4715CJ0Ii8?si=UNKHJWLOo2gCegrU" />
          </div>
        </div>
      )}
    </section>
    // </section>
  );
}
