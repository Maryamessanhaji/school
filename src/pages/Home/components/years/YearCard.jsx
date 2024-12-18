import { Link } from "react-router-dom";

export default function YearCard() {
  return (
    <>
      <div className="container  font-[Marhey] mx-auto flex flex-col md:flex-row items-center md:items-start dark:bg-drkColor dark:text-white">
      <div class="  border border-secondaryColor   px-4 py-3  ml-4 shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-2xl  overflow-hidden mx-auto mt-4">
          <div class="flex flex-col items-center">
            <img
              src="https://readymadeui.com/team-2.webp"
              class="w-60 h-60   object-cover"
            />
            <div class="mt-6 text-center">
              <p class="text-base text-secondaryColor font-bold uppercase  dark:text-white">
              السنة الأول
              </p>
              <button className="bg-mainColor  px-4 py-1 text-[16px] font-bold text-black hover:text-mainColor hover:bg-white rounded-xl transition-all">
                  <Link to="/courses" className="">
          تفاصيل أكثر
                  </Link>
                </button>
            </div>
          </div>
        </div>
        
        <div class="border border-secondaryColor px-4 py-3  ml-4 shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-2xl  overflow-hidden mx-auto mt-4">
          <div class="flex flex-col items-center">
            <img
              src="https://readymadeui.com/team-2.webp"
              class="w-60 h-60 object-cover"
            />
            <div class="mt-6 text-center">
              <p class="text-base text-secondaryColor font-bold uppercase  dark:text-white">
              السنة الثانية

              </p>
              <button className="bg-mainColor  px-4 py-1 text-[16px] font-bold text-black hover:text-mainColor hover:bg-white rounded-xl transition-all">
                  <Link to="/courses" className="">
          تفاصيل أكثر
                  </Link>
                </button>
            </div>
          </div>
        </div>
        <div class="border border-secondaryColor px-4 py-3 shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-sm rounded-2xl  overflow-hidden mx-auto mt-4">
          <div class="flex flex-col items-center">
            <img
              src="https://readymadeui.com/team-2.webp"
              class="w-60 h-60  object-cover"
            />
            <div class="mt-6 text-center">
              <p class="text-base text-secondaryColor font-bold uppercase  dark:text-white">
              السنة التلاتة
              </p>
              <button className="bg-mainColor  px-4 py-1 text-[16px] font-bold text-black hover:text-mainColor hover:bg-white rounded-xl transition-all">
                  <Link to="/courses" className="">
          تفاصيل أكثر
                  </Link>
                </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
