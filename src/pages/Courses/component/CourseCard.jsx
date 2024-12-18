import { Link } from "react-router-dom";

export default function CourseCard({
  title,
  description,
  videoUrl,
  price,
  courseNumber,
}) {
  return (
   
      <>
        <div className=" shadow-md rounded-lg p-4 border  border-secondaryColor  ">
          {/* Image Section */}
          <div className="w-full ">
            <img
              src={videoUrl}
              alt="Course Image"
              className="w-full h-64 object-cover rounded-t-lg"
            />
          </div>

          {/* Floating Description Card */}
          <div className=" px-5 dark:bg-drkColor dark:text-white     ">
            {/* Title */}
            <h3 className="text-lg font-bold text-secondaryColor text-center border-b-2 border-secondaryColor pb-2">
              {title}
            </h3>
            <div className="flex justify-between items-center">
              <button className="bg-mainColor px-4 py-1 rounded-lg text-black hover:bg-white hover:text-secondaryColor dark:text-black transition-all">
                <span className="text-secondaryColor">{price}
                </span> ريال
              </button>
              <div className="text-left flex flex-col">
                <span>الأحد، ٨ ديسمبر ٢٠٢٤</span>
                <span>الأحد، ٨ ديسمبر ٢٠٢٤</span>
              </div>
            </div>
            <hr className="border-gray-400 my-4" />
            {/* Description and Buttons */}
            <div className="flex flex-col mt-4 space-y-2">
              {/* Description */}
              <p className="text-sm text-black dark:text-white text-justify">
                {description}
              </p>

              {/* Buttons */}
              <div className="flex justify-between items-center mt-4">
              <button className="bg-mainColor px-3 py-2 rounded-lg text-white hover:bg-white hover:text-secondaryColor dark:text-black transition-all">
               {courseNumber}   تفاصيل أكثر
                </button>
                <button className="bg-mainColor px-4 py-2 rounded-lg text-white hover:bg-white hover:text-secondaryColor dark:text-black transition-all">
                  انضم لنا الآن
                </button>
               
              </div>
            </div>

          

            {/* Footer Section */}
           
          </div>
        </div>
      </>
  
  );
}
