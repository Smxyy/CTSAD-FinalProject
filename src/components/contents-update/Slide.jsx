import React, { useEffect, useRef, useState } from "react";
import parse from "html-react-parser";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./Slide.css";
import { Navigation, Autoplay } from "swiper/modules";
import CardContentUpdate from "../common/cards/CardContentUpdate";
import img from "../../assets/img/card-img4.png";
import litening from "../../assets/img/card-img2.png";
import reading from "../../assets/img/card-img3.png";
import img3 from "../../assets/img/card-img1.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchExcersices, selectExcersice } from "../../redux/features/lessondetail/lessondetailSlice";
import { fetchLessons, selectAllLessons } from "../../redux/features/lessons/LessonsSlice";
export default function Slide() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchLessons());
  }, [dispatch])
  const lessons = useSelector(selectAllLessons);
  const lastFourLessons = lessons.slice(-4);
  console.log("lessons:", lastFourLessons);
  return (
    <>
      <Swiper
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
        slidesPerView={4}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
        }}
      >
        <div className="">
          {lastFourLessons.map((lesson, index)=>{
            return (
            <SwiperSlide key={index}>
            <CardContentUpdate
              img={lesson?.thumbnail}
              title={lesson?.lesson_title}
              des={parse(lesson?.description)}
            />
          </SwiperSlide>
            )
          })}
          
          {/* <SwiperSlide>
            <CardContentUpdate
              img={litening}
              title="Writting/ការសរសេរ"
              des="A Request From Your Boss"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardContentUpdate
              img={reading}
              title="Reading/ការអាន"
              des="A Request From Your Boss"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardContentUpdate
              img={img3}
              title="Reading/ការអាន"
              des="A Request From Your Boss"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardContentUpdate
              img={litening}
              title="Writting/ការសរសេរ"
              des="A Request From Your Boss"
            />
          </SwiperSlide> */}
        </div>
      </Swiper>
    </>
  );
}
