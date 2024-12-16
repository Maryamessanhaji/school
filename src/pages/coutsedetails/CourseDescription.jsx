export default function CourseDescription() {
  return (
    <div className="bg-gray-100 py-16 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start">
        {/* Left Section: Course Image */}

        {/* Right Section: Course Details */}
        <div className="w-full md:w-1/2 md:pl-12 text-right">
          {/* Course Title */}
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            اسم الدورة التدريبية
          </h2>
          {/* Course Description */}
          <p className="text-gray-600 leading-relaxed mb-6">
            هذه الدورة مصممة لمساعدتك على تطوير مهاراتك في المجال المطلوب. تتضمن
            الدورة محتوى تعليمي عالي الجودة يغطي جميع المواضيع الأساسية بطريقة
            بسيطة وسهلة الفهم.
          </p>
          {/* Instructor Info */}
          <div className="mb-6">
            <h4 className="text-xl font-semibold text-gray-800">:المحاضر </h4>
            <p className="text-gray-600">د. أحمد محمد</p>
          </div>
          {/* Features List */}
          <div className="mb-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              : مميزات الدورة
            </h4>
            <ul className="list-none pr-4 text-gray-600 space-y-2">
              <li>إمكانية الوصول مدى الحياة للمحتوى</li>
              <li>تقييمات واختبارات دورية</li>
              <li>شهادات معتمدة عند الانتهاء</li>
              <li>دعم كامل من المدرب</li>
            </ul>
          </div>
          {/* Call-to-Action Button */}
          <div>
            <button className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">
              اشترك الآن
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQENoDG3Inypgjd44eeVXBuXg3FdYAMou_Wkw&s"
            alt="Course"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
