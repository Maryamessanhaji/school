import { Link } from "react-router-dom";
import CourseCard from "./component/CourseCard";

const courses = [
  {
    title: "دورة التسويق الرقمي",
    description:
      "تعلم استراتيجيات التسويق الرقمي وكيفية استخدامها للتوسع في الأعمال.",
    videoUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIcROVmTiF2zofvfdAiD_YkP1tNfdowgHc8w&s",
    price: "250",
  },

  {
    title: "دورة التسويق الرقمي",
    description:
      "تعلم استراتيجيات التسويق الرقمي وكيفية استخدامها للتوسع في الأعمال.",
    videoUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIcROVmTiF2zofvfdAiD_YkP1tNfdowgHc8w&s",
    price: "250",
  },
  {
    title: "دورة التسويق الرقمي",
    description:
      "تعلم استراتيجيات التسويق الرقمي وكيفية استخدامها للتوسع في الأعمال.",
    videoUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIcROVmTiF2zofvfdAiD_YkP1tNfdowgHc8w&s",
    price: "250",
  },
  {
    title: "دورة التسويق الرقمي",
    description:
      "تعلم استراتيجيات التسويق الرقمي وكيفية استخدامها للتوسع في الأعمال.",
    videoUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIcROVmTiF2zofvfdAiD_YkP1tNfdowgHc8w&s",
    price: "250",
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
            hover:bg-white transition-all ease-in-out hover:text-secondaryColor ">
            <Link to="/allCourses">جميع الدورات</Link>
          </button>
        </div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4  ">
          {courses.map((course, index) => {
            if (index < 3) {
              return (
                <CourseCard
                  key={index}
                  title={course.title}
                  description={course.description}
                  videoUrl={course.videoUrl}
                  price={course.price}
                />
              );
            }
          })}
        </div>
      </div>
    </section>
  );
}
