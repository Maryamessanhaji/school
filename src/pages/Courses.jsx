import React from "react";
import CourseCard from "./CourseCard";

export default function Courses() {
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
      title: "دورة اللغة الإنجليزية للمبتدئين",
      description: "دورة لتعلم أساسيات اللغة الإنجليزية بطريقة مبتكرة وسهلة.",
      videoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQENoDG3Inypgjd44eeVXBuXg3FdYAMou_Wkw&s",
      price: "150",
      courseNumber: "103",
    },
    {
      title: "دورة اللغة الإنجليزية للمبتدئين",
      description: "دورة لتعلم أساسيات اللغة الإنجليزية بطريقة مبتكرة وسهلة.",
      videoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQENoDG3Inypgjd44eeVXBuXg3FdYAMou_Wkw&s",
      price: "150",
      courseNumber: "103",
    },
    {
      title: "دورة اللغة الإنجليزية للمبتدئين",
      description: "دورة لتعلم أساسيات اللغة الإنجليزية بطريقة مبتكرة وسهلة.",
      videoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQENoDG3Inypgjd44eeVXBuXg3FdYAMou_Wkw&s",
      price: "150",
      courseNumber: "103",
    },
    {
      title: "دورة اللغة الإنجليزية للمبتدئين",
      description: "دورة لتعلم أساسيات اللغة الإنجليزية بطريقة مبتكرة وسهلة.",
      videoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQENoDG3Inypgjd44eeVXBuXg3FdYAMou_Wkw&s",
      price: "150",
      courseNumber: "103",
    },
  ];

  return (
    <section className="py-16  text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-800">دورات تعليمية</h2>
        <p className="mt-4 text-gray-600">
          اكتشف مجموعة من الدورات التعليمية المتخصصة في مختلف المجالات.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className=" mt-4 text-gray-800 py-2 px-7 rounded-lg shadow-lg bg-amber-400 hover:text-white transition duration-300">
            جميع الدورات
          </button>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
