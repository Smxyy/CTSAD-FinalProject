export default function LoadingExerciseGrammar() {
  return (
    <>
      <section className="w-[90%] mx-auto mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10 md:mt-10 lg:mt-12 space-y-2 md:space-y-3">
          <div className="w-full h-[200px] md:h-[350px] lg:h-[400px] bg-gray-300 animate-pulse"></div>
          <div className="flex justify-center items-center text-[20px] md:text-[22px] leading-10 md:leading-10 text-gray-600">
            <div className="w-[70%] space-y-3">
              <div className="w-64 h-12 bg-gray-300 animate-pulse mb-8"></div>
              <div className="h-6 bg-gray-300 animate-pulse mb-2 rounded"></div>
              <div className="h-6 bg-gray-300 animate-pulse mb-2 rounded"></div>
              <div className="h-6 bg-gray-300 animate-pulse mb-2 rounded"></div>
              <div className="h-6 bg-gray-300 animate-pulse mb-2 rounded"></div>
              <div className="h-6 bg-gray-300 animate-pulse mb-2 rounded"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-[90%] mx-auto py-5">
        <div className="flex justify-center items-center text-blue-950 text-2xl md:text-4xl font-bold underline mb-8 animate-pulse">
          <div className="bg-gray-300 w-10 h-10 rounded-full"></div>
          <div className="ml-8 bg-gray-300 w-64 h-8 md:h-12 rounded"></div>
        </div>
      </section>
      <section className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
        {Array(6)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="w-full md:w-[300px] lg:w-[400px] max-h-[261px] rounded-tr-3xl rounded-bl-3xl relative bg-gray-200 animate-pulse"
            >
              <div className="rounded-tr-3xl rounded-bl-3xl bg-gray-300 w-full h-[150px] md:h-[200px] lg:h-[250px]"></div>
              <div className="absolute md:top-[3.5rem] lg:top-[3.5rem] top-[2rem] w-full px-5 md:mt-[16px]">
                <div className="h-[18px] md:h-[24px] bg-gray-200 rounded w-3/4 mx-auto mt-5"></div>
                <div className="h-[18px] bg-gray-200 rounded w-4/5 mx-auto mt-2"></div>
                <div className="h-[18px] bg-gray-200 rounded w-4/5 mx-auto mt-2"></div>
              </div>
            </div>
          ))}
      </section>
    </>
  );
}
