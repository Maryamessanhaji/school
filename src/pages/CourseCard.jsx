import React from 'react'
import { Link } from 'react-router-dom'

export default function CourseCard({ title, description, videoUrl, price, courseNumber }) {
  return (
  
       
          <div className="bg-white shadow-lg rounded-lg overflow-hidden  ">
            {/* Video Section */}
            <div className="relative">
              <img
                src={videoUrl}
                alt={title}
                className="w-full h-48 object-cover transition hover:scale-110  hover:shadow-xl 	"
                controls
              />
            </div>
      
            {/* Course Details */}
            <div className="p-4">
              {/* Course Title */}
              <h3 className="text-xl font-bold text-right text-gray-800">{title}</h3>
      
              {/* Course Description */}
              <p className="mt-2 text-right text-gray-600">{description}</p>
      
              {/* Course Number and Price */}
              <div className="mt-4 flex justify-between items-center">
                <p className="text-right text-gray-700">
                  <strong>رقم الدورة:</strong> {courseNumber}
                </p>
                <p className="text-right text-green-600 font-semibold">
                  <strong>السعر:</strong> {price} ريال
                </p>
              </div>
            </div>
      
            {/* Learn More Button */}
            <div className="p-4 bg-gray-50">
              <button className="bg-gradient-to-r from-[#cfc85a] to-amber-400  hover:from-amber-500  hover:to-[#cfc85a] text-white py-2 px-4 rounded-full w-full">
                <Link to='/courseDescription'>
                تعرف على المزيد

                </Link>
              </button>
            </div>
          </div>
       
  )
}
