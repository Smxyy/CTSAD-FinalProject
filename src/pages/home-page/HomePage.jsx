import { ReactTyped } from "react-typed";
import CardContentUpdate from "../../components/common/cards/CardContentUpdate";
import Slide from "../../components/contents-update/Slide";
import { getAccessToken } from "../../lib/secureLocalStorage";
import { useEffect, useState } from "react";
import Aos from "aos";
import Loading from "../../components/common/loading/LoadingPage";
import skillListening from "../../assets/img/Listening2.png";
import skillWritting from "../../assets/img/writting.png";
import skillSpeaking from "../../assets/img/Speaking1.jpg";
import skillReading from "../../assets/img/Skill_Reading.png";
export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Aos.init({ delay: 400, duration: 1200 });

    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsLoading(false);
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  console.log("access token in home page", getAccessToken());
  return (
    <section className="bg-gray-50">
      <div className="relative flex w-full h-[700px] items-center justify-center overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-[700px] object-cover opacity-90 bg-opacity-90"
          autoPlay
          muted
          loop
          preload="auto"
        >
          <source src="src/assets/video/video_home_page.mp4" type="video/mp4" />
        </video>
        <div className="bg-black bg-opacity-40 w-full h-full absolute top-0 left-0"></div>
        <div className="z-10 p-4 text-center sm:text-left max-w-2xl">
          <h1 className="absolute text-4xl sm:text-4xl font-bold text-white mb-4 left-[11%] md:left-[60%] top-[18%] md:top-1/3 font-inter">
            <ReactTyped
              strings={["English Club"]}
              typeSpeed={200}
              loop
              backSpeed={20}
              showCursor={false}
            />
          </h1>
          <p className="absolute w-[80%] md:w-1/3 left-[11%] md:left-[60%] top-[25%] md:top-[41%] text-start md:text-justify text-white text-[18px] leading-10 mb-4">
            គឺជាវេបសាយសម្រាប់ផ្តល់ឲ្យកូនខ្មែរគ្រប់បានសិក្សាភាសាអង់គ្លេសបានដោយមិនគិតថ្លៃនិងគ្រប់វគ្គព្រមទាំងផ្តល់ជូននូវការតេស្តភាសាអង់គ្លេសតាមប្រព័ន្ធ
            <span className="text-primary px-1 font-semibold">អនឡាញ</span>
            ដែលត្រូវបានបង្កើតឡើងដោយស្នាដៃរបស់និស្សិតដែលសិក្សានៅមជ្ឃមណ្ឌលអភិវឌ្ឃន៍វិទ្យាសាស្ត្រនិងបច្ចេកវិទ្យាកម្រិតខ្ពស់(CSTAD)។
          </p>
        </div>

        <div
          className="absolute w-[80%] md:w-[40%] bg-gray-50 bg-opacity-80 pt-4 md:px-[40px] px-[20px]
         rounded-tr-[40px] left-[0%]  -bottom-1 md:-bottom-2"
        >
          <img
            className="mb-4 w-[90px] object-cover"
            src="http://136.228.158.126:50005/files/077018c8-ccc4-4a1a-bb45-30deafd41b8e.png"
          />
          <p className="text-blues text-[18px]  leading-8 text-justify">
            រៀនភាសាអង់គ្លេសតាមអ៊ីនធឺណិតនិងបង្កើនជំនាញរបស់អ្នកតាមរយៈវគ្គសិក្សានិងធនធានដែលមានគុណភាពខ្ពស់របស់យើង។
          </p>
        </div>
      </div>

      <section className="bg-gray-50 mt-16 px-2">
        <div className="bg-gray-50 py-10">
          <div className="w-[90%] mx-auto px-4" data-aos="fade-right">
            <h2 className="text-center text-3xl md:text-4xl font-semibold text-green-600 mb-10">
              ចាប់ផ្តើមការរៀនភាសាអង់គ្លេសជាមួយ
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-16 ">
              <div className="grid place-items-start">
                <img
                  src="src/assets/img/Nerd-amico.png"
                  alt="Illustration 1"
                  className="w-[500px] object-cover"
                  data-aos="zoom-in-up"
                />
              </div>
              <div
                className="text-start md:text-left"
                data-aos="fade-down"
                data-aos-easing="linear"
              >
                <h3 className="lg:text-4xl md:text-[24px] text-[30px] font-bold text-second mb-4 ">
                  ជំនាញ
                </h3>
                <p className="text-grays mb-4 text-[18px] text-justify leading-10">
                  អនុវត្តការស្តាប់ ការអាន ការសរសេរ និងការនិយាយរបស់អ្នក
                  ហើយរៀនភាសាដែលមានប្រយោជន៍សម្រាប់ប្រើប្រាស់នៅកន្លែងធ្វើការ
                  ឬទំនាក់ទំនងប្រកបដោយប្រសិទ្ធភាពជាមួយមិត្តភក្តិ។
                </p>
                <ul className="text-grays mb-4 font-suwannaphum text-[18px] text-justify leading-10 list-disc pl-4">
                  <li>
                    សំឡេង និងវីដេអូ ដើម្បីអនុវត្តការស្តាប់
                    និងការនិយាយភាសារបស់ប្អូន។
                  </li>
                  <li>អត្ថបទគំរូសម្រាប់ការសរសេរគ្រប់ប្រភេទ។</li>
                  <li>
                    ធ្វើការលើការអានរបស់អ្នក ដើម្បីអានឱ្យបានលឿន
                    និងយល់កាន់តែច្រើន។
                  </li>
                </ul>
                <button className="w-[100px] font-suwannaphum text-white px-4 py-2 rounded-full bg-primary hover:bg-second">
                  <a href="/skills">ចាប់ផ្តើម</a>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
              <div
                className="text-start "
                data-aos="fade-down"
                data-aos-easing="linear"
              >
                <h3 className="lg:text-4xl md:text-[24px] text-[30px] font-bold text-second mb-4 font-suwannaphum">
                  វេយ្យាករណ៍
                </h3>
                <p className="text-grays mb-4 text-[18px] leading-10">
                  ពិនិត្យឡើងវិញនិងអនុវត្តវេយ្យាករណ៍របស់អ្នកដើម្បីបង្កើនកម្រិតភាសាអង់គ្លេសរបស់អ្នក
                  និងបង្កើនទំនុកចិត្តរបស់អ្នក។
                </p>
                <ul className="text-grays mb-4 font-suwannaphum text-[18px] leading-10 list-disc pl-4">
                  <li>
                    ការពន្យល់វេយ្យាករណ៍ច្បាស់លាស់ និងសាមញ្ញ
                    ដើម្បីជួយអ្នកពិនិត្យឡើងវិញ និងអនុវត្តចំណុចវេយ្យាករណ៍ផ្សេងៗ។
                  </li>
                  <li>
                    លំហាត់តាមអ៊ីនធឺណិតដើម្បីជួយអ្នកពិនិត្យមើលការយល់ដឹងរបស់អ្នកអំពីចំណុចវេយ្យាករណ៍។
                  </li>
                  <li>
                    ប្រើឯកសារយោងវេយ្យាករណ៍សម្រាប់ការអនុវត្តបន្ថែម
                    និងការពន្យល់លម្អិតបន្ថែមទៀត។
                  </li>
                </ul>
                <button className="w-[100px] font-suwannaphum text-white px-4 py-2 rounded-full bg-primary hover:bg-second">
                  <a href="/grammar">ចាប់ផ្តើម</a>
                </button>
              </div>
              <div className="grid place-items-end order-first md:order-last">
                <img
                  src="src/assets/img/Learning-bro.png"
                  alt="Illustration 2"
                  className="w-[500px] object-cover"
                  data-aos="zoom-in-up"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div className="grid place-items-start">
                <img
                  src="src/assets/img/Education-cuate.png"
                  alt="Illustration 1"
                  className="w-[500px] object-cover"
                  data-aos="zoom-in-up"
                />
              </div>
              <div
                className="text-start md:text-left m"
                data-aos="fade-down"
                data-aos-easing="linear"
              >
                <h3 className="lg:text-4xl md:text-[24px] text-[30px] font-bold text-second mb-4 font-suwannaphum">
                  ពាក្យគន្លឹះ
                </h3>
                <p className="text-grays mb-4 text-[18px] leading-10 text-justify">
                  រៀនពាក្យថ្មីនិងបង្កើនកម្រិតភាសាអង់គ្លេសរបស់អ្នកដើម្បីអាចទំនាក់ទំនងជាភាសាអង់គ្លេសប្រកបដោយប្រសិទ្ធភាព។
                </p>
                <ul className="text-grays text-[18px] leading-10 mb-4 font-suwannaphum  list-disc pl-4">
                  <li>
                    លំហាត់តាមអ៊ីនធឺណិត ដើម្បីជួយអ្នករៀនអត្ថន័យ ការបញ្ចេញសំឡេង
                    និងអក្ខរាវិរុទ្ធនៃពាក្យថ្មី។
                  </li>
                  <li>រៀនពាក្យថ្មីដែលភ្ជាប់ទៅនឹងប្រធានបទផ្សេងៗគ្នា។</li>
                  <li>
                    លេងហ្គេមពាក្យរបស់យើង
                    ហើយរីករាយនៅពេលអ្នកកែលម្អវាក្យសព្ទរបស់អ្នក។
                  </li>
                </ul>
                <button className="w-[100px] font-suwannaphum text-white px-4 py-2 rounded-full bg-primary hover:bg-second">
                  <a href="/vocabulary">ចាប់ផ្តើម</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-primary py-28">
          <div className="">
            <h2 className="text-center text-3xl md:text-4xl font-bold text-blues mb-24 px-4">
              រៀនឥលូវនេះជាមួយវគ្គសិក្សាអនឡាញដែលមានការគាំទ្រច្រើន
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-8 px-10 place-items-center">
              <CardContentUpdate
                img={skillListening}
                title="ការស្ដាប់/Listening"
                des="អភិវឌ្ឍការស្តាប់ភាសា​អង់គ្លេសកាន់តែល្អនិងទំនាក់ទំនងកាន់តែប្រសើរឡើង"
                value={"/skills/listening"}
              />
              <CardContentUpdate
                img={skillSpeaking}
                title="ការនិយាយ/Speaking"
                des="បង្កើនជំនាញនិយាយរបស់អ្នក​​ដើម្បីទទួលភាពជោគជ័យតស់ចាប់ផ្តើមជាមួយពួកយើង"
                value={"/skills/speaking"}
              />
              <CardContentUpdate
                value={"/skills/writing"}
                img={skillWritting}
                title="ការសរសេរ/Writing"
                des="អ្នកនឹងទទួលបានបច្ចេកទេសក្នុងការសរសេរនឹងរបៀបក្នុងការសរសេគួរអោយទាក់ទាញ"
              />
              <CardContentUpdate
                value={"/skills/reading"}
                img={skillReading}
                title="ការអាន/Reading"
                des="អ្នកនឹងទទួលភាពរីករាយ និងអត្ថប្រយោជន៍រួមទាំងបទពិសោធន៍នៃការអានដ៏អស្ចារ្យ"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-gray-50 py-28">
          <div className="mx-auto px-4">
            <h2 className="text-center text-3xl md:text-4xl font-bold text-primary mb-24">
              អ្នកទាំងអស់គ្នាអាចអនុវត្តន៍ភាសាអង់គ្លេសដោយមិនគិតថ្លៃ
            </h2>
            <div className="">
              <Slide />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
