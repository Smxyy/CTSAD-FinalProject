export default function LoadingAllSkill() {
    return (
      <>
        <section>
          <div className="relative w-full h-64 bg-gray-300 animate-pulse overflow-hidden">
            <div className="absolute top-[75%] left-5 bg-gray-400 h-6 w-32 rounded-md animate-pulse"></div>
            <div className="absolute bottom-5 left-5 bg-gray-400 h-4 w-[40%] rounded-md animate-pulse"></div>
          </div>
        </section>
        <section className="w-[90%] mx-auto py-8">
          <div className="bg-gray-300 h-8 w-64 mx-auto rounded-md animate-pulse mb-8"></div>
          <div className="grid gap-10 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
            {/* Skeleton Card 1 */}
            <div className="flex gap-5 items-center bg-white border border-gray-200 rounded-lg shadow-md animate-pulse">
              {/* Skeleton Image */}
              <div className="bg-gray-300 lg:w-[200px] md:w-[120px] w-[120px] h-full rounded-tl-lg"></div>
  
              {/* Skeleton Content */}
              <div className="flex flex-col justify-between p-4 leading-normal w-full">
                <div className="space-y-2">
                  <div className="h-6 bg-gray-300 rounded-md lg:w-[60%] w-[70%]"></div>
                  <div className="h-6 bg-gray-300 rounded-md lg:w-[50%] w-[60%]"></div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="h-4 bg-gray-300 rounded-md w-full"></div>
                  <div className="h-4 bg-gray-300 rounded-md w-[90%]"></div>
                  <div className="h-4 bg-gray-300 rounded-md w-[80%]"></div>
                </div>
              </div>
            </div>
  
            {/* Skeleton Card 2 */}
            <div className="flex gap-3 items-center bg-white border border-gray-200 rounded-lg shadow-md animate-pulse">
              {/* Skeleton Image */}
              <div className="bg-gray-300 lg:w-[200px] md:w-[120px] w-[120px] h-full rounded-tl-lg"></div>
  
              {/* Skeleton Content */}
              <div className="flex flex-col justify-between p-4 leading-normal w-full">
                <div className="space-y-2">
                  <div className="h-6 bg-gray-300 rounded-md lg:w-[60%] w-[70%]"></div>
                  <div className="h-6 bg-gray-300 rounded-md lg:w-[50%] w-[60%]"></div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="h-4 bg-gray-300 rounded-md w-full"></div>
                  <div className="h-4 bg-gray-300 rounded-md w-[90%]"></div>
                  <div className="h-4 bg-gray-300 rounded-md w-[80%]"></div>
                </div>
              </div>
            </div>
  
            {/* Skeleton Card 3 */}
            <div className="flex gap-3 items-center bg-white border border-gray-200 rounded-lg shadow-md animate-pulse">
              {/* Skeleton Image */}
              <div className="bg-gray-300 lg:w-[200px] md:w-[120px] w-[120px] h-full rounded-tl-lg"></div>
  
              {/* Skeleton Content */}
              <div className="flex flex-col justify-between p-4 leading-normal w-full">
                <div className="space-y-2">
                  <div className="h-6 bg-gray-300 rounded-md lg:w-[60%] w-[70%]"></div>
                  <div className="h-6 bg-gray-300 rounded-md lg:w-[50%] w-[60%]"></div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="h-4 bg-gray-300 rounded-md w-full"></div>
                  <div className="h-4 bg-gray-300 rounded-md w-[90%]"></div>
                  <div className="h-4 bg-gray-300 rounded-md w-[80%]"></div>
                </div>
              </div>
            </div>

            {/* Skeleton Card 4 */}
            <div className="flex gap-3 items-center bg-white border border-gray-200 rounded-lg shadow-md animate-pulse">
              {/* Skeleton Image */}
              <div className="bg-gray-300 lg:w-[200px] md:w-[120px] w-[120px] h-full rounded-tl-lg"></div>
  
              {/* Skeleton Content */}
              <div className="flex flex-col justify-between p-4 leading-normal w-full">
                <div className="space-y-2">
                  <div className="h-6 bg-gray-300 rounded-md lg:w-[60%] w-[70%]"></div>
                  <div className="h-6 bg-gray-300 rounded-md lg:w-[50%] w-[60%]"></div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="h-4 bg-gray-300 rounded-md w-full"></div>
                  <div className="h-4 bg-gray-300 rounded-md w-[90%]"></div>
                  <div className="h-4 bg-gray-300 rounded-md w-[80%]"></div>
                </div>
              </div>
            </div>

            {/* Skeleton Card 5 */}
            <div className="flex gap-3 items-center bg-white border border-gray-200 rounded-lg shadow-md animate-pulse">
              {/* Skeleton Image */}
              <div className="bg-gray-300 lg:w-[200px] md:w-[120px] w-[120px] h-full rounded-tl-lg"></div>
  
              {/* Skeleton Content */}
              <div className="flex flex-col justify-between p-4 leading-normal w-full">
                <div className="space-y-2">
                  <div className="h-6 bg-gray-300 rounded-md lg:w-[60%] w-[70%]"></div>
                  <div className="h-6 bg-gray-300 rounded-md lg:w-[50%] w-[60%]"></div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="h-4 bg-gray-300 rounded-md w-full"></div>
                  <div className="h-4 bg-gray-300 rounded-md w-[90%]"></div>
                  <div className="h-4 bg-gray-300 rounded-md w-[80%]"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 mb-8">
              <div className="h-64 w-full relative bg-gray-200 rounded animate-pulse">
                  <div className="w-[50%] absolute flex-1 space-y-4 top-[70%] left-[25%] py-1">
                      <div className="space-y-2">
                          <div className="h-8 bg-gray-300"></div>
                          <div className="h-4 bg-gray-300"></div>
                      </div>
                  </div>
              </div>
              <div className="h-64 w-full relative bg-gray-200 rounded animate-pulse">
                  <div className="w-[50%] absolute flex-1 space-y-4 top-[70%] left-[25%] py-1">
                      <div className="space-y-2">
                          <div className="h-8 bg-gray-300"></div>
                          <div className="h-4 bg-gray-300"></div>
                      </div>
                  </div>
              </div>
              <div className="h-64 w-full relative bg-gray-200 rounded animate-pulse">
                  <div className="w-[50%] absolute flex-1 space-y-4 top-[70%] left-[25%] py-1">
                      <div className="space-y-2">
                          <div className="h-8 bg-gray-300"></div>
                          <div className="h-4 bg-gray-300"></div>
                      </div>
                  </div>
              </div>
              <div className="h-64 w-full relative bg-gray-200 rounded animate-pulse">
                  <div className="w-[50%] absolute flex-1 space-y-4 top-[70%] left-[25%] py-1">
                      <div className="space-y-2">
                          <div className="h-8 bg-gray-300"></div>
                          <div className="h-4 bg-gray-300"></div>
                      </div>
                  </div>
              </div>
          </div>
        </section>
      </>
    );
  }
  