import { Link } from "react-router-dom";

export default function YearCard() {
  return (
    <>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4   ">
        <div className="bg-white dark:bg-drkColor  dark:border shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)]  w-full max-w-sm rounded-lg overflow-hidden mx-auto font-[sans-serif]">
          <div className="flex flex-col items-center">
            <img
              src="https://readymadeui.com/team-2.webp"
              className="w-60 h-60   object-cover"
            />
            <div className=" text-center">
              <p className="text-lg text-secondaryColor font-bold   ">
                السنة الأول
              </p>
              <button className="bg-mainColor mb-3 px-4 py-1 text-[16px] font-bold text-black hover:text-mainColor hover:bg-white rounded-xl transition-all">
                <Link to="/courses" className="">
                  تفاصيل أكثر
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-drkColor dark:border shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)]  w-full max-w-sm rounded-lg overflow-hidden mx-auto font-[sans-serif] ">
          <div className="flex flex-col items-center">
            <img
              src="https://readymadeui.com/team-2.webp"
              className="w-60 h-60 object-cover"
            />
            <div className=" text-center">
              <p className="text-lg text-secondaryColor font-bold uppercase  ">
                السنة الثانية
              </p>
              <button className="bg-mainColor mb-3 px-4 py-1 text-[16px] font-bold text-black hover:text-mainColor hover:bg-white rounded-xl transition-all">
                <Link to="/courses" className="">
                  تفاصيل أكثر
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-drkColor dark:border shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)]  w-full max-w-sm rounded-lg overflow-hidden mx-auto font-[sans-serif] ">
          <div class="flex flex-col items-center">
            <img
              src="https://readymadeui.com/team-2.webp"
              class="w-60 h-60  object-cover"
            />
            <div class=" text-center">
              <p class="text-lg text-secondaryColor font-bold uppercase  ">
                السنة التلاتة
              </p>
              <button className="bg-mainColor mb-3 px-4 py-1 text-[16px] font-bold text-black hover:text-mainColor hover:bg-white rounded-xl transition-all">
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
