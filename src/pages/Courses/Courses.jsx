import CourseCard from "./component/CourseCard";

const courses = [
  {
    title: "دورة تعلم البرمجة",
    description:
      "دورة متكاملة لتعلم البرمجة من الصفر باستخدام لغات البرمجة الحديثة.",
    videoUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQENoDG3Inypgjd44eeVXBuXg3FdYAMou_Wkw&s",
    price: "300",
    courseNumber: "101",
  },
  {
    title: "دورة التسويق الرقمي",
    description:
      "تعلم استراتيجيات التسويق الرقمي وكيفية استخدامها للتوسع في الأعمال.",
    videoUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQENoDG3Inypgjd44eeVXBuXg3FdYAMou_Wkw&s",
    price: "250",
    courseNumber: "102",
  },
  {
    title: "دورة التسويق الرقمي",
    description:
      "تعلم استراتيجيات التسويق الرقمي وكيفية استخدامها للتوسع في الأعمال.",
    videoUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQENoDG3Inypgjd44eeVXBuXg3FdYAMou_Wkw&s",
    price: "250",
    courseNumber: "102",
  },
];
export default function Courses() {
  return (
    <section className="py-16  text-center">
      <div className="container mx-auto px-4">
        <h4 className="text-[40px] relative font-[Marhey] font-bold text-secondaryColor ">
          كورستنا التعليمية
        </h4>
        <div className="mt-12 flex justify-between w-[100%]">
          <p className="max-w-[300px] dark:text-white">
            اكتشف مجموعة من الدورات التعليمية المتخصصة في مختلف المجالات.
          </p>
          <button
            className="bg-secondaryColor h-fit p-[5px_15px] w-40 rounded-lg text-white
            hover:bg-white transition-all ease-in-out hover:text-secondaryColor "
          >
            جميع الدورات
          </button>
        </div>

        <div className="  flex  flex-col md:flex-row items-center md:items-start mx-auto  ">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              title={course.title}
              description={course.description}
              videoUrl={course.videoUrl}
              price={course.price}
              courseNumber={course.courseNumber}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
