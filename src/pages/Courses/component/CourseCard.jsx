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
      <><div className="relative ml-6 max-w-sm mx-auto transform hover:scale-110 hover:brightness-110">
  {/* Image Section */}
  <div className="w-full">
    <img
      src={videoUrl}
      alt="Course Image"
      className="w-full h-64 object-cover rounded-t-lg"
    />
  </div>

  {/* Floating Description Card */}
  <div className="absolute -bottom-20 left-2 right-2 dark:bg-drkColor dark:text-white bg-white border border-gray-200 shadow-lg rounded-lg p-4">
    {/* Title */}
    <h3 className="text-lg font-bold text-secondaryColor text-center border-b-2 border-secondaryColor pb-2">
      {title}
    </h3>

    {/* Description and Buttons */}
    <div className="flex flex-col mt-4 space-y-2">
      {/* Description */}
      <p className="text-sm text-black dark:text-white text-justify">
        {description}
      </p>

      {/* Buttons */}
      <div className="flex justify-between items-center mt-4">
        <button className="bg-secondaryColor px-4 py-2 rounded-lg text-white hover:bg-white hover:text-secondaryColor dark:text-black transition-all">
          انضم لنا الآن
        </button>
        <button className="bg-secondaryColor px-4 py-2 rounded-lg text-white hover:bg-white hover:text-secondaryColor dark:text-black transition-all">
          تفاصيل أكثر
        </button>
      </div>
    </div>

    <hr className="border-gray-400 my-4" />

    {/* Footer Section */}
    <div className="flex justify-between items-center">
      <button className="bg-secondaryColor px-4 py-2 rounded-lg text-white hover:bg-white hover:text-secondaryColor dark:text-black transition-all">
        انضم لنا الآن
      </button>
      <div className="text-left flex flex-col">
        <span>الأحد، ٨ ديسمبر ٢٠٢٤</span>
        <span>الأحد، ٨ ديسمبر ٢٠٢٤</span>
      </div>
    </div>
  </div>
</div>



      </>
    </>
  );
}
