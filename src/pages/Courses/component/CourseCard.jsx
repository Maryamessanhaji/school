import { Link } from "react-router-dom";
import PropTypes from "prop-types";
export default function CourseCard({id, title, description, videoUrl, price }) {
  return (
    <>
      <div className="bg-white dark:bg-drkColor shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)]  
      w-full max-w-sm rounded-lg overflow-hidden mx-auto font-[sans-serif] mt-4 relative">
        <div className="min-h-[256px]">
          <img src={videoUrl} className="w-full " />
        </div>
        <h3 className="text-secondaryColor text-xl font-bold font-[Marhey] ">
          {title}
        </h3>

        <hr className="my-4 border-secondaryColor " />
        <div className="p-6 ">
          <div className="flex justify-between items-center">
            <div className="bg-secondaryColor text-white rounded-lg py-1 px-3 space-x-2 space-x-reverse">
              <span className=" text-white">{price}</span> ريال
            </div>
            <div className=" dark:text-white flex flex-col">
              <span>الأحد، ٨ ديسمبر ٢٠٢٤</span>
              <span>الأحد، ٨ ديسمبر ٢٠٢٤</span>
            </div>
          </div>

          <hr className="border-gray-400 my-4" />

          <p className="mt-4 text-lg text-gray-700 leading-relaxed dark:text-white">
            {description}
          </p>
          <div className="flex justify-between items-center">
            <button className="bg-mainColor  px-4 py-1 text-[16px] font-bold text-black hover:text-mainColor hover:bg-white rounded-xl transition-all">
              <Link to={`/courses/details/${id }`}>
             
                تفاصيل أكثر
              </Link>
            </button>
            <button className="flex items-center gap-[5px] bg-white px-4 py-1 border border-secondaryColor text-[16px] font-bold hover:shadow-custom text-black rounded-xl transition-all group">
              <Link to="/">انضم لنا الآن</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

CourseCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  videoUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
