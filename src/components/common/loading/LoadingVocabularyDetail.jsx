export default function LoadingVocabularyDetail() {
  return (
    <>
      <div className="flex">
        <aside
          id="default-sidebar"
          className="max-sm:fixed hidden md:block pt-2 md:px-6 px-5 h-screen lg:sticky left-0 z-40 w-48 lg:w-64 lg:pt-4 transition-transform bg-white md:border-r border-gray-200"
          aria-label="Sidebar"
        >
          <div className="h-full px-4 w-[160px] overflow-y-auto bg-white pb-8 animate-pulse">
            <ul className="space-y-4">
              {/* Skeleton Items */}
              {Array(6)
                .fill()
                .map((_, index) => (
                  <li
                    key={index}
                    className="h-[20px] bg-gray-300 rounded-md"
                  ></li>
                ))}
            </ul>
          </div>
        </aside>
        <main className="flex-1 md:px-[28px] md:pb-[28px] pb-[28px] px-[20px] animate-pulse mb-2">
          <div>
            <div className="md:p-[40px] lg:p-[40px] p-[20px] bg-[#f5f5f5]">
              <div className="flex gap-4 flex-col lg:flex-row">
                <div className="w-[350px] h-[200px] bg-gray-300 object-cover rounded-lg"></div>
                <div className="flex-1">
                  <div className="w-[200px] h-[40px] bg-gray-300 rounded-md mb-4"></div>

                  <div className="flex gap-4 mt-4 items-center">
                    <div className="h-[60px] w-[60px] bg-gray-300 rounded-full"></div>
                    <div className="flex-1 h-[20px] bg-gray-300 rounded-md"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
       
        <div  className="bg-gray-300 mt-7">
            <div className="w-full h-[40px] bg-gray-300 rounded-md"></div>
            {[1, 2, 3].map((_, index) => (
            <div key={index} className="bg-[#faf5e6] md:p-[40px] lg:p-[20px] p-[20px]">
            <div className="animate-pulse flex flex-col lg:flex-row gap-4">
            <div className="grid grid-cols-1 md:grid-cols-4 place-content-center place-items-center gap-10">
                <div className="w-[270px] h-[300px] bg-gray-200 rounded-lg"></div>
                <div className="w-[270px] h-[300px] bg-gray-200 rounded-lg"></div>
                <div className="w-[270px] h-[300px] bg-gray-200 rounded-lg"></div>
                <div className="w-[270px] h-[300px] bg-gray-200 rounded-lg"></div>
            </div>
            </div>
            </div>
            ))} 
        </div>
       
          <div className="bg-gray-300 mt-7">
            <div className="w-full h-[40px] bg-gray-300 rounded-md"></div>
            <div className="bg-[#faf5e6] md:p-[40px] lg:p-[40px] p-[20px] mt-4">
              <div className="space-y-4">
                <div className="w-full h-[20px] bg-gray-300 rounded-md"></div>
                <div className="w-full h-[20px] bg-gray-300 rounded-md"></div>
                <div className="w-full h-[20px] bg-gray-300 rounded-md"></div>
              </div>
            </div>
          </div>

          <div className="bg-gray-300 mt-7">
            <div className="w-full h-[40px] bg-gray-300 rounded-md"></div>
            <div className="bg-[#faf5e6] md:p-[40px] lg:p-[40px] p-[20px] mt-4">
              <div className="space-y-4">
                <div className="w-full h-[20px] bg-gray-300 rounded-md"></div>
                <div className="w-full h-[20px] bg-gray-300 rounded-md"></div>
                <div className="w-full h-[20px] bg-gray-300 rounded-md"></div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
