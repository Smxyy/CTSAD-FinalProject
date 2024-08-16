export default function LoadingSkill() {
  return (
    <>
      <section className="w-[90%] mx-auto mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-8 md:mt-10 lg:mt-12 space-y-2 md:space-y-3">
          <div className="w-full h-[200px] md:h-[350px] lg:h-[400px] order-last bg-gray-300 animate-pulse"></div>
          <div className="lg:mt-20 mt-10 animate-pulse md:pt-14">
            {/* Title Skeleton */}
            <div className="h-8 lg:h-10 bg-gray-300 rounded-md w-3/4 mx-auto mb-4"></div>

            {/* Subtitle Skeleton */}
            <div className="h-6 lg:h-8 bg-gray-300 rounded-md w-2/3 mx-auto mb-5"></div>

            {/* Icon and Subtitle Skeleton */}
            <div className="flex items-center gap-5 mb-5 justify-center">
              <div className="h-6 w-6 md:h-8 md:w-8 bg-gray-300 rounded-full"></div>
              <div className="h-6 lg:h-8 bg-gray-300 rounded-md w-1/2"></div>
            </div>

            {/* Text Skeleton */}
            <div className="lg:w-80 mx-auto">
              <div className="space-y-3">
                <div className="h-4 bg-gray-300 rounded-md"></div>
                <div className="h-4 bg-gray-300 rounded-md"></div>
                <div className="h-4 bg-gray-300 rounded-md"></div>
                <div className="h-4 bg-gray-300 rounded-md"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-[50%] mx-auto mb-12">
        <div className="text-center mb-6">
          <div className="h-8 md:h-12 w-3/4 mx-auto bg-gray-300 animate-pulse rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[20px] md:text-[22px] leading-10 pt-5">
          <div className="md:col-span-2">
            <div className="h-6 bg-gray-300 animate-pulse mb-2 rounded"></div>
            <div className="h-6 bg-gray-300 animate-pulse mb-2 rounded"></div>
            <div className="h-6 bg-gray-300 animate-pulse mb-2 rounded"></div>
            <div className="h-6 bg-gray-300 animate-pulse mb-2 rounded"></div>
            <div className="h-6 bg-gray-300 animate-pulse mb-2 rounded"></div>
            <div className="h-6 bg-gray-300 animate-pulse mb-2 rounded"></div>
          </div>
        </div>
      </section>
      <section className="w-[90%] mx-auto grid grid-cols-1 gap-5 mb-8">
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <div className="w-full md:w-[48%] md:h-auto h-72 bg-gray-300 ">
            <div className="h-full bg-gray-400"></div>
            <div className="px-10 -mt-48">
              <div className="w-1/3 h-6 bg-white rounded mb-4"></div>
              <div className="w-full h-3 bg-white rounded mb-2"></div>
              <div className="w-4/5 h-3 bg-white rounded mb-2"></div>
              <div className="w-3/5 h-3 bg-white rounded mb-2"></div>
              <div className="w-1/4 h-8 bg-white rounded mt-4"></div>
            </div>
          </div>

          <div className="w-full md:w-[48%] h-72 bg-gray-300">
            <div className="h-full bg-gray-400"></div>
            <div className="px-10 -mt-48">
              <div className="w-1/3 h-6 bg-white rounded mb-4"></div>
              <div className="w-full h-3 bg-white rounded mb-2"></div>
              <div className="w-4/5 h-3 bg-white rounded mb-2"></div>
              <div className="w-3/5 h-3 bg-white rounded mb-2"></div>
              <div className="w-1/4 h-8 bg-white rounded mt-4"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-[90%] mx-auto grid grid-cols-1 gap-5 mb-8">
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <div className="w-full md:w-[48%] md:h-auto h-72 bg-gray-300 ">
            <div className="h-full bg-gray-400"></div>
            <div className="px-10 -mt-48">
              <div className="w-1/3 h-6 bg-white rounded mb-4"></div>
              <div className="w-full h-3 bg-white rounded mb-2"></div>
              <div className="w-4/5 h-3 bg-white rounded mb-2"></div>
              <div className="w-3/5 h-3 bg-white rounded mb-2"></div>
              <div className="w-1/4 h-8 bg-white rounded mt-4"></div>
            </div>
          </div>

          <div className="w-full md:w-[48%] h-72 bg-gray-300">
            <div className="h-full bg-gray-400"></div>
            <div className="px-10 -mt-48">
              <div className="w-1/3 h-6 bg-white rounded mb-4"></div>
              <div className="w-full h-3 bg-white rounded mb-2"></div>
              <div className="w-4/5 h-3 bg-white rounded mb-2"></div>
              <div className="w-3/5 h-3 bg-white rounded mb-2"></div>
              <div className="w-1/4 h-8 bg-white rounded mt-4"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
