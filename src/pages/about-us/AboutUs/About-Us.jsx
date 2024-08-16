import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./About-Us.css";
import { BsFillBalloonHeartFill } from "react-icons/bs";
import Marquee from "react-fast-marquee";
import { FaRegHandPointRight } from "react-icons/fa";
import { FaGithub, FaTelegram, FaFacebook } from "react-icons/fa";
import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect, useState } from "react";
import LoadingAboutUs from "../../../components/common/loading/LoadingAboutUs";
export default function AboutUs() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Aos.init({delay: 200, duration: 1200});
    
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsLoading(false);
    };

    fetchData();
  }, []);

  if(isLoading){
    return <LoadingAboutUs/>
  }

  return (
    <section className="bg-slate-50">
      <section>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper md:h-[550px] mb-10 md:mb-[56px]"
        >
          <SwiperSlide>
            <img
              className="w-full h-full object-cover"
              src="src/assets/img/banner2.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-full object-cover"
              src="src/assets/img/banner1.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-full h-full object-cover"
              src="src/assets/img/banner3.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </section>

      <section className="w-[90%] mx-auto mb-12">
        <div className="text-center mb-6">
          <h1 className="text-blue-950 text-3xl md:text-4xl font-bold">
            ការរៀនភាសាអង់គ្លេស
            <span className="text-orange-500"> តាមអ៊ីនធឺណិត </span>
            គ្មានដែនកំណត់នៅ
            <span className="text-green-500"> ចុងម្រាមដៃរបស់អ្នក</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[20px] md:text-[22px] text-gray-600 leading-10 pt-5">
          <div className="md:col-span-2 text-justify">
            <p>
              <span className="text-second font-semibold">EnglishClub</span>{" "}
              ត្រូវបានបង្កើតឡើងដោយនិស្សិតកម្ពុជាមួយក្រុមដែលកំពុងសិក្សានៅមជ្ឈមណ្ឌលអភិវឌ្ឍន៍វិទ្យាសាស្ត្រនិងបច្ចេកវិទ្យាកម្រិតខ្ពស់{" "}
              <span className="text-primary">(CSTAD)</span>។
              វាត្រូវបានសរសេរលើដំបូងជាភាសាខ្មែរនៃអត្ថបទរបស់យើង
              ប៉ុន្តែលំហាត់ពួកយើងសរសេរជាភាសាអង់គ្លេស។{" "}
              យើងមានទំព័រអំពីប្រភេទផ្សេងៗនៃមេរៀន។{" "}
              <span className="text-second">EnglishClub</span> រៀនដោយឥតគិតថ្លៃ។{" "}
              <span className="text-second">EnglishClub</span>{" "}
              គឺជាក្លឹបរបស់អ្នក។
              សូមប្រើវាតាមមធ្យោបាយណាមួយដែលអ្នកចង់រៀនភាសាអង់គ្លេស។
              សូម​កុំ​ភ្ញាក់​ផ្អើល
              ​ប្រសិន​បើ​អ្នក​ឃើញ​ពាក្យ​ដែល​អ្នក​គិត​ថា​អក្ខរាវិរុទ្ធ​ខុស។​
              សូម​ផ្តល់​យោបល់​មកកាន់ពួក​ខ្ញុំ​នៅ​ពាក្យ​ដែល​អ្នកគិតខុស​នោះ!!
              <br />
              <span className="text-blue-950">
                សូមសំណាងល្អទាំងអស់គ្នា!!
                <BsFillBalloonHeartFill className="inline ml-2" />
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="w-[90%] mx-auto mb-12">
        <h1 className="flex justify-center items-center text-blue-950 text-2xl md:text-4xl font-bold underline pt-5 pb-8">
          <FaRegHandPointRight className="animate-hand-point" />
          <span className="ml-8">បេសកកម្មចម្បង</span>
        </h1>
          
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10 md:mt-10 lg:mt-12 space-y-2 md:space-y-3">
          <div className="w-full h-[200px] md:h-[350px] lg:h-[400px]">
            <img
              className="w-full h-full object-cover -ml-[8px] md:-ml-[16px]"
              src="src/assets/img/mission.png"
              alt="Kids reading"
            />
          </div>

          <div
            className="flex justify-center items-center text-[20px] md:text-[22px] leading-10 md:leading-10 text-gray-600"
          >
            <p className="mt-0 text-[20px]">
              <span className="text-second">បេសកកម្មរបស់យើង</span>
              <span className="ml-2">
                គឺផ្តល់នូវការអប់រំភាសាអង់គ្លេសដែលមានគុណភាពខ្ពស់និងអាចចូលប្រើបាន។
                យើងមានគោលបំណងបង្កើតឱកាសសម្រាប់បុគ្គលទាំងអស់ដោយផ្តល់ជូននូវមេរៀនដ៏ទូលំទូលាយដែលគ្របដណ្តប់{" "}
                <span className="text-second">វាក្យសព្ទ វេយ្យាករណ៍</span>{" "}
                និងជំនាញភាសាសំខាន់ៗដូចជា{" "}
                <span className="text-second">ការស្តាប់ ការនិយាយ</span>។{" "}
                <span className="text-second">ការសរសេរ</span> និង{" "}
                <span className="text-second">ការអាន</span>{" "}
                តាមរយៈការធ្វើឱ្យការអប់រំភាសាអង់គ្លេសមានសម្រាប់មនុស្សគ្រប់គ្នា
                យើងនិងខិតខំជួយដល់សិស្សនៅតាមជនបទ
                និងគ្រួសារក្រីក្រដោយធានាថាពួកគេមានឧបករណ៍ចាំបាច់សម្រាប់ភាពជោគជ័យក្នុងការទំនាក់ទំនងអន្តរជាតិនិងឱកាសជាសកល។
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="w-[90%] mx-auto mb-12">
        <h1 className="flex justify-center items-center text-blue-950 text-2xl md:text-4xl font-bold underline py-12">
          <FaRegHandPointRight className="animate-hand-point" />
          <span className="ml-8">គោលបំណងរបស់យើង</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-8 md:mt-10 lg:mt-12 space-y-2 md:space-y-3">
          <div
            className="w-full h-[200px] md:h-[350px] lg:h-[400px] order-first lg:order-last"
          >
            <img
              className="w-full h-full object-cover"
              src="src/assets/img/mission2.png"
              alt="Business mission"
            />
          </div>

          <div
            className="flex justify-center items-center text-[20px] md:text-[22px] leading-10 md:leading-10 text-gray-600"
          >
            <p className="mt-0">
              <span className="text-second">ចក្ខុវិស័យ៖</span>
              <span className="ml-2">
                ដើម្បីផ្សារភ្ជាប់គម្លាតនៃការអប់រំនិងផ្តល់សិទ្ធិអំណាចដល់វាគ្មិនខ្មែរជាមួយនឹងជំនាញភាសាអង់គ្លេសដែលចាំបាច់
                ដើម្បីទទួលបានជោគជ័យក្នុងពិភពសាកលភាវូបនីយកម្មដោយធានាថាបុគ្គលគ្រប់រូបដោយមិនគិតពីឧបសគ្គផ្នែកហិរញ្ញវត្ថុមានលទ្ធភាពទទួលបានការអប់រំភាសាអង់គ្លេសដែលមានគុណភាពខ្ពស់។
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="w-[90%] mx-auto mb-12">
        <h1 className="flex justify-center items-center text-blue-950 text-2xl md:text-4xl font-bold underline py-12">
          <FaRegHandPointRight className="animate-hand-point" />
          <span className="ml-8">អ្នកណែនាំរបស់យើង</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-8 md:mt-10 lg:mt-12">
          <div className="grid grid-cols-2 bg-slate-200 rounded-md">
            <div className="w-full h-full ml-2 md:ml-5">
              <img
                className="w-4/5 object-cover"
                src="src/assets/img/Cher smey.png"
                alt="Mom Reksmey"
              />
            </div>
            <div className="w-full flex flex-col justify-center items-stjustify-start mr-8 py-2">
              <h1 className="text-[18px] md:text-2xl font-bold text-blue-950">
                Mom Reksmey
              </h1>
              <p className="text-[14px] md:text-[16px] line-clamp-1 md:line-clamp-none text-second md:mt-2">
                Instructor - Leader, Data Analysis
              </p>
              <p className="text-[16px] md:text-[18px] line-clamp-1 md:line-clamp-none text-gray-600 md:mt-2">
                Do it because they said you couldn’t.
              </p>
              <div className="flex space-x-2 md:space-x-4 text-[20px] md:text-3xl mt-[8px] md:mt-[18px]">
                <a href="https://gitlab.com/raksmeys" className="text-blue-950">
                  <FaGithub />
                </a>
                <a
                  href="https://www.facebook.com/mom.reksmey.12?mibextid=LQQJ4d"
                  className="text-blue-950"
                >
                  <FaFacebook />
                </a>
                <a href="https://t.me/reksmey_mom" className="text-blue-950">
                  <FaTelegram />
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 bg-slate-200 rounded-md">
            <div className="w-full h-full ml-2 md:ml-5">
              <img
                className="w-4/5 object-cover"
                src="src/assets/img/cher pheng.png"
                alt="Kim Chansokpheng"
              />
            </div>
            <div className="w-full flex flex-col justify-center items-stjustify-start mr-8 py-2">
              <h1 className="text-[18px] md:text-2xl font-bold text-blue-950">
                Kim Chansokpheng
              </h1>
              <p className="text-[14px] md:text-[16px] line-clamp-1 md:line-clamp-none text-second md:mt-2">
                Instructor - Leader, Cybersecurity
              </p>
              <p className="text-[16px] md:text-[18px] line-clamp-1 md:line-clamp-none text-gray-600 md:mt-2">
                Be humble
              </p>
              <div className="flex space-x-2 md:space-x-4 text-[20px] md:text-3xl mt-[8px] md:mt-[18px]">
                <a
                  href="https://github.com/sokpheng001"
                  className="text-blue-950"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100085375058298&mibextid=LQQJ4d"
                  className="text-blue-950"
                >
                  <FaFacebook />
                </a>
                <a href="https://t.me/sokpheng001" className="text-blue-950">
                  <FaTelegram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <section className="w-[90%] mx-auto mb-12">
          <h1 className="flex justify-center items-center text-blue-950 text-2xl md:text-4xl font-bold underline py-12">
            <FaRegHandPointRight className="animate-hand-point" />
            <span className="ml-8">ក្រុមរបស់ពួកយើង</span>
          </h1>

          <div
            className="grid grid-cols-1 lg:grid-cols-3 gap-y-5 gap-x-12 mt-12"
          >
            <div class="w-full md:w-[384px] md:h-full px-6 py-10 text-center bg-slate-200 rounded-xl lg:mt-0 xl:px-10">
              <div class="space-y-5">
                <img
                  class="mx-auto rounded-full w-3/5 h-3/5"
                  src="src/assets/img/b smey.png"
                  alt="author avatar"
                />
                <div class="space-y-2">
                  <div class="flex justify-center items-center flex-col leading-6">
                    <h1 class="text-blue-950 text-2xl font-bold">
                      Deap Sokreaksmey
                    </h1>
                    <p class="text-md text-second mt-1">
                      Leader - Web Developer
                    </p>
                    <p className="text-lg text-gray-600 mt-1">
                      Ultimately, you're your own biggest supporter. Remember
                      that.
                    </p>
                    <div class="flex justify-center mt-5 space-x-5">
                      <a
                        href="https://github.com/Smxyy"
                        class="inline-block text-blue-950 text-3xl"
                      >
                        <FaGithub />
                      </a>
                      <a
                        href="https://www.facebook.com/sokreaksmey.deap?mibextid=JRoKGi"
                        class="inline-block text-blue-950 text-3xl"
                      >
                        <FaFacebook />
                      </a>
                      <a
                        href="https://t.me/Smxyy"
                        class="inline-block text-blue-950 text-3xl"
                      >
                        <FaTelegram />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="w-full md:w-[384px] md:h-full px-6 py-10 text-center bg-slate-200 rounded-xl lg:mt-0 xl:px-10">
              <div class="space-y-5">
                <img
                  class="mx-auto rounded-full w-3/5 h-3/5"
                  src="src/assets/img/bunath.png"
                  alt="author avatar"
                />
                <div class="space-y-2">
                  <div class="flex justify-center items-center flex-col leading-6">
                    <h1 class="text-blue-950 text-2xl font-bold">
                      Pheng Bunath
                    </h1>
                    <p class="text-md text-second mt-1">Web Developer</p>
                    <p className="text-lg text-gray-600 mt-1">
                      Life is like riding a bicycle. To keep your balance, you
                      must keep moving.
                    </p>
                    <div class="flex justify-center mt-5 space-x-5">
                      <a
                        href="https://github.com/BunathPheng"
                        class="inline-block text-blue-950 text-3xl"
                      >
                        <FaGithub />
                      </a>
                      <a
                        href="https://www.facebook.com/profile.php?id=100027603155423&mibextid=LQQJ4d"
                        class="inline-block text-blue-950 text-3xl"
                      >
                        <FaFacebook />
                      </a>
                      <a
                        href="https://t.me/pheng_bunath"
                        class="inline-block text-blue-950 text-3xl"
                      >
                        <FaTelegram />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="w-full md:w-[384px] md:h-full px-6 py-10 text-center bg-slate-200 rounded-xl lg:mt-0 xl:px-10">
              <div class="space-y-5">
                <img
                  class="mx-auto rounded-full w-3/5 h-3/5"
                  src="src/assets/img/bunthoeun.png"
                  alt="author avatar"
                />
                <div class="space-y-2">
                  <div class="flex justify-center items-center flex-col leading-6">
                    <h1 class="text-blue-950 text-2xl font-bold">
                      Chheam Bunthoeun
                    </h1>
                    <p class="text-md text-second mt-1">Web Developer</p>
                    <p className="text-lg text-gray-600 mt-1">
                      I don't care what other people think of me, I enjoy my
                      life with my own rules.
                    </p>
                    <div class="flex justify-center mt-5 space-x-5">
                      <a
                        href="https://github.com/B-T565"
                        class="inline-block text-blue-950 text-3xl"
                      >
                        <FaGithub />
                      </a>
                      <a
                        href="https://www.facebook.com/pamak.love.100/"
                        class="inline-block text-blue-950 text-3xl"
                      >
                        <FaFacebook />
                      </a>
                      <a
                        href="https://t.me/chheam_Bunthoeun"
                        class="inline-block text-blue-950 text-3xl"
                      >
                        <FaTelegram />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-[90%] mx-auto mb-12 -mt-5">
          <div
            className="grid grid-cols-1 lg:grid-cols-3 gap-y-5 gap-x-12 mt-12"
          >
            <div class="w-full md:w-[384px] md:h-full px-6 py-10 text-center bg-slate-200 rounded-xl lg:mt-0 xl:px-10">
              <div class="space-y-5">
                <img
                  class="mx-auto rounded-full w-3/5 h-3/5"
                  src="src/assets/img/kanha.png"
                  alt="author avatar"
                />
                <div class="space-y-2">
                  <div class="flex justify-center items-center flex-col leading-6">
                    <h1 class="text-blue-950 text-2xl font-bold">Huon Kanha</h1>
                    <p class="text-md text-second mt-1">UX/UI Designer</p>
                    <p className="text-lg text-gray-600 mt-1">
                      Touch a heart - Transform a life.
                    </p>
                    <div class="flex justify-center mt-5 space-x-5">
                      <a
                        href="https://github.com/Huonkanha"
                        class="inline-block text-blue-950 text-3xl"
                      >
                        <FaGithub />
                      </a>
                      <a
                        href="https://www.facebook.com/KanhaKanhaIT?mibextid=ZbWKwL"
                        class="inline-block text-blue-950 text-3xl"
                      >
                        <FaFacebook />
                      </a>
                      <a
                        href="https://t.me/Kanha_Kanha0"
                        class="inline-block text-blue-950 text-3xl"
                      >
                        <FaTelegram />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="w-full md:w-[384px] md:h-full px-6 py-10 text-center bg-slate-200 rounded-xl lg:mt-0 xl:px-10">
              <div class="space-y-5">
                <img
                  class="mx-auto rounded-full w-3/5 h-3/5"
                  src="src/assets/img/makara.png"
                  alt="author avatar"
                />
                <div class="space-y-2">
                  <div class="flex justify-center items-center flex-col leading-6">
                    <h1 class="text-blue-950 text-2xl font-bold">
                      Noev Chanmakara
                    </h1>
                    <p class="text-md text-second mt-1">
                      UX/UI / Frontend Developer
                    </p>
                    <p className="text-lg text-gray-600 mt-1">
                      Things just happened, let them go. Tomorrow hasn't
                      happened yet, so just focus on doing well today.
                    </p>
                    <div class="flex justify-center mt-5 space-x-5">
                      <a
                        href="https://github.com/noevchanmakara126"
                        class="inline-block text-blue-950 text-3xl"
                      >
                        <FaGithub />
                      </a>
                      <a
                        href="https://www.facebook.com/jr.makara10?mibextid=LQQJ4d"
                        class="inline-block text-blue-950 text-3xl"
                      >
                        <FaFacebook />
                      </a>
                      <a
                        href="https://t.me/makaraJr10"
                        class="inline-block text-blue-950 text-3xl"
                      >
                        <FaTelegram />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="w-full md:w-[384px] md:h-full px-6 py-10 text-center bg-slate-200 rounded-xl lg:mt-0 xl:px-10">
              <div class="space-y-5">
                <img
                  class="mx-auto rounded-full w-3/5 h-3/5"
                  src="src/assets/img/yuhan.png"
                  alt="author avatar"
                />
                <div class="space-y-2">
                  <div class="flex justify-center items-center flex-col leading-6">
                    <h1 class="text-blue-950 text-2xl font-bold">Lorn Yuhan</h1>
                    <p class="text-md text-second mt-1">UX/UI Designer</p>
                    <p className="text-lg text-gray-600 mt-1">
                      Umm...Good thing take time!
                    </p>
                    <div class="flex justify-center mt-5 space-x-5">
                      <a
                        href="https://github.com/yuhanlorn"
                        class="inline-block text-blue-950 text-3xl"
                      >
                        <FaGithub />
                      </a>
                      <a
                        href="https://www.facebook.com/lorn.yuhan.5?mibextid=ZbWKwL"
                        class="inline-block text-blue-950 text-3xl"
                      >
                        <FaFacebook />
                      </a>
                      <a
                        href="https://t.me/Mycodeiserror404"
                        class="inline-block text-blue-950 text-3xl"
                      >
                        <FaTelegram />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-[90%] mx-auto mb-12 -mt-5">
          <div
            className="grid grid-cols-1 lg:grid-cols-3 gap-y-5 gap-x-12 mt-12"
          >
            <div class="w-full md:w-[384px] md:h-full px-6 py-10 text-center bg-slate-200 rounded-xl lg:mt-0 xl:px-10">
              <div class="space-y-5">
                <img
                  class="mx-auto rounded-full w-3/5 h-3/5"
                  src="src/assets/img/lina.png"
                  alt="author avatar"
                />
                <div class="space-y-2">
                  <div class="flex justify-center items-center flex-col leading-6">
                    <h1 class="text-blue-950 text-2xl font-bold">
                      Loeung Lina
                    </h1>
                    <p class="text-md text-second mt-1">
                      UX/UI / Frontend Developer
                    </p>
                    <p className="text-lg text-gray-600 mt-1">
                      Small Steps still moves you forward, believe yourself.
                    </p>
                    <div class="flex justify-center mt-5 space-x-5">
                      <a
                        href="https://github.com/LINALOEUNG"
                        class="inline-block text-blue-950 text-3xl"
                      >
                        <FaGithub />
                      </a>
                      <a
                        href="https://www.facebook.com/profile.php?id=100065304791677&mibextid=LQQJ4d "
                        class="inline-block text-blue-950 text-3xl"
                      >
                        <FaFacebook />
                      </a>
                      <a
                        href="https://t.me/+855964538628"
                        class="inline-block text-blue-950 text-3xl"
                      >
                        <FaTelegram />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="w-full md:w-[384px] md:h-full px-6 py-10 text-center bg-slate-200 rounded-xl lg:mt-0 xl:px-10">
              <div class="space-y-5">
                <img
                  class="mx-auto rounded-full w-3/5 h-3/5"
                  src="src/assets/img/sreylen.png"
                  alt="author avatar"
                />
                <div class="space-y-2">
                  <div class="flex justify-center items-center flex-col leading-6">
                    <h1 class="text-blue-950 text-2xl font-bold">
                      Huon Sreylen
                    </h1>
                    <p class="text-md text-second mt-1">UX/UI Designer</p>
                    <p className="text-lg text-gray-600 mt-1">
                      Strive for Progress, Not Perfection.
                    </p>
                    <div class="flex justify-center mt-5 space-x-5">
                      <a
                        href="https://github.com/SreylenHuon"
                        class="inline-block text-blue-950 text-3xl"
                      >
                        <FaGithub />
                      </a>
                      <a
                        href="https://www.facebook.com/ii.ly.71?mibextid=LQQJ4d"
                        class="inline-block text-blue-950 text-3xl"
                      >
                        <FaFacebook />
                      </a>
                      <a
                        href="https://t.me/HuonSreylen"
                        class="inline-block text-blue-950 text-3xl"
                      >
                        <FaTelegram />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="w-full md:w-[384px] md:h-full px-6 py-10 text-center bg-slate-200 rounded-xl lg:mt-0 xl:px-10">
              <div class="space-y-5">
                <img
                  class="mx-auto rounded-full w-3/5 h-3/5"
                  src="src/assets/img/sophy.png"
                  alt="author avatar"
                />
                <div class="space-y-2">
                  <div class="flex justify-center items-center flex-col leading-6">
                    <h1 class="text-blue-950 text-2xl font-bold">
                      Phorn Sophy
                    </h1>
                    <p class="text-md text-second mt-1">UX/UI Designer</p>
                    <p className="text-lg text-gray-600 mt-1">
                      Every bug and error I faced makes me stronger.
                    </p>
                    <div class="flex justify-center mt-5 space-x-5">
                      <a
                        href="https://github.com/phornsophy"
                        class="inline-block text-blue-950 text-3xl"
                      >
                        <FaGithub />
                      </a>
                      <a
                        href="https://www.facebook.com/sophy.phorn.39?mibextid=LQQJ4d"
                        class="inline-block text-blue-950 text-3xl"
                      >
                        <FaFacebook />
                      </a>
                      <a
                        href="https://t.me/Phy_yyyy"
                        class="inline-block text-blue-950 text-3xl"
                      >
                        <FaTelegram />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="w-full mx-auto mb-12">
        <p className="text-center mt-20 text-2xl md:text-4xl overflow-hidden font-bold text-blue-950">
          <Marquee>
            មជ្ឈមណ្ឌលអភិវឌ្ឍន៍វិទ្យាសាស្ត្រ និងបច្ចេកវិទ្យាកម្រិតខ្ពស់ -
            <span className="text-second ml-2">CSTAD</span>
          </Marquee>
        </p>
      </section>

      <section className="w-[90%] mx-auto mb-12 pt-5">
        <div
        className="mb-2 md:mb-4">
          <img
            className="w-full object-cover rounded-md"
            src="src/assets/img/GroupTeamschool.png"
            alt=""
          />
        </div>
        <div
        className="grid grid-cols-3 gap-2 md:gap-4">
          <img
            className="rounded-md object-cover"
            src="src/assets/img/action.jpg"
            alt=""
          />
          <img
            className="rounded-md object-cover"
            src="src/assets/img/action1.jpg"
            alt=""
          />
          <img
            className="rounded-md object-cover"
            src="src/assets/img/action3.jpg"
            alt=""
          />
        </div>
      </section>

      <section className="w-[90%] mx-auto py-5">
        <h1 className="flex justify-center items-center text-blue-950 text-2xl md:text-4xl font-bold underline">
          <FaRegHandPointRight className="animate-hand-point" />
          <span className="ml-8">ទំនាក់ទំនងមកយើង</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div
            className="w-full h-full flex justify-end items-end order-first lg:order-last"
          >
            <img
              className="w-[100%] md:w-[83%] h-full object-cover rounded-lg"
              src="src/assets/img/FAQs-bro.png"
              alt="FAQ Illustration"
            />
          </div>

          <div className="flex justify-center items-center text-[16px] md:text-[18px] leading-8 md:leading-10 text-gray-600">
            <p className="-mt-10 text-[20px] md:text-[22px]">
              <p className="text-gray-600 text-[20px] mb-4 leading-10">
                <span className="text-second">សួស្តី! </span>សូមស្វាគមន៍មកកាន់{" "}
                <span className="text-orange-500 font-bold">គេហទំព័រ</span>{" "}
                របស់យើងខ្ញុំ។ បើសិនជាអ្នកមានចម្ងល់ ឬត្រូវការ ការណែនាំ
                ដែលទាក់ទងទៅនឹងសំណួរផ្សេងៗ សូមចូលទៅកាន់
                <span className="text-orange-500 font-bold">
                  {" "}
                  ប្រអប់សារ
                </span>{" "}
                ដើម្បីផ្ញើសារមកកាន់ក្រុមការងាររបស់យើង យើងនិងជួយដោះស្រាយជូន។{" "}
                <br />
                <span className="text-blue-950">សូមអរគុណ!</span>{" "}
                <BsFillBalloonHeartFill className="ml-8" />
              </p>
            </p>
          </div>
        </div>
      </section>

      <section className="w-[90%] mx-auto grid lg:grid-cols-2 grid-cols-1 gap-4 items-center pb-8 md:-mt-16">
        <div
          className="flex justify-center items-cejustify-center"
        >
          <img
            src="src/assets/img/Chat bot-bro.png"
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
    </section>
  );
}
