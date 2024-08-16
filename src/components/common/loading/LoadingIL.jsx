export default function LoadingIL() {
  return (
    <>
      <section className="w-full px-10 main">
        <div className="new-main px-0 pb-20 lg:px-20 lg:py-20 rounded-t-xl">
          <div className="h-[50px] w-[30%] mx-auto bg-gray-300 rounded-md animate-pulse"></div>

          <div className="mt-7 space-y-4">
            <div className="h-6 w-3/4 bg-gray-300 rounded-md animate-pulse"></div>
            <div className="h-6 w-5/6 bg-gray-300 rounded-md animate-pulse"></div>
            <div className="h-6 w-4/5 bg-gray-300 rounded-md animate-pulse"></div>
            <div className="h-6 w-2/3 bg-gray-300 rounded-md animate-pulse"></div>
            <div className="h-6 w-1/3 bg-gray-300 rounded-md animate-pulse mt-4"></div>
          </div>

          <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-14">
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="max-w-sm w-full mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 transition duration-500 transform hover:scale-105 hover:shadow-lg"
              >
                <div className="rounded-t-lg bg-gray-300 h-48 animate-pulse"></div>
                <div className="p-5">
                  <div className="h-6 w-3/4 bg-gray-300 rounded-md animate-pulse mb-4"></div>
                  <div className="h-4 w-full bg-gray-300 rounded-md animate-pulse mb-2"></div>
                  <div className="h-4 w-5/6 bg-gray-300 rounded-md animate-pulse mb-2"></div>
                  <div className="h-4 w-4/5 bg-gray-300 rounded-md animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="max-w-sm w-full mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 transition duration-500 transform hover:scale-105 hover:shadow-lg"
              >
                <div className="rounded-t-lg bg-gray-300 h-48 animate-pulse"></div>
                <div className="p-5">
                  <div className="h-6 w-3/4 bg-gray-300 rounded-md animate-pulse mb-4"></div>
                  <div className="h-4 w-full bg-gray-300 rounded-md animate-pulse mb-2"></div>
                  <div className="h-4 w-5/6 bg-gray-300 rounded-md animate-pulse mb-2"></div>
                  <div className="h-4 w-4/5 bg-gray-300 rounded-md animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>

          <section className="mt-14 main space-y-10">
            <div className="w-[50%] h-[50px] mx-auto bg-gray-300 rounded-md animate-pulse"></div>
            {Array(3)
              .fill()
              .map((_, index) => (
                <div key={index} className="space-y-5">
                  <div className="h-8 w-1/3 bg-gray-300 rounded-md animate-pulse"></div>
                  <div className="h-6 w-full bg-gray-300 rounded-md animate-pulse"></div>
                  <div className="h-6 w-5/6 bg-gray-300 rounded-md animate-pulse"></div>
                  <div className="h-6 w-4/5 bg-gray-300 rounded-md animate-pulse"></div>
                </div>
              ))}
          </section>
        </div>
      </section>
    </>
  );
}
