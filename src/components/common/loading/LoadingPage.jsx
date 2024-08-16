export default function Loading() {
  return (
    <section className="bg-gray-50">
      <div className="relative flex w-full h-[700px] items-center justify-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gray-300 animate-pulse"></div>
        <div className="bg-black bg-opacity-40 w-full h-full absolute top-0 left-0"></div>
        <div className="z-10 p-4 text-center sm:text-left max-w-2xl">
          <div className="absolute left-[10%] sm:left-[60%] top-[20%] sm:top-1/3 w-[150px] sm:w-[200px] h-[30px] sm:h-[40px] bg-gray-300 animate-pulse"></div>
          <div className="absolute w-[80%] sm:w-1/3 left-[10%] sm:left-[60%] top-[30%] sm:top-[41%] h-[80px] sm:h-[100px] bg-gray-300 animate-pulse"></div>
        </div>
        <div className="absolute w-[90%] sm:w-[40%] bg-gray-300 bg-opacity-80 pt-4 px-4 rounded-tr-[20px] sm:rounded-tr-[40px] left-[5%] sm:left-[0%] -bottom-1 sm:-bottom-2 h-[150px] sm:h-[200px] animate-pulse"></div>
      </div>

      <section className="bg-gray-50 mt-16 px-2">
        <div className="bg-gray-50 py-10">
          <div className="w-[90%] mx-auto px-4">
            <div className="text-center w-[200px] sm:w-[300px] h-[30px] sm:h-[50px] bg-gray-300 animate-pulse mb-10 mx-auto"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
              <div className="w-full h-[300px] bg-gray-300 animate-pulse"></div>
              <div className="text-start md:text-left">
                <div className="w-[150px] sm:w-[200px] h-[30px] sm:h-[40px] bg-gray-300 animate-pulse mb-4"></div>
                <div className="w-full h-[80px] sm:h-[100px] bg-gray-300 animate-pulse mb-4"></div>
                <div className="w-full h-[120px] sm:h-[150px] bg-gray-300 animate-pulse mb-4"></div>
                <div className="w-[80px] sm:w-[100px] h-[30px] sm:h-[40px] bg-gray-300 animate-pulse"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
              <div className="text-start">
                <div className="w-[150px] sm:w-[200px] h-[30px] sm:h-[40px] bg-gray-300 animate-pulse mb-4"></div>
                <div className="w-full h-[80px] sm:h-[100px] bg-gray-300 animate-pulse mb-4"></div>
                <div className="w-full h-[120px] sm:h-[150px] bg-gray-300 animate-pulse mb-4"></div>
                <div className="w-[80px] sm:w-[100px] h-[30px] sm:h-[40px] bg-gray-300 animate-pulse"></div>
              </div>
              <div className="w-full h-[300px] bg-gray-300 animate-pulse order-first md:order-last"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
              <div className="w-full h-[300px] bg-gray-300 animate-pulse"></div>
              <div className="text-start md:text-left">
                <div className="w-[150px] sm:w-[200px] h-[30px] sm:h-[40px] bg-gray-300 animate-pulse mb-4"></div>
                <div className="w-full h-[80px] sm:h-[100px] bg-gray-300 animate-pulse mb-4"></div>
                <div className="w-full h-[120px] sm:h-[150px] bg-gray-300 animate-pulse mb-4"></div>
                <div className="w-[80px] sm:w-[100px] h-[30px] sm:h-[40px] bg-gray-300 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-primary py-28">
          <div className="">
            <div className="text-center w-[200px] sm:w-[300px] h-[30px] sm:h-[50px] bg-gray-300 animate-pulse mb-24 mx-auto"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 place-items-center">
              <div className="w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] bg-gray-300 animate-pulse"></div>
              <div className="w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] bg-gray-300 animate-pulse"></div>
              <div className="w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] bg-gray-300 animate-pulse"></div>
              <div className="w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] bg-gray-300 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-gray-50 py-28">
          <div className="mx-auto px-4">
            <div className="text-center w-[200px] sm:w-[300px] h-[30px] sm:h-[50px] bg-gray-300 animate-pulse mb-24 mx-auto"></div>
            <div className="">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 place-items-center">
                <div className="w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] bg-gray-300 animate-pulse"></div>
                <div className="w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] bg-gray-300 animate-pulse"></div>
                <div className="w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] bg-gray-300 animate-pulse"></div>
                <div className="w-[150px] sm:w-[200px] h-[150px] sm:h-[200px] bg-gray-300 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
